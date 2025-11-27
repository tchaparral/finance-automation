export class CreateAccountDto {
    name: string;
    type: 'CASH' | 'DEBIT' | 'CREDIT' | 'SAVINGS' | 'OTHER';
    userId?: number;
}