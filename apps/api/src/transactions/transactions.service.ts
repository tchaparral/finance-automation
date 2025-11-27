import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";

@Injectable()
export class TransactionsService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /transactions
    async findAll() {
        return this.prisma.transaction.findMany({
            orderBy: {createdAt: 'desc'}
        });
    }

    // POST /transactions
    async create(data: CreateTransactionDto) {
        const {type, amount, description, date, userId, accountId, categoryId} = data;       

        return this.prisma.transaction.create({
            data: {
                type,
                amount,
                description,
                date,
                userId,
                accountId,
                categoryId,
            },
        });
    }
}