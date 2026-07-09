export type FetchUrl = Exclude<Parameters<typeof fetch>[0], Request>;
export type URLSearchParamsQuery = ConstructorParameters<typeof URLSearchParams>[0];
interface RequestOptions {
    method?: "GET" | "POST";
    url: FetchUrl;
    query?: URLSearchParamsQuery;
    body?: object;
    headers?: HeadersInit;
}
interface RequestResponse<T> {
    success: boolean;
    status: number;
    data?: T;
}
export declare function request<T>(options: RequestOptions): Promise<RequestResponse<T>>;
export declare function requestText(options: RequestOptions): Promise<RequestResponse<string>>;
export {};
