import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryInput } from "./schemas/categories.schema";

@Injectable()
export class CategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /categories
    async findAll(params?: {
        name?: string;
        type?: 'INCOME' | 'EXPENSE' | 'TRANSFER';
    }) {
        const where: any = {};

        if (params?.name !== undefined) {
            where.name = params.name
        }

        if (params?.type !== undefined) {
            where.type = params.type
        }

        return this.prisma.category.findMany({
            where,
            orderBy: {createdAt: 'desc'}
        });
    }

    // POST /categories
    async create(data: CreateCategoryInput) {
        const { name, type } = data
        return this.prisma.category.create({
            data: {
                name,
                type,
            },
        });
    }
}