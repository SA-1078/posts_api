import { Document, Types } from 'mongoose';
export declare class Curso extends Document {
    nombre: string;
    descripcion: string;
    categoria: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    nivel: string;
    requisitos: string[];
    precio: number;
    instructor: {
        nombre: string;
        email: string;
    };
    calificacion_promedio: number;
    estado: string;
    contenidos: Types.ObjectId[];
}
export declare const CursoSchema: import("mongoose").Schema<Curso, import("mongoose").Model<Curso, any, any, any, Document<unknown, any, Curso, any, {}> & Curso & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Curso, Document<unknown, {}, import("mongoose").FlatRecord<Curso>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Curso> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
