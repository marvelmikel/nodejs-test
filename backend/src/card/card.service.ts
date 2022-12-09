import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from 'src/helper/helper.service';
import { MongoRepository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { QueryParamsDto } from './dto/query-params.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: MongoRepository<Card>,
    private helperService: HelperService,
  ) {}
  async create(createCardDto: CreateCardDto): Promise<Card> {
    try {
      // regex card number test
      const regex = new RegExp('^[0-9]*$', 'i');
      const checkCardNumber = regex.test(createCardDto.cardNumber);
      if (!checkCardNumber) throw new Error('Invalid Card Number');

      // luhn Check
      const luhnCheck = this.helperService.luhnCheck(createCardDto.cardNumber);
      if (!luhnCheck) throw new Error('Invalid luhn card number');

      // create card instance
      const newCard = this.cardRepository.create({
        ...createCardDto,
        balance: 0,
      });

      // save card
      const savedData = await this.cardRepository.save(newCard);

      return savedData;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(payload: QueryParamsDto): Promise<Card[]> {
    const { search, page, size } = payload;

    const result = await this.cardRepository
      .aggregate([
        { $match: search ? { name: { $regex: search } } : {} },
        { $skip: (Number(page) - 1) * Number(size) },
        { $limit: Number(size) },
      ])
      .toArray();

    return result;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} card`;
  // }

  // update(id: number, updateCardDto: UpdateCardDto) {
  //   return `This action updates a #${id} card`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} card`;
  // }
}
