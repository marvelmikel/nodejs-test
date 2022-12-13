import { Test, TestingModule } from '@nestjs/testing';
import { HelperService } from './helper.service';

jest.mock('./helper.service');

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelperService],
    }).compile();

    service = module.get<HelperService>(HelperService);
    jest.clearAllMocks();
  });

  describe('When luhnCheck is called', () => {
    let num: string;
    let isValid: boolean;

    beforeEach(async () => {
      num = '4444333322221111';
      isValid = await service.luhnCheck(num);
    });
    test('then it should call helper Service', () => {
      expect(service.luhnCheck).toHaveBeenCalledWith(num);
    });

    test('then it should return an bool', async () => {
      expect(isValid).toBe(true);
    });
  });
});
