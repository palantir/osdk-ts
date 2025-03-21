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

export function serializeRequest(id, input, init) {
  if (typeof input !== "string") {
    throw new Error("Only string input URLs are supported");
  }
  const body = init?.body;
  if (body !== undefined && typeof body !== "string") {
    throw new Error("Only string request body values are supported");
  }
  return {
    id,
    url: input,
    method: init?.method ?? "GET",
    headers: [...new Headers(init?.headers ?? {}).entries()],
    body: body
  };
}
export function deserializeResponse(response) {
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: new Headers(response.headers)
  });
}
//# sourceMappingURL=request.js.map