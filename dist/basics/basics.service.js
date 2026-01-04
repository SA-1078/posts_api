"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicsService = void 0;
const common_1 = require("@nestjs/common");
let BasicsService = class BasicsService {
    getMyFirstGet() {
        return {
            service: 'Blog-Backend',
            controller: '/basics',
            function: 'Get Example'
        };
    }
    getConParametros(parametro) {
        return {
            service: 'Blog-Backend',
            controller: '/basics/:parametro',
            function: 'Get con Parametros',
            parametroRecibido: parametro
        };
    }
    postFunction(bodyPost) {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de petición Post',
            bodyRecibido: bodyPost
        };
    }
    putFunction(bodyPost, parametro) {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de petición Put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }
    deleteFunction(parametro) {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de petición Delete',
            parametro: parametro
        };
    }
    calcularTriangulo(body) {
        const result = (body.base * body.altura) / 2;
        return {
            service: 'Blog-Backend',
            controller: '/calculo-area-triangulo',
            function: 'Cálculo de área de un triángulo',
            base: body,
            resultado: result
        };
    }
    areaRectangulo(ancho, alto) {
        const result = ancho * alto;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'calculo-area-rectangulo/.ancho/.alto',
            ancho: ancho,
            alto: alto,
            area: result
        };
    }
};
exports.BasicsService = BasicsService;
exports.BasicsService = BasicsService = __decorate([
    (0, common_1.Injectable)()
], BasicsService);
//# sourceMappingURL=basics.service.js.map