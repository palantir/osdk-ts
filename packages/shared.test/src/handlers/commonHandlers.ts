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

import type {
  DefaultBodyType,
  MockedResponse,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";
import { OpenApiCallError } from "./util/handleOpenApiCall";

export type MiddlewareHandler<
  TReqBody extends DefaultBodyType = DefaultBodyType,
  TPathParams extends PathParams<string> = PathParams<string>,
> = (
  req: RestRequest<TReqBody, TPathParams>,
  res: ResponseComposition,
  ctx: RestContext,
) => Promise<MockedResponse<any>>;

export function authHandlerMiddleware<
  TReqBody extends DefaultBodyType = DefaultBodyType,
  TPathParams extends PathParams<string> = PathParams<string>,
>(
  handler: MiddlewareHandler<TReqBody, TPathParams>,
): MiddlewareHandler<TReqBody, TPathParams> {
  return async (req, res, ctx) => {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || authHeader !== `Bearer myAccessToken`) {
      return res(
        ctx.status(401),
        ctx.json({ message: "Missing Authorization header" }),
      );
    }

    try {
      return handler(req as any, res, ctx);
    } catch (e) {
      if (e instanceof OpenApiCallError) {
        return res(ctx.status(e.status), ctx.json(e.json));
      }
      throw e;
    }
  };
}
