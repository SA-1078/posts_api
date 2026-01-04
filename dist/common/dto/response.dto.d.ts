export declare class SuccessResponseDto<T = any> {
    success: true;
    message: string;
    data: T;
    constructor(message: string, data: T);
}
export declare class ErrorResponseDto {
    success: false;
    message: string;
    statusCode: number;
    error?: any;
    constructor(message: string, statusCode?: number, error?: any);
}
