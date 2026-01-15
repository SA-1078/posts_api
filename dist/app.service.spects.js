"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_service_1 = require("./app.service");
describe('AppService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [app_service_1.AppService],
        }).compile();
        service = module.get(app_service_1.AppService);
    });
    it('debería estar definido', () => {
        expect(service).toBeDefined();
    });
    it('getHealth() debería retornar el mensaje esperado', () => {
        expect(service.getHealth()).toEqual({
            service: 'posts-api service',
            message: 'Online',
        });
    });
    it('getHealth() debería retornar un objeto', () => {
        const result = service.getHealth();
        expect(typeof result).toEqual('object');
    });
});
//# sourceMappingURL=app.service.spects.js.map