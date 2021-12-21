import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Opção importante para utilizar os pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  await app.listen(3000);
}
bootstrap();
