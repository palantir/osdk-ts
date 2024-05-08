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

export async function fetchFormEncoded(
  fetchFn: typeof globalThis.fetch,
  url: string,
  formEncodedBody: URLSearchParams,
) {
  const response = await fetchFn(url, {
    body: formEncodedBody.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(
      `Response was not ok: ${response.status} ${response.statusText}`,
    );
  }

  return response;
}
