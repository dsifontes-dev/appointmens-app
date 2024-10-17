import { NestFactory } from '@nestjs/core';
import { AppointmentsModule } from './appointments/appointments.module';

async function bootstrap() {
  const app = await NestFactory.create(AppointmentsModule);
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
