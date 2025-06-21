import {
  Model,
  Column,
  Table,
  AllowNull,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

export enum TransactionCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2',
}

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

// export class Transaction {
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  //não permitir campo nulo
  @Column({ allowNull: false })
  payment_date: Date;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  type: string;
}
