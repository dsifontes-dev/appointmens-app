import { Cache } from 'cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import appointments from './mock/appointments';
import { Appointment } from './entities/appointment.entity';

const KEY = 'APPOINTMENTS';

@Injectable()
export class AppointmentsService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    cacheManager.set(KEY, JSON.stringify(appointments));
  }

  async getCurrentList() {
    const appointments = await this.cacheManager.get(KEY);
    const list = JSON.parse(appointments as string);
    return list as Appointment[];
  }

  async create(createAppointmentDto: CreateAppointmentDto) {
    const list = await this.getCurrentList();
    list.push({ id: list.length + 1, ...createAppointmentDto });
    this.cacheManager.set(KEY, JSON.stringify(list));

    return 'success';
  }

  async findAll() {
    return await this.cacheManager.get(KEY);
  }

  async findOne(id: number) {
    const list = await this.getCurrentList();
    const currentAppointment = list.find((item) => item.id === id);
    return currentAppointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    const newItem = {
      id,
      ...updateAppointmentDto,
    };
    const list = await this.getCurrentList();
    const updatedList = list.map((item) => (item.id === id ? newItem : item));
    this.cacheManager.set(KEY, JSON.stringify(updatedList));
    return 'SUCCESS';
  }

  async remove(id: number) {
    const list = await this.getCurrentList();
    const updatedList = list.filter((item) => item.id !== id);
    this.cacheManager.set(KEY, JSON.stringify(updatedList));
    return `SUCCESS`;
  }
}
