"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const card_data_1 = require("../data/card.data");
exports.CardService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue((0, card_data_1.cardData)()),
    findAll: jest.fn().mockResolvedValue([(0, card_data_1.cardData)()]),
});
//# sourceMappingURL=card.service.js.map