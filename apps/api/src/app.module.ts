import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module'
import { PrismaModule } from './prisma/prisma.module';
import { AccountsModule } from './accounts/accounts.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [PrismaModule, TransactionsModule, AccountsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
