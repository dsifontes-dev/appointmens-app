import { Test, TestingModule } from '@nestjs/testing';
import { AppointmensService } from './appointmens.service';

describe('AppointmensService', () => {
  let service: AppointmensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmensService],
    }).compile();

    service = module.get<AppointmensService>(AppointmensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
