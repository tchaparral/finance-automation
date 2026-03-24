import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
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
            where.categoryId = params.categoryId;
        }

        if (params?.type !== undefined) {
            where.type = params.type;
        }

        return this.prisma.transaction.findMany({
            where,
            include: {
                category: true
            },
            orderBy: {createdAt: 'desc'},
        });
    }

    // POST /transactions
    async create(data: CreateTransactionInput) {
        const { type, amount, description, date, accountId, categoryId } = data;
        
        if (type === 'TRANSFER' && categoryId) {
            throw new BadRequestException('Transfer não pode ter categoria')
        }

        if (categoryId) {
            const category = await this.prisma.category.findUnique({
                where: {id: categoryId},
            });

        if (!category) {  
            throw new NotFoundException('Categoria não encontrada');
        }

        if (category.type !== type) {
            throw new BadRequestException(`Categoria do tipo ${category.type} não pode ser usada em transação ${type}`)
        }

        }

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