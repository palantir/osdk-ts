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

import type { Resource } from "@opentelemetry/resources";
import { resourceFromAttributes } from "@opentelemetry/resources";

// Foundry requires exactly one resource carrying all four keys below; a missing key
// makes it reject the whole export, so buildResource throws on an empty value.

/** OTLP resource attribute: the application RID that owns the trace. */
export const TRACE_OWNING_RESOURCE_IDENTIFIER =
  "TRACE_OWNING_RESOURCE_IDENTIFIER";

/** OTLP resource attribute: the RID of the resource producing the telemetry. */
export const PRODUCING_RESOURCE_IDENTIFIER = "PRODUCING_RESOURCE_IDENTIFIER";

/** OTLP resource attribute: the version of the producing resource. */
export const PRODUCING_RESOURCE_VERSION = "PRODUCING_RESOURCE_VERSION";

/** OTLP resource attribute: the name of the service producing the telemetry. */
export const PRODUCING_SERVICE = "PRODUCING_SERVICE";

/** Default producing service name when none is supplied. */
export const DEFAULT_PRODUCING_SERVICE = "osdk-frontend";

/** Default producing resource version when none is supplied. */
export const DEFAULT_PRODUCING_RESOURCE_VERSION = "unknown";

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

/** Build the one OTel `Resource`, populating the four mandatory Foundry keys. */
export function buildResource(params: BuildResourceParams): Resource {
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
        `Telemetry resource is missing mandatory attribute "${key}"; Foundry `
          + `rejects exports with an incomplete resource.`,
      );
    }
  }

  return resourceFromAttributes(attributes);
}
