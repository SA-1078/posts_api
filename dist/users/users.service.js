"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            const user = this.userRepository.create({
                ...createUserDto,
                password: hashedPassword,
            });
            return await this.userRepository.save(user);
        }
        catch (err) {
            console.error('Error creating user:', err);
            return null;
        }
    }
    async findAll(queryDto, isActive) {
        try {
            const { page, limit, search, searchField, sort, order } = queryDto;
            const query = this.userRepository.createQueryBuilder('user');
            if (search) {
                if (searchField) {
                    switch (searchField) {
                        case 'username':
                            query.andWhere('user.username ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        case 'email':
                            query.andWhere('user.email ILIKE :search', {
                                search: `%${search}%`,
                            });
                            break;
                        default:
                            query.andWhere('(user.username ILIKE :search OR user.email ILIKE :search)', { search: `%${search}%` });
                    }
                }
                else {
                    query.andWhere('(user.username ILIKE :search OR user.email ILIKE :search)', { search: `%${search}%` });
                }
            }
            if (sort) {
                query.orderBy(`user.${sort}`, (order ?? 'ASC'));
            }
            return await (0, nestjs_typeorm_paginate_1.paginate)(query, { page, limit });
        }
        catch (err) {
            console.error('Error retrieving users:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.userRepository.findOne({ where: { id } });
        }
        catch (err) {
            console.error('Error finding user:', err);
            return null;
        }
    }
    async findByUsername(username) {
        try {
            return await this.userRepository.findOne({ where: { username } });
        }
        catch (err) {
            console.error('Error finding user by username:', err);
            return null;
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user)
                return null;
            if (updateUserDto.password) {
                updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
            }
            Object.assign(user, updateUserDto);
            return await this.userRepository.save(user);
        }
        catch (err) {
            console.error('Error updating user:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const user = await this.findOne(id);
            if (!user)
                return null;
            return await this.userRepository.remove(user);
        }
        catch (err) {
            console.error('Error deleting user:', err);
            return null;
        }
    }
    async updateProfile(id, filename) {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user)
                return null;
            user.profile = filename;
            return await this.userRepository.save(user);
        }
        catch (err) {
            console.error('Error updating user profile image:', err);
            return null;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map