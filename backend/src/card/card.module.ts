import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { HelperModule } from 'src/helper/helper.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card]), HelperModule],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
