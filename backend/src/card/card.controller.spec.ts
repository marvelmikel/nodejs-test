import { Test, TestingModule } from '@nestjs/testing';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { cardData } from './data/card.data';
import { QueryParamsDto } from './dto/query-params.dto';
import { Card } from './entities/card.entity';

jest.mock('./card.service');

describe('CardController', () => {
  let controller: CardController;
  let service: CardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [CardService],
    }).compile();

    controller = module.get<CardController>(CardController);
    service = module.get<CardService>(CardService);
    jest.clearAllMocks();
  });

  describe('getCards', () => {
    describe('When find all cards is called', () => {
      let queryParamsDto: QueryParamsDto;
      let cards: Card[];

      beforeEach(async () => {
        queryParamsDto = {
          size: 50,
          page: 1,
          search: null,
        };
        cards = await controller.findAll(queryParamsDto);
      });
      test('then it should call cardService', () => {
        expect(service.findAll).toHaveBeenCalledWith(queryParamsDto);
      });

      test('then it should return an array of card', async () => {
        expect(cards).toEqual([cardData()]);
      });
    });
  });
});
