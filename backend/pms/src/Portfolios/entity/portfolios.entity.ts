import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseCustomEntity } from '../../utilities/baseEntity';
import { Users } from '../../Users/entity/users.entity';

export enum TransactionType {
  BUY = 'BUY',
  SELL = 'SELL',
}

@Entity('portfolios')
export class Portfolio extends BaseCustomEntity {
  @ManyToOne(() => Users, (user) => user.holdings)
  @JoinColumn({ name: 'userId' })
  user: Users;

  @Column()
  userId: string;

  @Column()
  stock: string;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  type: TransactionType;

  @Column('decimal', { precision: 10, scale: 2 })
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('timestamp')
  transactionDate: Date;
}
