import { Test, TestingModule } from '@nestjs/testing';
import { AmorsaudeGateway } from './amorsaude.gateway';

describe('AmorsaudeGateway', () => {
  let gateway: AmorsaudeGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmorsaudeGateway],
    }).compile();

    gateway = module.get<AmorsaudeGateway>(AmorsaudeGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
