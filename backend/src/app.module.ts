import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './utils/config/env.config';
import { HelperModule } from './helper/helper.module';

const envFilePath: string = getEnvPath(`${__dirname}/utils/env`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mongodb',
        url: config.get('DATABASE_URL'),
        synchronize: true,
        useUnifiedTopology: true,
        entities: ['dist/**/*.entity.js'],
      }),
      inject: [ConfigService],
    }),
    CardModule,
    HelperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
