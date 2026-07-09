export type FetchUrl = Exclude<Parameters<typeof fetch>[0], Request>;
export type URLSearchParamsQuery = ConstructorParameters<typeof URLSearchParams>[0];
interface RequestOptions<T> {
    method?: "GET" | "POST";
    url: FetchUrl;
    query?: URLSearchParamsQuery;
    body?: object;
    headers?: HeadersInit;
    processor(response: Response): Promise<T | undefined>;
}
interface RequestResponse<T> {
    success: boolean;
    status: number;
    data?: T;
}
export declare function request<T>(options: RequestOptions<T>): Promise<RequestResponse<T>>;
export declare function requestText(options: RequestOptions<string>): Promise<RequestResponse<string>>;
export {};
