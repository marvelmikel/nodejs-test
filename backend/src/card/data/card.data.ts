import { Card } from '../entities/card.entity';

export const cardData = (): Card => {
  return {
    _id: '903948',
    name: 'Daniel Great',
    cardNumber: '44443332221111',
    balance: 60,
    limit: 500,
  };
};
