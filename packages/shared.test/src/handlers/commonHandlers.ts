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

import {
  type DefaultBodyType,
  HttpResponse,
  type HttpResponseResolver,
  type PathParams,
} from "msw";
import { OpenApiCallError } from "./util/handleOpenApiCall.js";

export function authHandlerMiddleware<
  TReqBody extends DefaultBodyType = DefaultBodyType,
  TPathParams extends PathParams<string> = PathParams<string>,
>(
  handler: HttpResponseResolver<TPathParams, TReqBody>,
): HttpResponseResolver<TPathParams, TReqBody> {
  return async (info) => {
    const authHeader = info.request.headers.get("authorization");

    if (!authHeader || authHeader !== `Bearer myAccessToken`) {
      return HttpResponse.json({ message: "Missing Authorization header" }, {
        status: 401,
      });
    }

    try {
      return await handler(info);
    } catch (e) {
      if (e instanceof OpenApiCallError) {
        return HttpResponse.json(e.json, { status: e.status });
      }
      throw e;
    }
  };
}
