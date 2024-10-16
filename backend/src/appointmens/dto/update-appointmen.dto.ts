import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmenDto } from './create-appointmen.dto';

export class UpdateAppointmenDto extends PartialType(CreateAppointmenDto) {}
