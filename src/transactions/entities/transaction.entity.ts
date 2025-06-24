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

//transformar o ENUM em um array de valores
export const TransactionCategoryList = Object.values(TransactionCategory);

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}
//transformar o ENUM em um array de valores
export const TransactionTypeList = Object.values(TransactionType);

interface TransactionAttributes {
  id: string;
  payment_date: Date;
  name: string;
  description: string;
  category: TransactionCategory;
  amount: number;
  type: string;
}

type TransactionCreationAttributes = Omit<TransactionAttributes, 'id'>; // o ID é gerado automaticamente

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction
  extends Model<TransactionAttributes, TransactionCreationAttributes>
  implements TransactionAttributes
{
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

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
