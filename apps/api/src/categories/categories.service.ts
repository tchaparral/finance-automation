import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Injectable()
export class CategoriesService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /categories
    async findAll() {
        return this.prisma.category.findMany({
            orderBy: {createdAt: 'desc'}
        });
    }

    // POST /categories
    async create(data: CreateCategoryDto) {
        const { name, type, userId } = data
        return this.prisma.category.create({
            data: {
                name,
                type,
                userId,
            },
        });
    }
}