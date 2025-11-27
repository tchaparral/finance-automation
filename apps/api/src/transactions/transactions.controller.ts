import { Controller, Get, Post, Body } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";

@Controller('transactions')
export class TransactionsController {
   constructor (
    private readonly transactionService: TransactionsService,
   ) {}

   @Get()
   findAll() {
    return this.transactionService.findAll()
   }

   @Post()
   create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.create(dto);
   }
}
