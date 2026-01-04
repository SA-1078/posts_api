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
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const curso_schema_1 = require("./schemas/curso.schema");
const contenido_schema_1 = require("./schemas/contenido.schema");
let CursosService = class CursosService {
    cursoModel;
    contenidoModel;
    constructor(cursoModel, contenidoModel) {
        this.cursoModel = cursoModel;
        this.contenidoModel = contenidoModel;
    }
    async create(dto) {
        try {
            const { contenidos, ...cursoData } = dto;
            const curso = new this.cursoModel(cursoData);
            if (contenidos && contenidos.length > 0) {
                const contenidosIds = [];
                for (const contenido of contenidos) {
                    const contenidoData = {
                        titulo: contenido.titulo,
                        duracion: contenido.duracion,
                        descripcion: contenido.descripcion,
                        tipo: contenido.tipo,
                        enlace: contenido.enlace,
                        dificultad: contenido.dificultad,
                        fecha_publicacion: contenido.fecha_publicacion,
                        completado: contenido.completado,
                        tiempo_estimado: contenido.tiempo_estimado,
                        video_id: contenido.video_id,
                    };
                    let contenidoEntity;
                    try {
                        contenidoEntity = new this.contenidoModel(contenidoData);
                        contenidoEntity.save();
                        contenidosIds.push(contenidoEntity._id);
                    }
                    catch (error) {
                        console.error('Error al crear contenido:', error);
                    }
                }
                curso.contenidos = contenidosIds;
            }
            const savedCurso = await curso.save();
            return savedCurso;
        }
        catch (err) {
            console.error('Error creando curso:', err);
            return null;
        }
    }
    async findAll(options) {
        try {
            const { page, limit } = options;
            const cursos = await this.cursoModel.find()
                .skip((page - 1) * limit)
                .limit(limit)
                .populate('contenidos');
            return { items: cursos, page, limit };
        }
        catch (err) {
            console.error('Error retrieving courses:', err);
            return null;
        }
    }
    async findOne(id) {
        try {
            return await this.cursoModel.findById(id).populate('contenidos');
        }
        catch (err) {
            console.error('Error finding course:', err);
            return null;
        }
    }
    async update(id, dto) {
        try {
            const curso = await this.findOne(id);
            if (!curso)
                return null;
            Object.assign(curso, dto);
            if (dto.contenidos) {
                const contenidosIds = [];
                for (const contenido of dto.contenidos) {
                    const contenidoData = {
                        titulo: contenido.titulo,
                        duracion: contenido.duracion,
                        descripcion: contenido.descripcion,
                        tipo: contenido.tipo,
                        enlace: contenido.enlace,
                        dificultad: contenido.dificultad,
                        fecha_publicacion: contenido.fecha_publicacion,
                        completado: contenido.completado,
                        tiempo_estimado: contenido.tiempo_estimado,
                        video_id: contenido.video_id,
                    };
                    const contenidoEntity = await this.contenidoModel.create(contenidoData);
                    contenidosIds.push(contenidoEntity._id);
                }
                curso.contenidos = contenidosIds;
            }
            return await curso.save();
        }
        catch (err) {
            console.error('Error updating course:', err);
            return null;
        }
    }
    async remove(id) {
        try {
            const curso = await this.findOne(id);
            if (!curso)
                return null;
            return await curso.deleteOne();
        }
        catch (err) {
            console.error('Error deleting course:', err);
            return null;
        }
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(curso_schema_1.Curso.name)),
    __param(1, (0, mongoose_1.InjectModel)(contenido_schema_1.Contenido.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CursosService);
//# sourceMappingURL=cursos.service.js.map