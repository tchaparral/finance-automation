import { PipeTransform, BadRequestException } from "@nestjs/common";
import { z, ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) {}

    transform(value: any) {
        const parsed = this.schema.safeParse(value);

        if (!parsed.success) {
            const errors = parsed.error.issues.map(err => ({
                path: err.path.join('.'),
                message: err.message,
            }));
            
            throw new BadRequestException({
                message: 'Validation Field',
                errors,
            });
        }
        return parsed.data;
    }
}