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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const category_entity_1 = require("./category.entity");
let CategoriesService = class CategoriesService {
    categoryRepo;
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    async create(dto) {
        try {
            const category = this.categoryRepo.create(dto);
            return await this.categoryRepo.save(category);
        }
        catch (err) {
            console.error('Error creating category:', err);
            return null;
        }
    }
    async findAll(queryDto) {
        try {
            const { page, limit, search, searchField, sort, order } = queryDto;
            const query = this.categoryRepo.createQueryBuilder('category');
            if (search) {
                if (searchField) {
                    switch (searchField) {
                        case 'name':
                            query.where('category.name ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        case 'description':
                            query.where('category.description ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        default:
                            query.where('(category.name ILIKE :search OR category.description ILIKE :search)', { search: `%${search}%` });
                    }
                }
                else {
                    query.where('(category.name ILIKE :search OR category.description ILIKE :search)', { search: `%${search}%` });
                }
            }
            if (sort) {
                query.orderBy(`category.${sort}`, (order ?? 'ASC'));
            }
            return await (0, nestjs_typeorm_paginate_1.paginate)(query, { page, limit });
        }
        catch (err) {
            console.error('Error retrieving categories:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.categoryRepo.findOne({ where: { id } });
        }
        catch (err) {
            console.error('Error finding category:', err);
            return null;
        }
    }
    async update(id, dto) {
        try {
            const category = await this.findOne(id);
            if (!category)
                return null;
            Object.assign(category, dto);
            return await this.categoryRepo.save(category);
        }
        catch (err) {
            console.error('Error updating category:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const category = await this.findOne(id);
            if (!category)
                return null;
            return await this.categoryRepo.remove(category);
        }
        catch (err) {
            console.error('Error deleting category:', err);
            return null;
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map