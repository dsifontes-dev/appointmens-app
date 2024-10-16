import { Module } from '@nestjs/common';
import { AppointmensService } from './appointmens.service';
import { AppointmensController } from './appointmens.controller';

@Module({
  controllers: [AppointmensController],
  providers: [AppointmensService],
})
export class AppointmensModule {}
