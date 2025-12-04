import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";

@Controller('transactions')
export class TransactionsController {
   constructor (
    private readonly transactionService: TransactionsService,
   ) {}

   @Get()
   findAll(
      @Query('accountId') accountId: string,
      @Query('categoryId') categoryId: string,
   ) {
      const parseAccountId = 
         accountId !== undefined ? Number(accountId) : undefined;

      const parseCategoryId = 
         categoryId !== undefined ? Number (categoryId) : undefined

      return this.transactionService.findAll({
         accountId: isNaN(parseAccountId!) ? undefined : parseAccountId,
         categoryId: isNaN(parseCategoryId!) ? undefined : parseCategoryId,
      });
   }

   @Post()
   create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.create(dto);
   }
}
