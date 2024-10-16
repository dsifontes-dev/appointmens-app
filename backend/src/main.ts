import { NestFactory } from '@nestjs/core';
import { AppointmensModule } from './appointmens/appointmens.module';

async function bootstrap() {
  const app = await NestFactory.create(AppointmensModule);
  await app.listen(3000);
}
bootstrap();
