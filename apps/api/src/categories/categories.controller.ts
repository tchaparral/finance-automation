import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { CategoriesService } from './categories.service'
import { CreateCategorySchema } from './schemas/categories.schema';
import type { CreateCategoryInput } from './schemas/categories.schema';


@Controller('categories')
export class CategoriesController {
    constructor (
        private readonly categoriesService:CategoriesService,
    ) {}   

    @Get()
    findAll(
        @Query('name') name?: string,
        @Query('type') type?: 'INCOME' | 'EXPENSE',        
    ) {
        return this.categoriesService.findAll({
            name,
            type,
        });
    }

    @Post()
    create(
        @Body(new ZodValidationPipe(CreateCategorySchema))
        data: CreateCategoryInput,
    ) {
        return this.categoriesService.create(data);
    }
} 