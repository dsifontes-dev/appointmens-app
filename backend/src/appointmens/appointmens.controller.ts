import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmensService } from './appointmens.service';
import { CreateAppointmenDto } from './dto/create-appointmen.dto';
import { UpdateAppointmenDto } from './dto/update-appointmen.dto';

@Controller('appointmens')
export class AppointmensController {
  constructor(private readonly appointmensService: AppointmensService) {}

  @Post()
  create(@Body() createAppointmenDto: CreateAppointmenDto) {
    return this.appointmensService.create(createAppointmenDto);
  }

  @Get()
  findAll() {
    return this.appointmensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmenDto: UpdateAppointmenDto) {
    return this.appointmensService.update(+id, updateAppointmenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmensService.remove(+id);
  }
}
