/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type {
  DefaultBodyType,
  HttpHandler,
  HttpResponseResolver,
  RequestHandlerOptions,
  StrictResponse,
} from "msw";
import { http as http, HttpResponse } from "msw";
import type { BaseAPIError } from "../../BaseError.js";
import { authHandlerMiddleware } from "../authHandlerMiddleware.js";

export class OpenApiCallError extends Error {
  constructor(
    public status: number,
    public json: {
      errorCode: string;
      errorName: string;
      errorInstanceId: string;
      parameters: Record<string, unknown>;
    },
  ) {
    super(
      `${json.errorCode} ${json.errorName ?? "Unknown error"} ${
        JSON.stringify(json.parameters)
      }`,
    );
  }
}

type ExtractStringParams<T extends any[]> = T extends [infer A, ...infer B]
  ? A extends string ? [A, ...ExtractStringParams<B>] : []
  : [];

export type SkipStringParams<T extends any[]> = T extends [infer A, ...infer B]
  ? A extends string ? SkipStringParams<B> : T
  : T;

/**
 * This relies on a trick that generally our query params and header params are optional therefore
 * the body can generally be assumed to be the first payload following the strings which are path
 * params.
 *
 * This will also fail if your body is defined as a string as that will get interpreted as a path param.
 * If this happens, you cannot use the helper. Sorry
 */
export type ExtractBody<
  X extends ((reqCall: any, ...args: any[]) => Promise<any>),
> = undefined extends SkipStringParams<ParamsAfterReqCall<X>>[0] ? never
  : SkipStringParams<ParamsAfterReqCall<X>>[0];

export type ExtractResponse<
  X extends ((...args: any[]) => Promise<any>),
> = Awaited<ReturnType<X>>;

export type ParamsAfterReqCall<
  T extends (reqCall: any, ...args: any[]) => Promise<any>,
> = T extends (reqCall: any, ...args: infer Z) => Promise<any> ? Z : never;

export type RestImpl<
  URL_PARAMS extends string,
  REQ_BODY extends DefaultBodyType,
  RESP_BODY extends DefaultBodyType,
> = (
  info: Parameters<
    HttpResponseResolver<
      Record<URL_PARAMS, string>,
      REQ_BODY,
      RESP_BODY | BaseAPIError
    >
  >[0],
) => RESP_BODY | Promise<RESP_BODY>;

export type OpenApiCallFactory<
  URL_PARAMS extends string,
  REQ_BODY extends DefaultBodyType,
  RESP_BODY extends DefaultBodyType,
> = (
  baseUrl: string,
  restImpl: RestImpl<URL_PARAMS, REQ_BODY, RESP_BODY>,
  options?: RequestHandlerOptions,
) => HttpHandler;

export type CallFactory<
  URL_PARAMS extends string,
  X extends ((...args: any[]) => Promise<any>),
> = (
  baseUrl: string,
  restImpl: RestImpl<URL_PARAMS, ExtractBody<X>, ExtractResponse<X>>,
  options?: RequestHandlerOptions,
) => HttpHandler;

export function handleOpenApiCall<
  const N extends ExtractStringParams<ParamsAfterReqCall<X>>,
  const X extends ((...args: any[]) => Promise<any>),
>(
  openApiCall: X,
  names: N,
): CallFactory<N[number], X> {
  return (
    baseUrl: string,
    restImpl: RestImpl<N[number], ExtractBody<X>, ExtractResponse<X>>,
    options?: RequestHandlerOptions,
  ): HttpHandler => {
    let captured: {
      method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
      endPoint: string;
      data?: any;
      queryArguments?: Record<string, any>;
      headers?: Record<string, any>;
      requestMediaType?: string;
      responseMediaType?: string;
    } = {} as any;

    const capture = {
      fetch: (url: string, req: Request) => {
        const u = new URL(url);
        u.search = ""; // msw doesn't want the search string
        captured = {
          method: req.method as any,
          endPoint: u.toString().replace(/%3A/g, ":"),
        };

        // fake a response object so the call doesn't fail
        return {
          ok: true,
          json: () => Promise.resolve({}),
          blob: () => new Blob(),
        };
      },
      baseUrl,
    };

    // we don't care about the promise here, we are just building the url
    void openApiCall(
      capture as any,
      ...(names.map(n => `:${n}`) as any),
      // add a simulated blob in here in case of an upload
      { type: "", size: 5 },
    );

    return http
      [captured.method.toLowerCase() as Lowercase<typeof captured.method>](
        captured.endPoint,
        authHandlerMiddleware(async (info) => {
          try {
            const result: any = await restImpl(
              info as any,
            );

            if (result instanceof Response) {
              return new HttpResponse(result.body) as StrictResponse<
                DefaultBodyType
              >;
            }
            return HttpResponse.json(
              result,
            );
          } catch (e) {
            if (e instanceof OpenApiCallError) {
              return HttpResponse.json({ ...e.json, stack: e.stack }, {
                status: e.status,
                statusText: e.message,
              });
            }
            throw e;
          }
        }),
        options,
      );
  };
}
