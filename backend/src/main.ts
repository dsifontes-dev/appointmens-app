import { NestFactory } from '@nestjs/core';
import { AppointmentsModule } from './appointments/appointments.module';

async function bootstrap() {
  const app = await NestFactory.create(AppointmentsModule);
  await app.listen(3000);
}
bootstrap();
