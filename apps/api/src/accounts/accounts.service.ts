import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAccountDto } from "./dto/create-account-dto";

@Injectable()
export class AccountsService {
    constructor(private readonly prisma: PrismaService) {}

    // GET /accounts
    async findAll() {
        return this.prisma.account.findMany({
            orderBy: { createdAt: 'desc'}
        });
    }

    // POST /accounts
    async create(data: CreateAccountDto) {
        const { name, type, userId } = data;

        return this.prisma.account.create({
            data: {
                name,
                type,
                userId,
            },
        });
    }
}