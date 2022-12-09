import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Card {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  cardNumber: string;

  @Column()
  balance: number;

  @Column()
  limit: number;
}
