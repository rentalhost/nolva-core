import { parseAs } from "#/services/JsonService";

export type FetchUrl = Exclude<Parameters<typeof fetch>[0], Request>;

// eslint-disable-next-line unicorn/name-replacements
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

async function requestRaw<T>(options: RequestOptions<T>): Promise<RequestResponse<T>> {
  const url = new URL(options.url).href;
  const urlQuery =
    options.query === undefined ? "" : `?${new URLSearchParams(options.query).toString()}`;

  const result = await fetch(url + urlQuery, {
    method: options.method ?? "GET",
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    headers: options.headers,
  });

  return {
    success: result.ok,
    status: result.status,
    data: await options.processor(result),
  };
}

async function processorJSON<T>(response: Response) {
  return parseAs<T | undefined>(await response.text());
}

export async function request<T>(options: RequestOptions<T>) {
  return requestRaw<T>({ ...options, processor: processorJSON });
}

async function processorText(response: Response) {
  return response.text();
}

export async function requestText(options: RequestOptions<string>) {
  return requestRaw<string>({ ...options, processor: processorText });
}
