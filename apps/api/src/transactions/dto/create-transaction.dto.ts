export class CreateTransactionDto {
    // Type
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER';

    // How much
    amount: number;

    // Description (optional)
    description?: string;

    // When (optional)
    date?: Date;

    // Who (optional by now)
    userId?: number;
    accountId?: number;

    // What (optional by now)
    categoryId?: number;
}