import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { QueryDto } from 'src/common/dto/query.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import("./post.entity").Post | null>;
    findAll(query: QueryDto): Promise<import("nestjs-typeorm-paginate").Pagination<import("./post.entity").Post, import("nestjs-typeorm-paginate").IPaginationMeta> | null>;
    findOne(id: string): Promise<import("./post.entity").Post | null>;
    update(id: string, updatePostDto: CreatePostDto): Promise<import("./post.entity").Post | null>;
    remove(id: string): Promise<boolean>;
}
