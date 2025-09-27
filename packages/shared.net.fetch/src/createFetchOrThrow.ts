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

import { PalantirApiError, UnknownError } from "@osdk/shared.net.errors";
import { ConjureError, exponentialBackoff } from "conjure-client";

const backoffStrategy = exponentialBackoff(4, 250);

/**
 * Wraps a fetch plugin so that all errors (including when statusCode is not in the 200s) are converted to either PalantirApiError or UnknownError.
 *
 * If the returned promise does not have an error state, you are free to immediately call `.json()` or equivalent.
 *
 * @param fetchFn
 * @returns
 */
export function createFetchOrThrow(fetchFn: typeof fetch = fetch) {
  return async function fetchOrThrow(
    url: RequestInfo | URL,
    requestInit?: RequestInit,
  ): Promise<Response> {
    return doFetchAttempt(0);

    async function doFetchAttempt(attempt: number): Promise<Response> {
      let response;

      try {
        response = await fetchFn(url, requestInit);
      } catch (e) {
        const method = (requestInit?.method || "GET").toUpperCase();

        if (isRetryable(e, method)) {
          const retryAfter = backoffStrategy(attempt);

          if (retryAfter !== undefined) {
            await new Promise(resolve => setTimeout(resolve, retryAfter));
            return doFetchAttempt(attempt + 1);
          }
        }

        throw convertError(e, "A network error occurred");
      }

      if (!response.ok) {
        const fallbackMessage =
          `Failed to fetch ${response.status} ${response.statusText}`;

        if (response.headers.get("Content-Type") === "text/plain") {
          throw unknownError(await response.text(), response.status);
        }

        if (response.headers.get("Content-Type") === "text/html") {
          throw unknownError(
            fallbackMessage,
            response.status,
            new Error("Received HTML error page: " + await response.text()),
          );
        }

        let body;
        try {
          body = await response.json();
        } catch (e) {
          throw unknownError(
            fallbackMessage,
            response.status,
            e instanceof Error ? e : undefined,
          );
        }

        throw new PalantirApiError(
          body?.message
            ?? fallbackMessage,
          body?.errorName,
          body?.errorCode,
          body?.errorDescription,
          response.status,
          body?.errorInstanceId,
          body?.parameters,
        );
      }
      return response;
    }
  };
}

function isRetryable(error: unknown, method: string): boolean {
  if (error instanceof ConjureError) {
    const originalError = error.originalError;
    if (error && typeof error === "object") {
      let errorCode: string | undefined;
      if ("code" in error) {
        errorCode = (error as any).code;
      } else if (
        "cause" in error && error.cause && typeof error.cause === "object"
        && "code" in error.cause
      ) {
        errorCode = (error.cause as any).code;
      }

      if (errorCode) {
        if (errorCode === "ECONNREFUSED" || errorCode === "EAI_AGAIN") {
          return true;
        }

        if (errorCode === "ECONNRESET" && isIdempotentMethod(method)) {
          return true;
        }
      }
    }

    return false;
  }

  function isIdempotentMethod(method: string): boolean {
    return ["GET", "HEAD", "PUT", "DELETE"].includes(method.toUpperCase());
  }

  // Check for specific network-related error messages
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    if (
      message.includes("network")
      || message.includes("econnrefused")
      || message.includes("eai_again")
      || (message.includes("econnreset") && isIdempotentMethod(method))
    ) {
      return true;
    }
  }

  return false;
}

function convertError(
  e: any,
  msgIfNotError: string = "An unknown error occurred",
) {
  if (e instanceof Error) {
    return unknownError(e.message, undefined, e);
  }
  return unknownError(msgIfNotError, undefined);
}

function unknownError(
  message: string,
  statusCode?: number,
  originalError?: Error,
) {
  return new UnknownError(message, undefined, originalError, statusCode);
}
