export declare class QueryDto {
    page: number;
    limit: number;
    search?: string;
    searchField?: string;
    sort?: string;
    order?: 'ASC' | 'DESC';
}
