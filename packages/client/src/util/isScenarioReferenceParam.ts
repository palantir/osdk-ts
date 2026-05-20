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

/**
 * Runtime predicate matching the raw `{ scenarioRid: string }` shape consumers may pass to an action whose
 * parameter is typed as `scenarioReference`. Returns `false` for functions (a {@link ScenarioClient} is callable
 * and is detected via its own predicate before reaching this one).
 *
 * @internal
 */
export function isScenarioReferenceParam(
  value: unknown,
): value is { scenarioRid: string } {
  return (
    typeof value === "object"
    && value != null
    && typeof (value as { scenarioRid?: unknown }).scenarioRid === "string"
  );
}
