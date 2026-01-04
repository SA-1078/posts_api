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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const response_dto_1 = require("../common/dto/response.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const query_dto_1 = require("../common/dto/query.dto");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(dto) {
        const user = await this.usersService.create(dto);
        return new response_dto_1.SuccessResponseDto('User created successfully', user);
    }
    async findAll(query, isActive) {
        if (query.limit && query.limit > 100) {
            query.limit = 100;
        }
        if (isActive !== undefined && isActive !== 'true' && isActive !== 'false') {
            throw new common_1.BadRequestException('Invalid value for "isActive". Use "true" or "false".');
        }
        const result = await this.usersService.findAll(query, isActive === 'true');
        if (!result)
            throw new common_1.InternalServerErrorException('Could not retrieve users');
        return new response_dto_1.SuccessResponseDto('Users retrieved successfully', result);
    }
    async findOne(id) {
        const user = await this.usersService.findOne(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return new response_dto_1.SuccessResponseDto('User retrieved successfully', user);
    }
    async update(id, dto) {
        const user = await this.usersService.update(id, dto);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return new response_dto_1.SuccessResponseDto('User updated successfully', user);
    }
    async remove(id) {
        const user = await this.usersService.remove(id);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return new response_dto_1.SuccessResponseDto('User deleted successfully', user);
    }
    async uploadProfile(id, file) {
        if (!file)
            throw new common_1.BadRequestException('Profile image is required');
        const user = await this.usersService.updateProfile(id, file.filename);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return new response_dto_1.SuccessResponseDto('Profile image updated', user);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDto, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)('profile/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/profile',
            filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
        }),
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
                return cb(new common_1.BadRequestException('Only JPG or PNG files are allowed'), false);
            }
            cb(null, true);
        }
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map