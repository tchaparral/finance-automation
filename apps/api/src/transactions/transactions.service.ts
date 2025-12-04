import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";

@Injectable()
export class TransactionsService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /transactions
    async findAll(params?: { accountId?: number; categoryId?: number }) {
        const where: any = {};

        if (params?.accountId !== undefined) {
            where.accountId = params.accountId
        }

        if (params?.categoryId !== undefined) {
            where.accountId = params.accountId
        }

        return this.prisma.transaction.findMany({
            where,
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