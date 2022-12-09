import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Code Challange')
    .setDescription('Credit Card System')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // server listening
  await app.listen(5000);
}
bootstrap();
