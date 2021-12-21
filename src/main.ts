import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Opção importante para utilizar os pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  // Recebe dois parametros: 
  // 1 - app que representa a aplicação
  // 2 - fallbackOnErrors
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(3000);
}
bootstrap();
