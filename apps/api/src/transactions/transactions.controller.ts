import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import {CreateTransactionSchema} from "./schemas/transaction.schema"
import type { CreateTransactionInput } from "./schemas/transaction.schema";

@Controller('transactions')
export class TransactionsController {
   constructor (
    private readonly transactionService: TransactionsService,
   ) {}

   @Get()
   findAll(
      @Query('accountId') accountId?: string,
      @Query('categoryId') categoryId?: string,
      @Query('type') type?: string,
   ) {
      const parseAccountId = 
         accountId !== undefined ? Number(accountId) : undefined;

      const parseCategoryId = 
         categoryId !== undefined ? Number (categoryId) : undefined

      const allowedTypes = ['INCOME', 'EXPENSE', 'TRANSFER'] as const;
      const normalizedType = allowedTypes.includes(type as any)
         ? (type as (typeof allowedTypes)[number])
         : undefined;

      return this.transactionService.findAll({
         accountId: isNaN(parseAccountId!) ? undefined : parseAccountId,
         categoryId: isNaN(parseCategoryId!) ? undefined : parseCategoryId,
      });
   }

   @Post()
   create(
      @Body(new ZodValidationPipe(CreateTransactionSchema))
      data: CreateTransactionInput,
   ) {
      return this.transactionService.create(data);
   }
}
