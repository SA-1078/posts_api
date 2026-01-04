import { Document } from 'mongoose';
export declare class Contenido extends Document {
    titulo: string;
    duracion: number;
    descripcion: string;
    tipo: string;
    enlace: string;
    dificultad: string;
    fecha_publicacion: Date;
    completado: boolean;
    tiempo_estimado: string;
    video_id: string;
}
export declare const ContenidoSchema: import("mongoose").Schema<Contenido, import("mongoose").Model<Contenido, any, any, any, Document<unknown, any, Contenido, any, {}> & Contenido & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Contenido, Document<unknown, {}, import("mongoose").FlatRecord<Contenido>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Contenido> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
