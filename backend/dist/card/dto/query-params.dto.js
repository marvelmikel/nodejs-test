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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueryParamsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
        default: 50,
    }),
    __metadata("design:type", Number)
], QueryParamsDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
        default: 1,
    }),
    __metadata("design:type", Number)
], QueryParamsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Search By Name',
        type: String,
    }),
    __metadata("design:type", String)
], QueryParamsDto.prototype, "search", void 0);
exports.QueryParamsDto = QueryParamsDto;
//# sourceMappingURL=query-params.dto.js.map