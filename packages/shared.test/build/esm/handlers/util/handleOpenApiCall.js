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

import { http, HttpResponse } from "msw";
import { authHandlerMiddleware } from "../authHandlerMiddleware.js";
export class OpenApiCallError extends Error {
  constructor(status, json) {
    super(`${json.errorCode} ${json.errorName ?? "Unknown error"} ${JSON.stringify(json.parameters)}`);
    this.status = status;
    this.json = json;
  }
}

/**
 * This relies on a trick that generally our query params and header params are optional therefore
 * the body can generally be assumed to be the first payload following the strings which are path
 * params.
 *
 * This will also fail if your body is defined as a string as that will get interpreted as a path param.
 * If this happens, you cannot use the helper. Sorry
 */

export function handleOpenApiCall(openApiCall, names) {
  return (baseUrl, restImpl, options) => {
    let captured = {};
    // we don't care about the promise here, we are just building the url
    void openApiCall({
      fetch: (url, req) => {
        const u = new URL(url);
        u.search = ""; // msw doesn't want the search string
        captured = {
          method: req.method,
          endPoint: u.toString().replace(/%3A/g, ":")
        };

        // fake a response object so the call doesn't fail
        return {
          ok: true,
          json: () => Promise.resolve({}),
          blob: () => new Blob()
        };
      },
      baseUrl
    }, ...names.map(n => `:${n}`),
    // add a simulated blob in here in case of an upload
    {
      type: "",
      size: 5
    });
    return http[captured.method.toLowerCase()](captured.endPoint, authHandlerMiddleware(async info => {
      try {
        const result = await restImpl(info);
        if (result instanceof Response) {
          return new HttpResponse(result.body);
        }
        return HttpResponse.json(result);
      } catch (e) {
        if (e instanceof OpenApiCallError) {
          return HttpResponse.json({
            ...e.json,
            stack: e.stack
          }, {
            status: e.status,
            statusText: e.message
          });
        }
        throw e;
      }
    }), options);
  };
}
//# sourceMappingURL=handleOpenApiCall.js.map