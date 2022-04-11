import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(categoryDto: CategoryDto): Promise<import(".prisma/client").Category>;
    findAll(): Promise<import(".prisma/client").Category[]>;
    findOne(id: number): Promise<import(".prisma/client").Category>;
    update(id: number, categoryDto: CategoryDto): Promise<import(".prisma/client").Category>;
    remove(id: number): Promise<import(".prisma/client").Category>;
}
