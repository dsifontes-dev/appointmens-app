import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  imports: [
    CacheModule.register({
      ttl: 0,
    }),
  ],
})
export class AppointmentsModule {}
