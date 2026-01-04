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
exports.CursosController = void 0;
const common_1 = require("@nestjs/common");
const cursos_service_1 = require("./cursos.service");
const create_curso_dto_1 = require("./dto/create-curso.dto");
const response_dto_1 = require("../common/dto/response.dto");
let CursosController = class CursosController {
    cursosService;
    constructor(cursosService) {
        this.cursosService = cursosService;
    }
    async create(dto) {
        const curso = await this.cursosService.create(dto);
        if (!curso)
            throw new common_1.InternalServerErrorException('Failed to create course');
        return new response_dto_1.SuccessResponseDto('Course created successfully', curso);
    }
    async findAll(page = 1, limit = 10) {
        const result = await this.cursosService.findAll({ page, limit });
        if (!result)
            throw new common_1.InternalServerErrorException('Could not retrieve courses');
        return new response_dto_1.SuccessResponseDto('Courses retrieved successfully', result);
    }
    async findOne(id) {
        const curso = await this.cursosService.findOne(id);
        if (!curso)
            throw new common_1.NotFoundException('Course not found');
        return new response_dto_1.SuccessResponseDto('Course retrieved successfully', curso);
    }
    async update(id, dto) {
        const curso = await this.cursosService.update(id, dto);
        if (!curso)
            throw new common_1.NotFoundException('Course not found');
        return new response_dto_1.SuccessResponseDto('Course updated successfully', curso);
    }
    async remove(id) {
        const curso = await this.cursosService.remove(id);
        if (!curso)
            throw new common_1.NotFoundException('Course not found');
        return new response_dto_1.SuccessResponseDto('Course deleted successfully', curso);
    }
};
exports.CursosController = CursosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curso_dto_1.CreateCursoDto]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_curso_dto_1.CreateCursoDto]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "remove", null);
exports.CursosController = CursosController = __decorate([
    (0, common_1.Controller)('cursos'),
    __metadata("design:paramtypes", [cursos_service_1.CursosService])
], CursosController);
//# sourceMappingURL=cursos.controller.js.map