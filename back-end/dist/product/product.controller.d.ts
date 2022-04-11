import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(productDto: ProductDto): Promise<import(".prisma/client").Product>;
    findAll(): Promise<import(".prisma/client").Product[]>;
    findOne(id: string): Promise<import(".prisma/client").Product>;
    update(id: string, productDto: ProductDto): Promise<import(".prisma/client").Product>;
    remove(id: string): Promise<import(".prisma/client").Product>;
}
