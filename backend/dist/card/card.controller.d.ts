import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { QueryParamsDto } from './dto/query-params.dto';
import { Card } from './entities/card.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    create(createCardDto: CreateCardDto): Promise<Card>;
    findAll(queryParamsDto: QueryParamsDto): Promise<Card[]>;
}
