import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(productDto: ProductDto): Promise<import(".prisma/client").Product>;
    findAll(): Promise<import(".prisma/client").Product[]>;
    findOne(id: number): Promise<import(".prisma/client").Product>;
    update(id: number, productDto: ProductDto): Promise<import(".prisma/client").Product>;
    remove(id: number): Promise<import(".prisma/client").Product>;
}
