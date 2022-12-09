import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty({
    description: 'The name on the card',
    type: String,
    example: 'Samuel Obadoni',
  })
  name: string;

  @ApiProperty({
    description: 'The card number',
    type: String,
    example: '7837372789483',
  })
  cardNumber: string;

  @ApiProperty({
    description: 'The card limit',
    type: Number,
  })
  limit: number;
}
