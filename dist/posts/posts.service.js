"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./post.entity");
const category_entity_1 = require("../categories/category.entity");
let PostsService = class PostsService {
    postsRepository;
    categoriesRepository;
    constructor(postsRepository, categoriesRepository) {
        this.postsRepository = postsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async create(createPostDto) {
        try {
            const category = await this.categoriesRepository.findOne({ where: { id: createPostDto.categoryId } });
            if (!category)
                return null;
            const post = this.postsRepository.create({
                title: createPostDto.title,
                content: createPostDto.content,
                category: category,
            });
            return await this.postsRepository.save(post);
        }
        catch (err) {
            console.error('Error creating post:', err);
            return null;
        }
    }
    async findAll(queryDto) {
        try {
            const { page, limit, search, searchField, sort, order } = queryDto;
            const queryBuilder = this.postsRepository.createQueryBuilder('post')
                .leftJoinAndSelect('post.category', 'category');
            if (search) {
                if (searchField) {
                    switch (searchField) {
                        case 'title':
                            queryBuilder.where('post.title ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        case 'content':
                            queryBuilder.where('post.content ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        case 'category':
                            queryBuilder.where('category.name ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        default:
                            queryBuilder.where('(post.title ILIKE :search OR post.content ILIKE :search OR category.name ILIKE :search)', { search: `%${search}%` });
                    }
                }
                else {
                    queryBuilder.where('(post.title ILIKE :search OR post.content ILIKE :search OR category.name ILIKE :search)', { search: `%${search}%` });
                }
            }
            if (sort) {
                queryBuilder.orderBy(`post.${sort}`, (order ?? 'ASC'));
            }
            return await (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, { page, limit });
        }
        catch (err) {
            console.error('Error fetching posts:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.postsRepository.findOne({ where: { id }, relations: ['category'] });
        }
        catch (err) {
            console.error('Error fetching post:', err);
            return null;
        }
    }
    async update(id, dto) {
        try {
            const post = await this.findOne(id);
            if (!post)
                return null;
            if (dto.categoryId) {
                const category = await this.categoriesRepository.findOne({ where: { id: dto.categoryId } });
                if (!category)
                    return null;
                post.category = category;
            }
            post.title = dto.title ?? post.title;
            post.content = dto.content ?? post.content;
            return await this.postsRepository.save(post);
        }
        catch (err) {
            console.error('Error updating post:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const result = await this.postsRepository.delete(id);
            return result.affected !== 0;
        }
        catch (err) {
            console.error('Error deleting post:', err);
            return false;
        }
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map