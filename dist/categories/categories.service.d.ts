import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryDto } from 'src/common/dto/query.dto';
export declare class CategoriesService {
    private readonly categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(dto: CreateCategoryDto): Promise<Category | null>;
    findAll(queryDto: QueryDto): Promise<Pagination<Category> | null>;
    findOne(id: string): Promise<Category | null>;
    update(id: string, dto: UpdateCategoryDto): Promise<Category | null>;
    remove(id: string): Promise<Category | null>;
}
