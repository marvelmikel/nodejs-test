"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const helper_service_1 = require("../helper/helper.service");
const typeorm_2 = require("typeorm");
const card_entity_1 = require("./entities/card.entity");
let CardService = class CardService {
    constructor(cardRepository, helperService) {
        this.cardRepository = cardRepository;
        this.helperService = helperService;
    }
    async create(createCardDto) {
        try {
            const regex = new RegExp('^[0-9]*$', 'i');
            const checkCardNumber = regex.test(createCardDto.cardNumber);
            if (!checkCardNumber)
                throw new Error('Invalid Card Number');
            const luhnCheck = this.helperService.luhnCheck(createCardDto.cardNumber);
            if (!luhnCheck)
                throw new Error('Invalid luhn card number');
            const newCard = this.cardRepository.create(Object.assign(Object.assign({}, createCardDto), { balance: 0 }));
            const savedData = await this.cardRepository.save(newCard);
            return savedData;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findAll(payload) {
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
};
CardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.Card)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository,
        helper_service_1.HelperService])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map