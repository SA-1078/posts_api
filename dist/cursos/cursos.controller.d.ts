import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
    create(dto: CreateCursoDto): Promise<SuccessResponseDto<import("./schemas/curso.schema").Curso>>;
    findAll(page?: number, limit?: number): Promise<SuccessResponseDto<any>>;
    findOne(id: string): Promise<SuccessResponseDto<import("./schemas/curso.schema").Curso>>;
    update(id: string, dto: CreateCursoDto): Promise<SuccessResponseDto<import("./schemas/curso.schema").Curso>>;
    remove(id: string): Promise<SuccessResponseDto<import("./schemas/curso.schema").Curso>>;
}
