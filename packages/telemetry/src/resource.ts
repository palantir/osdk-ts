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

// === UPSTREAM CONTRACT (SEAM) ===========================================
// The Foundry Telemetry Service (FTS) requires every OTLP export to carry
// exactly one resource, and that resource MUST carry all four attribute keys
// below. A missing key makes FTS reject the request, so {@link buildResource}
// throws rather than emitting a partial resource.
//
// The attribute key strings are owned by the FTS contract; confirm them
// against the gateway before relying on end-to-end ingestion.
// ========================================================================

/** OTLP resource attribute: the application RID that owns the trace. */
export const TRACE_OWNING_RESOURCE_IDENTIFIER =
  "trace.owning.resource.identifier";

/** OTLP resource attribute: the RID of the resource producing the telemetry. */
export const PRODUCING_RESOURCE_IDENTIFIER = "producing.resource.identifier";

/** OTLP resource attribute: the version of the producing resource. */
export const PRODUCING_RESOURCE_VERSION = "producing.resource.version";

/** OTLP resource attribute: the name of the service producing the telemetry. */
export const PRODUCING_SERVICE = "producing.service";

/** Default producing service name when none is supplied. */
export const DEFAULT_PRODUCING_SERVICE = "@osdk/telemetry";

/** Default producing resource version when none is supplied. */
export const DEFAULT_PRODUCING_RESOURCE_VERSION = "0.0.0";

/**
 * The single OTLP resource attached to an export. Exactly one of these is
 * emitted per export; FTS rejects multi-resource requests.
 */
export interface OtlpResource {
  attributes: Record<string, string>;
}

/**
 * The seam used to turn a flat attribute map into the OTLP resource shape. Kept
 * tiny on purpose so the Foundry OTLP transport and any future producer share
 * one construction path.
 */
export function resourceFromAttributes(
  attributes: Record<string, string>,
): OtlpResource {
  return { attributes };
}

export interface BuildResourceParams {
  /** The owning application RID; populates `TRACE_OWNING_RESOURCE_IDENTIFIER`. */
  applicationRid: string;
  /**
   * The RID of the resource producing the telemetry. Defaults to
   * `applicationRid`, which is correct for an app emitting its own telemetry.
   */
  producingResourceIdentifier?: string;
  /** Version of the producing resource. */
  producingResourceVersion?: string;
  /** Name of the producing service. */
  producingService?: string;
}

/**
 * Assemble the one OTLP resource for an export, populating all four mandatory
 * FTS keys. Throws if the owning/producing rid is empty, since FTS rejects a
 * resource that is missing any mandatory key.
 */
export function buildResource(params: BuildResourceParams): OtlpResource {
  const producingResourceIdentifier = params.producingResourceIdentifier
    ?? params.applicationRid;
  const producingResourceVersion = params.producingResourceVersion
    ?? DEFAULT_PRODUCING_RESOURCE_VERSION;
  const producingService = params.producingService
    ?? DEFAULT_PRODUCING_SERVICE;

  const attributes: Record<string, string> = {
    [TRACE_OWNING_RESOURCE_IDENTIFIER]: params.applicationRid,
    [PRODUCING_RESOURCE_IDENTIFIER]: producingResourceIdentifier,
    [PRODUCING_RESOURCE_VERSION]: producingResourceVersion,
    [PRODUCING_SERVICE]: producingService,
  };

  for (const [key, value] of Object.entries(attributes)) {
    if (value.length === 0) {
      throw new Error(
        `Telemetry resource is missing mandatory attribute "${key}"; FTS `
          + `rejects exports with an incomplete resource.`,
      );
    }
  }

  return resourceFromAttributes(attributes);
}
