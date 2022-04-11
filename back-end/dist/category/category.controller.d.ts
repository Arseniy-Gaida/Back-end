import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(categoryDto: CategoryDto): Promise<import(".prisma/client").Category>;
    findAll(): Promise<import(".prisma/client").Category[]>;
    findOne(id: string): Promise<import(".prisma/client").Category>;
    update(id: string, categoryDto: CategoryDto): Promise<import(".prisma/client").Category>;
    remove(id: string): Promise<import(".prisma/client").Category>;
}
