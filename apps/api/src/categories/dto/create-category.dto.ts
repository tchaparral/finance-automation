export class CreateCategoryDto {
    name: string;
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
    userId?: number;
}