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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoSchema = exports.Curso = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Curso = class Curso extends mongoose_2.Document {
    nombre;
    descripcion;
    categoria;
    fecha_inicio;
    fecha_fin;
    nivel;
    requisitos;
    precio;
    instructor;
    calificacion_promedio;
    estado;
    contenidos;
};
exports.Curso = Curso;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curso.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curso.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curso.prototype, "categoria", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Curso.prototype, "fecha_inicio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Curso.prototype, "fecha_fin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curso.prototype, "nivel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: [] }),
    __metadata("design:type", Array)
], Curso.prototype, "requisitos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Curso.prototype, "precio", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            nombre: { type: String, required: true },
            email: { type: String, required: true }
        },
        required: true
    }),
    __metadata("design:type", Object)
], Curso.prototype, "instructor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Curso.prototype, "calificacion_promedio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'activo' }),
    __metadata("design:type", String)
], Curso.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: 'Contenido', default: [] }),
    __metadata("design:type", Array)
], Curso.prototype, "contenidos", void 0);
exports.Curso = Curso = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Curso);
exports.CursoSchema = mongoose_1.SchemaFactory.createForClass(Curso);
//# sourceMappingURL=curso.schema.js.map