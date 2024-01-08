/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { OpenApiRequest } from "@osdk/gateway/types";
import type { Auth } from "@osdk/legacy-client";
import { API_BASE_URL } from "./Constants";
import { FetchFactory } from "./fetch";
import { MediaType } from "./MediaType";
import { ResponseType } from "./ResponseType";

export function getApiRequestFunction<TResponse>(
  auth: Auth,
  url: string,
  userAgent: string,
  contextPath: string = "/api",
  fetchFunction?: typeof globalThis.fetch,
): OpenApiRequest<TResponse> {
  const fetchClient = new FetchClient(
    auth,
    url,
    userAgent,
    contextPath,
    fetchFunction,
  );

  return (
    method,
    endpointPath,
    data,
    queryArguments,
    headers,
    requestMediaType,
    responseMediaType,
  ) =>
    fetchClient.request<TResponse>(
      method,
      endpointPath,
      data,
      queryArguments,
      headers,
      requestMediaType,
      responseMediaType,
    );
}

export function getApiRequestFunctionAsStream<TResponse>(
  auth: Auth,
  url: string,
  userAgent: string,
  contextPath: string = "/api",
  fetchFunction?: typeof globalThis.fetch,
): OpenApiRequest<TResponse, ReadableStream<Uint8Array>> {
  const fetchClient = new FetchClient(
    auth,
    url,
    userAgent,
    contextPath,
    fetchFunction,
  );

  return (
    method,
    endpointPath,
    data,
    queryParameters,
    headers,
    requestMediaType,
    responseMediaType,
  ) =>
    fetchClient.request(
      method,
      endpointPath,
      data,
      queryParameters,
      headers,
      requestMediaType,
      responseMediaType,
      true,
    );
}

export class FetchClient {
  constructor(
    auth: Auth,
    url: string,
    private userAgent: string,
    private contextPath: string = "/api",
    fetchFunction?: typeof globalThis.fetch,
  ) {
    const fetchFactory = new FetchFactory(fetchFunction);
    this.fetchFunction = fetchFactory.getDefaultFetch(auth);
    this.url = API_BASE_URL(url);
  }

  private fetchFunction: typeof globalThis.fetch;
  private url: string;

  public async request<T>(
    method: string,
    endpointPath: string,
    data?: any,
    queryArguments?: { [paramName: string]: any },
    headers?: {
      [header: string]: string | number | boolean | null | undefined;
    },
    _requestMediaType: string = "application/json",
    responseMediaType: string = "application/json",
    responseAsStream?: boolean,
  ): Promise<T> {
    const url = new URL(`${this.contextPath}${endpointPath}`, `${this.url}`);
    for (
      const [queryArgumentName, queryArgumentValue] of Object.entries(
        queryArguments || {},
      )
    ) {
      if (queryArgumentValue) {
        if (queryArgumentValue.constructor === Array) {
          for (const value of queryArgumentValue) {
            url.searchParams.append(queryArgumentName, value);
          }
          continue;
        } else {
          url.searchParams.append(queryArgumentName, queryArgumentValue);
        }
      }
    }

    const headersInit: HeadersInit = {};
    Object.entries(headers || {}).forEach(([key, value]) => {
      if (value != null) {
        headersInit[key] = value.toString();
      }
    });

    const response = await this.fetchWithContentType(url, {
      method,
      body: data,
      headers: headersInit,
    });

    if (responseAsStream && response.body) {
      return response.body as T;
    }

    if (responseMediaType === MediaType.APPLICATION_JSON) {
      return response.json();
    } else if (responseMediaType === "*/*") {
      return response.blob() as T;
    }

    return response.json();
  }

  public async callAPI<T>(
    url: URL,
    method: string = "GET",
    body?: any,
    responseType: ResponseType = ResponseType.JSON,
  ): Promise<T> {
    const response: Response = await this.fetchWithContentType(url, {
      method,
      body,
    });

    const contentType = response.headers.get("Content-Type") != null
      ? (response.headers.get("Content-Type") as string)
      : "";

    let bodyPromise;
    if (responseType === ResponseType.BLOB) {
      bodyPromise = response.blob();
    } else if (contentType.includes(MediaType.APPLICATION_JSON)) {
      bodyPromise = response.json();
    } else if (contentType.includes(MediaType.APPLICATION_OCTET_STREAM)) {
      bodyPromise = response.blob();
    } else {
      bodyPromise = response.text();
    }

    const responseBody = await bodyPromise;
    return responseBody as T;
  }

  private async fetchWithContentType(
    url: URL | RequestInfo,
    init?: RequestInit,
  ): Promise<Response> {
    if (!init?.body) {
      return this.fetchFunction(url.toString(), {
        ...init,
        headers: this.getHeaders(init?.headers),
      });
    }

    const contentType = this.getContentTypeForBody(init.body);
    return this.fetchFunction(url.toString(), {
      ...init,
      headers: this.getHeaders(init?.headers, contentType),
      body: this.getBodyForContentType(init.body),
    });
  }

  private getContentTypeForBody(body: any) {
    if (globalThis.Blob && body instanceof globalThis.Blob) {
      return body.type;
    }

    if (typeof body === "string") {
      return MediaType.TEXT_PLAIN;
    }

    if (
      globalThis.ArrayBuffer
      && (globalThis.ArrayBuffer.isView(body)
        || body instanceof globalThis.ArrayBuffer)
    ) {
      return MediaType.APPLICATION_OCTET_STREAM;
    }

    if (globalThis.Uint8Array && body instanceof globalThis.Uint8Array) {
      return MediaType.APPLICATION_OCTET_STREAM;
    }

    // Default to 'application/json' for objects and other data types
    return MediaType.APPLICATION_JSON;
  }

  private getBodyForContentType(body?: any) {
    if (!body) {
      return undefined;
    }

    if (globalThis.Blob && body instanceof globalThis.Blob) {
      return body;
    }

    return JSON.stringify(body);
  }

  private getHeaders(
    init?: HeadersInit,
    contentType: string = MediaType.APPLICATION_JSON,
  ): HeadersInit {
    return {
      "Content-Type": contentType,
      "Fetch-User-Agent": this.userAgent,
      ...init,
    };
  }
}
