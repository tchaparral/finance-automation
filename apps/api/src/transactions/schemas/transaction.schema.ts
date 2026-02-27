import { z } from 'zod'

export const CreateTransactionSchema = z.object({
    type: z.enum(['INCOME', 'EXPENSE', 'TRANSFER']),
    amount: z.number().positive(),
    description: z.string().optional(),
    date: z
        .string()
        .datetime()
        .transform((val) => new Date(val))
        .optional(),
    accountId: z.number().int().optional(),
    categoryId: z.number().int().optional(),
});

export type CreateTransactionInput = z.infer<typeof CreateTransactionSchema>

