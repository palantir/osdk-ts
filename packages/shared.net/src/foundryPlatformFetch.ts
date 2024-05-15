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

import type { SharedClient, SharedClientContext } from "./ClientContext.js";
import { symbolClientContext } from "./ClientContext.js";
import { PalantirApiError } from "./PalantirApiError.js";
import { UnknownError } from "./UnknownError.js";

export type FoundryPlatformMethod<F extends (...args: any[]) => any> = [
  method: number,
  path: string,
  flags?: number,
  contentType?: string,
  responseContentType?: string,
] & {
  __funcBrand?: F;
};

export async function foundryPlatformFetch<
  X extends FoundryPlatformMethod<any>,
>(
  client: SharedClient | SharedClientContext,
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
    (client as SharedClient)[symbolClientContext] ?? client,
    method,
    path,
    body,
    queryArgs,
    headerArgs,
    contentType,
    responseContentType,
  );
}

async function apiFetch(
  clientCtx: Pick<SharedClientContext, "baseUrl" | "fetch">,
  method: string,
  endpointPath: string,
  data?: any,
  queryArguments?: Record<string, string | string[]>,
  headers?: Record<string, string | number | boolean | undefined | null>,
  requestMediaType?: string,
  responseMediaType?: string,
) {
  const url = new URL(`/api${endpointPath}`, clientCtx.baseUrl);
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

  // Because this uses the client's fetch, there is a 99.99% chance that it is already going
  // to handle the error case and throw a PalantirApiError since its wrapped in a
  // createFetchOrThrow.
  const response = await clientCtx.fetch(url.toString(), {
    body,
    method: method,
    headers: headersInit,
  });

  // However, if we ended up using a "regular" fetch, the
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

  // Do not return anything if its a 204. Do not parse either!
  if (response.status === 204) {
    return;
  }

  if (responseMediaType == null || responseMediaType === "application/json") {
    return await response.json();
  }

  return response.blob();
}
