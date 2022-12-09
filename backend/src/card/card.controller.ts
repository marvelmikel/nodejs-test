import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { QueryParamsDto } from './dto/query-params.dto';
import { Card } from './entities/card.entity';
// import { UpdateCardDto } from './dto/update-card.dto';

@ApiTags('Cards')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.cardService.create(createCardDto);
  }

  @Get()
  findAll(@Query() queryParamsDto: QueryParamsDto): Promise<Card[]> {
    return this.cardService.findAll(queryParamsDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
  //   return this.cardService.update(+id, updateCardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cardService.remove(+id);
  // }
}
