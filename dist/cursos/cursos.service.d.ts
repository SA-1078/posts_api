import { Model } from 'mongoose';
import { Curso } from './schemas/curso.schema';
import { Contenido } from './schemas/contenido.schema';
import { CreateCursoDto } from './dto/create-curso.dto';
export declare class CursosService {
    private readonly cursoModel;
    private readonly contenidoModel;
    constructor(cursoModel: Model<Curso>, contenidoModel: Model<Contenido>);
    create(dto: CreateCursoDto): Promise<Curso | null>;
    findAll(options: {
        page: number;
        limit: number;
    }): Promise<any | null>;
    findOne(id: string): Promise<Curso | null>;
    update(id: string, dto: CreateCursoDto): Promise<Curso | null>;
    remove(id: string): Promise<Curso | null>;
}
