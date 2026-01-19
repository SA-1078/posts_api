import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('debería estar definido', () => {
        expect(service).toBeDefined();
    });

    it('getHello() debería retornar el mensaje esperado', () => {
        expect(service.getHealth()).toEqual(
            {
                service: "posts-api service",
                message: "Online"
            },
        );
    });

    it('getHello() debería retornar un objeto', () => {
        const result = service.getHealth();
        expect(typeof result).toBe('object');
    });
});