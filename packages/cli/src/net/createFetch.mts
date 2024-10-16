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

import { ExitProcessError } from "@osdk/cli.common";
import { PalantirApiError } from "@osdk/shared.net.errors";
import {
  createFetchHeaderMutator,
  createFetchOrThrow,
} from "@osdk/shared.net.fetch";
import { consola } from "consola";
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
  } else if (e.statusCode === 404) {
    tip =
      "The resource may not exist or your token may not have the required scopes to load it";
  }

  let message;
  if (e.errorName === "CannotDeleteDeployedVersion") {
    message = "The site version to delete is live and cannot be deleted";
    tip = "Run the `site version set` command to change the live site version";
  } else if (e.errorName === "InvalidVersion") {
    message = "The site version is invalid and must be a valid SemVer string";
  } else if (e.errorName === "VersionAlreadyExists") {
    message = "The site version already exists";
  } else if (e.errorName === "VersionNotFound") {
    message = "The site version could not be found";
  } else {
    const { errorCode, errorName, errorInstanceId, parameters } = e;
    // Include extra info about the original API error in CLI error messages
    // https://www.palantir.com/docs/foundry/api/general/overview/errors/
    message = `${e.message}\n\n${
      JSON.stringify(
        { errorCode, errorName, errorInstanceId, parameters },
        null,
        2,
      )
    }`;
  }

  throw new ExitProcessError(1, message, tip, e);
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
