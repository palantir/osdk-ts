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
import { PalantirApiError } from "../PalantirApiError.js";
import { UnknownError } from "../UnknownError.js";
import { replaceHttpIfNotLocalhost } from "../util/index.js";

export function createOpenApiRequest<
  TExpectedResponse,
  AsReadableStream extends boolean = false,
>(
  basePath: string,
  fetchFn: typeof fetch,
  contextPath: string = "/api",
  asReadableStream?: AsReadableStream,
): OpenApiRequest<
  AsReadableStream extends true ? ReadableStream<Uint8Array>
    : Exclude<TExpectedResponse, ReadableStream<Uint8Array>>
> {
  return async function openApiRequest(
    method: string,
    endpointPath: string,
    data?: any,
    queryArguments?: { [paramName: string]: any },
    headers?: {
      [header: string]: string | number | boolean | undefined | null;
    },
    requestMediaType?: string,
    responseMediaType?: string,
  ) {
    const url = new URL(`${contextPath}${endpointPath}`, withHttps(basePath));
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

    const body = getBody(data);

    const response = await fetchFn(url.toString(), {
      body,
      method: method,
      headers: headersInit,
    });

    // error status codes are not thrown by fetch automatically,
    // we have to look at the ok property and behave accordingly
    if (!response.ok) {
      throw await convertError(response);
    }

    if (responseMediaType && responseMediaType === "*/*") {
      if (asReadableStream) {
        return response.body;
      }
      return await response.blob();
    }

    return await response.json();
  };
}

function getBody(body: any): BodyInit | null | undefined {
  if (body == null) {
    return body;
  }

  if (globalThis.Blob && body instanceof globalThis.Blob) {
    return body;
  }

  return JSON.stringify(body);
}

function withHttps(url: string): string {
  const protocolRegex = /^https?:\/\//i;
  const httpsProtocol = "https://";

  return protocolRegex.test(url)
    ? replaceHttpIfNotLocalhost(url)
    : `${httpsProtocol}${url}`;
}

async function convertError(response: Response) {
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
