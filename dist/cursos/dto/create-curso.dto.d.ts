import { CreateContenidoDto } from './create-contenido.dto';
declare class InstructorDto {
    nombre: string;
    email: string;
}
export declare class CreateCursoDto {
    nombre: string;
    descripcion: string;
    categoria: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    nivel: string;
    requisitos: string[];
    precio: number;
    instructor: InstructorDto;
    calificacion_promedio?: number;
    estado?: string;
    contenidos: CreateContenidoDto[];
}
export {};
