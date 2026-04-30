/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { PlatformClient } from "@osdk/client";

/**
 * Attribution payload forwarded to the Foundry Language Model Service for
 * billing and rate limiting. Maps onto LMS's `IAttribution`.
 */
export type Attribution =
  | { type: "user"; user: string }
  | { type: "project"; projectRid: string }
  | { type: "service"; serviceUserToken: string };

/**
 * Identifies a model in the Foundry Language Model Service.
 *
 * - `lmsModel`: a built-in LMS model addressed by `apiName` (e.g. "gpt-4o")
 * - `registeredModel`: a customer-registered model addressed by RID
 */
export type ModelIdentifier =
  | { type: "lmsModel"; apiName: string }
  | { type: "registeredModel"; registeredModelRid: string };

export type RequestPriority = "CRITICAL" | "INTERACTIVE" | "BATCH";

/**
 * Opaque language model handle accepted by `generateText` / `streamText`.
 *
 * Construct one via {@link foundryModel}. The handle deliberately exposes only
 * informational fields — the actual client + identifier + attribution are
 * stashed in a module-private WeakMap so they cannot be tampered with by
 * consumers.
 */
export interface LanguageModel {
  /** Stable identifier for logging / telemetry, e.g. "foundry/gpt-4o". */
  readonly modelId: string;
  /** Provider tag — `"foundry-lms"` for the built-in LMS adapter. */
  readonly provider: string;
}

export interface FoundryModelOptions {
  /** Foundry PlatformClient providing the auth token + base URL. */
  client: PlatformClient;
  /** LMS model API name or registered model RID. */
  model: string | ModelIdentifier;
  /**
   * Attribution forwarded to LMS for billing. Defaults to the PlatformClient's
   * own bearer token, attributed to the calling user.
   */
  attribution?: Attribution;
  /**
   * Default request priority forwarded to LMS. Defaults to `CRITICAL` to
   * match interactive chat workloads.
   */
  defaultPriority?: RequestPriority;
}

/**
 * Internal handle stashed alongside a {@link LanguageModel}. Not part of the
 * public API — accessed only by `internal/runStep.ts` via
 * {@link _getFoundryInternal}.
 */
export interface FoundryInternalHandle {
  client: PlatformClient;
  identifier: ModelIdentifier;
  attribution: Attribution | undefined;
  priority: RequestPriority;
}

const internals: WeakMap<LanguageModel, FoundryInternalHandle> = new WeakMap();

/**
 * Construct a Foundry-LMS-backed {@link LanguageModel}.
 *
 * @example
 * ```ts
 * import { foundryModel, generateText } from "@osdk/aip-core";
 *
 * const model = foundryModel({ client, model: "gpt-4o" });
 * const { text } = await generateText({
 *   model,
 *   prompt: "Hello, world",
 * });
 * ```
 */
export function foundryModel(options: FoundryModelOptions): LanguageModel {
  const identifier: ModelIdentifier = typeof options.model === "string"
    ? { type: "lmsModel", apiName: options.model }
    : options.model;

  const id = identifier.type === "lmsModel"
    ? identifier.apiName
    : identifier.registeredModelRid;

  const handle: LanguageModel = Object.freeze({
    modelId: `foundry/${id}`,
    provider: "foundry-lms",
  });

  internals.set(handle, {
    client: options.client,
    identifier,
    attribution: options.attribution,
    priority: options.defaultPriority ?? "CRITICAL",
  });

  return handle;
}

/**
 * Internal accessor for the foundry handle. Not exported from the package
 * index. `runStep` calls this; consumers should never need it.
 *
 * @internal
 */
export function _getFoundryInternal(
  model: LanguageModel,
): FoundryInternalHandle {
  const handle = internals.get(model);
  if (handle == null) {
    throw new Error(
      `LanguageModel(modelId=${model.modelId}, provider=${model.provider}) `
        + `was not constructed via foundryModel(). Only foundry-lms models are supported in v0.`,
    );
  }
  return handle;
}
