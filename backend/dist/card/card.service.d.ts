import { HelperService } from 'src/helper/helper.service';
import { MongoRepository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { QueryParamsDto } from './dto/query-params.dto';
import { Card } from './entities/card.entity';
export declare class CardService {
    private cardRepository;
    private helperService;
    constructor(cardRepository: MongoRepository<Card>, helperService: HelperService);
    create(createCardDto: CreateCardDto): Promise<Card>;
    findAll(payload: QueryParamsDto): Promise<Card[]>;
}
