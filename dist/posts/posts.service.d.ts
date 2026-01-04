import { Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Category } from '../categories/category.entity';
import { QueryDto } from 'src/common/dto/query.dto';
export declare class PostsService {
    private postsRepository;
    private categoriesRepository;
    constructor(postsRepository: Repository<Post>, categoriesRepository: Repository<Category>);
    create(createPostDto: CreatePostDto): Promise<Post | null>;
    findAll(queryDto: QueryDto): Promise<Pagination<Post> | null>;
    findOne(id: string): Promise<Post | null>;
    update(id: string, dto: CreatePostDto): Promise<Post | null>;
    remove(id: string): Promise<boolean>;
}
