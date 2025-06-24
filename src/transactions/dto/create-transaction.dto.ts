import { IsISO8601, IsNotEmpty, MaxLength, IsString } from 'class-validator';
import {
  TransactionCategory,
  TransactionType,
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

  @IsNotEmpty()
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  type: TransactionType;
}
