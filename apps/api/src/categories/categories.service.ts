import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryInput } from "./schemas/categories.schema";
import { ConflictException } from "@nestjs/common";

@Injectable()
export class CategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /categories
    async findAll(params?: {
        name?: string;
        type?: 'INCOME' | 'EXPENSE';
    }) {
        const where: any = {};

        if (params?.name !== undefined) {
            where.name = {
                contains: params.name,
                mode: 'insensitive'
            }
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
        const name = data.name.trim();

        const existingCategory = await this.prisma.category.findFirst({
            where: {
                type: data.type,
                name:{
                    equals: name,
                    mode: 'insensitive'
                },
            },
        });

        if (existingCategory) {
            throw new ConflictException('Categoria já existe')
        }

        return this.prisma.category.create({
            data: {
                name,
                type: data.type,
            },
        });
    }
}