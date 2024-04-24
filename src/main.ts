import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT);

  logger.log(`App running in port: ${process.env.PORT}`)

}
bootstrap();
