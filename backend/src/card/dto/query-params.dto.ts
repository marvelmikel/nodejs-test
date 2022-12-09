import { ApiProperty } from '@nestjs/swagger';

export class QueryParamsDto {
  @ApiProperty({
    required: false,
    type: Number,
    default: 50,
  })
  size: number;

  @ApiProperty({
    required: false,
    type: Number,
    default: 1,
  })
  page: number;

  @ApiProperty({
    required: false,
    description: 'Search By Name',
    type: String,
  })
  search: string;
}
