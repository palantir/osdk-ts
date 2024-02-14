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
  createFetchHeaderMutator,
  createFetchOrThrow,
  PalantirApiError,
} from "@osdk/shared.net";
import { consola } from "consola";
import { ExitProcessError } from "../ExitProcessError.js";
import { USER_AGENT } from "./UserAgent.js";

export function createFetch(
  tokenProvider: () => Promise<string> | string,
  fetchFn: typeof fetch = fetch,
) {
  return createFetchHeaderMutator(
    createRequestLoggingFetch(
      createErrorExitingFetch(
        createFetchOrThrow(fetchFn),
      ),
    ),
    async (headers) => {
      const token = await tokenProvider();
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Fetch-User-Agent", USER_AGENT);
      return headers;
    },
  );
}

function createErrorExitingFetch(fetchFn: typeof fetch = fetch): typeof fetch {
  return function errorExitingFetch(
    input: RequestInfo | URL,
    init?: RequestInit,
  ) {
    return fetchFn(input, init).catch(handleFetchError);
  };
}

function handleFetchError(e: unknown): Promise<Response> {
  if (!(e instanceof PalantirApiError)) {
    throw new ExitProcessError(1, "Unexpected fetch error");
  }

  let tip;
  if (e.statusCode === 401) {
    tip = "Check your token is valid and has not expired or been disabled";
  } else if (e.statusCode === 403) {
    tip = "Check your token has the required scopes for this operation";
  }

  throw new ExitProcessError(1, e.message, tip);
}

function createRequestLoggingFetch(
  fetchFn: typeof fetch = fetch,
): typeof fetch {
  return function requestLoggingFetch(
    input: RequestInfo | URL,
    init?: RequestInit,
  ) {
    const requestLog = typeof input === "string" || input instanceof URL
      ? `${init?.method ?? "GET"}: ${input.toString().trim()}`
      : `${input.method ?? "GET"}: ${input.url.toString().trim()}`;

    consola.trace(requestLog);
    return fetchFn(input, init).then((a) => {
      consola.trace(`FINISH ${requestLog}`);
      return a;
    });
  };
}
