import { Test, TestingModule } from '@nestjs/testing';
import { AppointmensController } from './appointmens.controller';
import { AppointmensService } from './appointmens.service';

describe('AppointmensController', () => {
  let controller: AppointmensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmensController],
      providers: [AppointmensService],
    }).compile();

    controller = module.get<AppointmensController>(AppointmensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
