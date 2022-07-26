
type ContentType = 'application/json' | 'application/x-www-form-urlencoded'| 'multipart/form-data'

export interface RestFetchRequestOptions {
  url: string;
  baseURL?: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  data?: Record<string, any>; 
  params?: Record<string, any>;
  contentType?: ContentType;
  cache?: {
    id: string,
    forceUpdate?: boolean,
  }
}

export interface RestFetchRequest {
  (options: RestFetchRequestOptions, requestInit?: RequestInit): Promise<any>
}

