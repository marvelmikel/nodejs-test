import { cardData } from '../data/card.data';

export const CardService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(cardData()),
  findAll: jest.fn().mockResolvedValue([cardData()]),
});
