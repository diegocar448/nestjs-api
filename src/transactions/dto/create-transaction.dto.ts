import {
  IsISO8601,
  IsNotEmpty,
  MaxLength,
  IsString,
  IsIn,
} from 'class-validator';
import {
  TransactionCategory,
  TransactionCategoryList,
  TransactionType,
  TransactionTypeList,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsISO8601() //data no formato "2025/07/05"
  @IsNotEmpty()
  payment_date: Date;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsIn(TransactionCategoryList)
  @IsNotEmpty()
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsIn(TransactionTypeList)
  @IsNotEmpty()
  type: TransactionType;
}
