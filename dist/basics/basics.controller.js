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
exports.BasicsController = void 0;
const common_1 = require("@nestjs/common");
const basics_service_1 = require("./basics.service");
let BasicsController = class BasicsController {
    basicsService;
    constructor(basicsService) {
        this.basicsService = basicsService;
    }
    getMyFirstGet() {
        return this.basicsService.getMyFirstGet();
    }
    getConParametros(parametro) {
        return this.basicsService.getConParametros(parametro);
    }
    create(bodyPost) {
        return this.basicsService.postFunction(bodyPost);
    }
    update(bodyPost, id) {
        return this.basicsService.putFunction(bodyPost, id);
    }
    delete(id) {
        return this.basicsService.deleteFunction(id);
    }
    calcularAreaTriangulo(bodyPost) {
        return this.basicsService.calcularTriangulo(bodyPost);
    }
    areaRectangulo(ancho, alto) {
        return this.basicsService.areaRectangulo(ancho, alto);
    }
};
exports.BasicsController = BasicsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BasicsController.prototype, "getMyFirstGet", null);
__decorate([
    (0, common_1.Get)(':parametro'),
    __param(0, (0, common_1.Param)('parametro')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "getConParametros", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('calculo-area-triangulo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "calcularAreaTriangulo", null);
__decorate([
    (0, common_1.Get)('calculo-area-rectangulo/:ancho/:alto'),
    __param(0, (0, common_1.Param)('ancho')),
    __param(1, (0, common_1.Param)('alto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "areaRectangulo", null);
exports.BasicsController = BasicsController = __decorate([
    (0, common_1.Controller)('basics'),
    __metadata("design:paramtypes", [basics_service_1.BasicsService])
], BasicsController);
//# sourceMappingURL=basics.controller.js.map