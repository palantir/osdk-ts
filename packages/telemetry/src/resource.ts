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

import type { LoggerProviderOptions } from "@opentelemetry/sdk-logs";

/** Resource-level attributes describing the emitting application. */
export type ResourceAttributes = Record<string, string>;

/**
 * OTEL-2 SEAM.
 *
 * The OTel `Resource` describes the entity producing telemetry (service name,
 * version, application RID, ...). OTEL-2 owns wiring a real resource; when
 * `@opentelemetry/resources` is added as a dependency, this becomes
 * `return resourceFromAttributes(attributes)`.
 *
 * Until then this returns `undefined`, which leaves the `LoggerProvider` on its
 * default empty resource so the package builds and runs standalone. The
 * attributes are accepted now so callers (and OTEL-2) have a stable entry
 * point.
 */
export function buildResource(
  attributes: ResourceAttributes,
): LoggerProviderOptions["resource"] {
  void attributes;
  return undefined;
}
