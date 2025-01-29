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

import type { ClientContext } from "./ClientContext.js";
import { PalantirApiError } from "./PalantirApiError.js";
import { UnknownError } from "./UnknownError.js";

export type OmniMethod<F extends (...args: any[]) => any> = [
  method: number,
  path: string,
  flags?: number,
  contentType?: string,
  responseContentType?: string,
] & {
  __funcBrand?: F;
};

export async function omniFetch<X extends OmniMethod<any>>(
  clientCtx: ClientContext<any>,
  [
    httpMethodNum,
    origPath,
    flags,
    contentType,
    responseContentType,
  ]: X,
  ...args: Parameters<NonNullable<X["__funcBrand"]>>
): Promise<Awaited<ReturnType<NonNullable<X["__funcBrand"]>>>> {
  const path = origPath.replace(
    /\{([^}]+)\}/g,
    () => (args as any[]).shift(),
  );

  const body = (flags! & 1) ? args.shift() : undefined;
  const queryArgs = (flags! & 2)
    ? args.shift() as Record<string, string | string[]>
    : undefined;
  const headerArgs = (flags! & 4)
    ? args.shift() as Record<
      string,
      string | number | boolean | undefined | null
    >
    : undefined;

  const method = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
  ][httpMethodNum];

  return await apiFetch(
    clientCtx,
    method,
    path,
    body,
    queryArgs,
    headerArgs,
    contentType,
    responseContentType,
  );
}

export async function apiFetch(
  clientCtx: Pick<ClientContext<any>, "stack" | "fetch">,
  method: string,
  endpointPath: string,
  data?: any,
  queryArguments?: Record<string, string | string[]>,
  headers?: Record<string, string | number | boolean | undefined | null>,
  requestMediaType?: string,
  responseMediaType?: string,
) {
  const url = parseUrl(clientCtx.stack, endpointPath);
  for (const [key, value] of Object.entries(queryArguments || {})) {
    if (value == null) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        url.searchParams.append(key, item);
      }
    } else {
      url.searchParams.append(key, value);
    }
  }

  const headersInit: HeadersInit = new Headers();
  headersInit.set("Content-Type", requestMediaType ?? "application/json");
  headersInit.set("Accept", responseMediaType ?? "application/json");

  Object.entries(headers || {}).forEach(([key, value]) => {
    if (value != null) {
      headersInit.append(key, value.toString());
    }
  });

  const body = data == null || (data instanceof globalThis.Blob)
    ? data
    : JSON.stringify(data);

  const response = await clientCtx.fetch(url.toString(), {
    body,
    method: method,
    headers: headersInit,
  });

  // error status codes are not thrown by fetch automatically,
  // we have to look at the ok property and behave accordingly
  if (!response.ok) {
    try {
      const convertedError = await response.json();
      return new PalantirApiError(
        convertedError.message,
        convertedError.errorName,
        convertedError.errorCode,
        response.status,
        convertedError.errorInstanceId,
        convertedError.parameters,
      );
    } catch (e) {
      if (e instanceof Error) {
        return new UnknownError(e.message, "UNKNOWN");
      }
      return new UnknownError(
        "Unable to parse error response",
        "UNKNOWN",
      );
    }
  }

  if (responseMediaType == null || responseMediaType === "application/json") {
    return await response.json();
  }

  return response.blob();
}

export function parseUrl(baseUrl: string, endpointPath: string): URL {
  baseUrl += baseUrl.endsWith("/") ? "" : "/";
  return new URL(`api${endpointPath}`, baseUrl);
}
