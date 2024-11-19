import { Test, TestingModule } from '@nestjs/testing';
import { MathClientController } from './math-client.controller';

describe('MathClientController', () => {
  let controller: MathClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathClientController],
    }).compile();

    controller = module.get<MathClientController>(MathClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
