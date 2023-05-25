import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger()
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter);

  // Settings
  app.enableCors()
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({whitelist:true, transform:true}))

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  logger.verbose(`API Inicializada en:${await app.getUrl()}`,"Main.ts")
}
bootstrap();
