import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTransactionInput } from "./schemas/transaction.schema";

@Injectable()
export class TransactionsService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /transactions
    async findAll(params?: { 
            accountId?: number;
            categoryId?: number;
            type?: 'INCOME' | 'EXPENSE' | 'TRANSFER';
        }) {
        const where: any = {};

        if (params?.accountId !== undefined) {
            where.accountId = params.accountId;
        }

        if (params?.categoryId !== undefined) {
            where.accountId = params.accountId;
        }

        if (params?.type !== undefined) {
            where.type = params.type;
        }

        return this.prisma.transaction.findMany({
            where,
            orderBy: {createdAt: 'desc'}
        });
    }

    // POST /transactions
    async create(data: CreateTransactionInput) {
        const { type, amount, description, date, accountId, categoryId } = data;       

        return this.prisma.transaction.create({
            data: {
                type,
                amount,
                description,
                date,
                accountId,
                categoryId,
            },
        });
    }
}