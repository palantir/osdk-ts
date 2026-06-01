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
 * Catalog of StatusUpdate `type` values and their allowed `value`s, mirroring the Workforce
 * ontology manifest. Pure data — no SDK imports — so it is safe to author before codegen.
 *
 * `noRecordValue` marks the value that means "no record of this type exists for the assignment"
 * (resolved via a count==0 rule in the latest-status filter, not via a timestamp comparison).
 */
export interface StatusTypeSpec {
  /** The StatusUpdate.type value, e.g. "WorkMode". */
  readonly type: string;
  /** Allowed StatusUpdate.value values for this type, in display order. */
  readonly values: readonly string[];
  /** The value meaning "no record exists" (count==0 path), if any. */
  readonly noRecordValue?: string;
}

export const STATUS_TYPES: readonly StatusTypeSpec[] = [
  {
    type: "RemoteEligible",
    values: ["Yes", "No", "Unknown"],
    noRecordValue: "Unknown",
  },
  { type: "WorkMode", values: ["Remote", "Hybrid", "Onsite"] },
  {
    type: "OnboardingStage",
    values: ["Not Started", "In Progress", "Complete"],
  },
  { type: "EquipmentStatus", values: ["Requested", "Issued", "Returned"] },
  { type: "AccessLevel", values: ["None", "Standard", "Elevated"] },
];

const STATUS_TYPE_BY_NAME: ReadonlyMap<string, StatusTypeSpec> = new Map(
  STATUS_TYPES.map((spec) => [spec.type, spec]),
);

export function getStatusTypeSpec(type: string): StatusTypeSpec | undefined {
  return STATUS_TYPE_BY_NAME.get(type);
}

export function getNoRecordValue(type: string): string | undefined {
  return STATUS_TYPE_BY_NAME.get(type)?.noRecordValue;
}
