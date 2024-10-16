import { Injectable } from '@nestjs/common';
import { CreateAppointmenDto } from './dto/create-appointmen.dto';
import { UpdateAppointmenDto } from './dto/update-appointmen.dto';

@Injectable()
export class AppointmensService {
  create(createAppointmenDto: CreateAppointmenDto) {
    return 'This action adds a new appointmen';
  }

  findAll() {
    return `This action returns all appointmens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmen`;
  }

  update(id: number, updateAppointmenDto: UpdateAppointmenDto) {
    return `This action updates a #${id} appointmen`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmen`;
  }
}
