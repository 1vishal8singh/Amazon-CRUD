import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { consumers } from 'stream';
import { LoggerMiddleware } from './logger';
import { logger } from './middleware.function';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  )
  app.use(logger)
  await app.listen(5000);
}
bootstrap();
