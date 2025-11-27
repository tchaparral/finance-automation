import { Controller, Get, Post, Body } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { CategoriesService } from './categories.service'

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }
    @Post()
    create(@Body() dto: CreateCategoryDto) {
        return this.categoriesService.create(dto)
    }
}