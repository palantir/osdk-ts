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

import type { OpenApiRequest } from "@osdk/gateway/types";
import type {
  MockedRequest,
  ResponseComposition,
  RestContext,
  RestHandler,
  RestRequest,
} from "msw";
import { rest } from "msw";
import type { BaseAPIError } from "../../BaseError";
import { authHandlerMiddleware } from "../commonHandlers";

export class OpenApiCallError extends Error {
  constructor(
    public status: number,
    public json: {
      errorCode: string;
      errorName: string;
    },
  ) {
    super(json.errorName ?? "Unknown error");
  }
}

type ExtractStringParams<T extends any[]> = T extends [infer A, ...infer B]
  ? A extends string ? [A, ...ExtractStringParams<B>] : []
  : [];

type SkipStringParams<T extends any[]> = T extends [infer A, ...infer B]
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
type ExtractBody<
  X extends ((reqCall: any, ...args: any[]) => Promise<any>),
> = SkipStringParams<ParamsAfterReqCall<X>>[0] extends undefined ? never
  : SkipStringParams<ParamsAfterReqCall<X>>[0];

type ParamsAfterReqCall<
  T extends (reqCall: any, ...args: any[]) => Promise<any>,
> = T extends (reqCall: any, ...args: infer Z) => Promise<any> ? Z : never;

export function handleOpenApiCall<
  const N extends ExtractStringParams<ParamsAfterReqCall<X>>,
  const X extends ((...args: any[]) => Promise<any>),
>(
  openApiCall: X,
  names: N,
  restImpl: (
    req: RestRequest<ExtractBody<X>, Record<N[number], string>>,
    res: ResponseComposition<
      | (
        & (Parameters<X>[0] extends OpenApiRequest<infer R, any> ? R : never)
        & {}
      )
      | BaseAPIError
    >,
    ctx: RestContext,
  ) => any,
): RestHandler<MockedRequest<ExtractBody<X>>> {
  let captured: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    endPoint: string;
    data?: any;
    queryArguments?: Record<string, any>;
    headers?: Record<string, any>;
    requestMediaType?: string;
    responseMediaType?: string;
  } = {} as any;

  const capture: OpenApiRequest<any> = (
    method,
    endPoint,
  ): Promise<any> => {
    captured = {
      method: method as any,
      endPoint,
    };

    return Promise.resolve();
  };

  // we dont care about the promise here, we are just building the url
  openApiCall(
    capture as any,
    ...(names.map(n => `:${n}`) as any),
  );

  return rest
    [captured.method.toLowerCase() as Lowercase<typeof captured.method>](
      `https://stack.palantir.com/api${captured.endPoint}`,
      authHandlerMiddleware((req, res, ctx) => {
        try {
          return restImpl(req as any, res, ctx);
        } catch (e) {
          if (e instanceof OpenApiCallError) {
            return res(ctx.status(e.status), ctx.json(e.json));
          }
          throw e;
        }
      }),
    );
}
