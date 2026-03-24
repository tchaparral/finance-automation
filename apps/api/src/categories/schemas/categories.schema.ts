import { z } from 'zod'

export const CreateCategorySchema = z.object({
    name: z.string().trim().min(1),
    type: z.enum(['INCOME', 'EXPENSE', 'TRANSFER']),
});

export type CreateCategoryInput = z.infer< typeof CreateCategorySchema>