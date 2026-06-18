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

import type {
  DerivedProperty,
  NonEmptyWhereClause,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import { getNoRecordValue } from "../constants/statusTypes.js";
import type { Assignment } from "../generatedNoCheck2/index.js";

/**
 * The one-to-many link on Assignment that owns the StatusUpdate timeline. The "latest value of a
 * status type" derivation is built entirely over this link.
 */
export const STATUS_LINK = "statusUpdate";

/** A single requested "the latest value of {type} is {value}" condition. */
export interface LatestStatusSelection {
  readonly type: string;
  readonly value: string;
}

/** Map of derived-property name -> creator. Uses the OSDK index-signature creator type. */
export type StatusRdpCreators = DerivedProperty.Clause<Assignment>;
/** Where clause over Assignment that may reference the dynamically-named derived properties. */
export type StatusRdpWhereClause = WhereClause<
  Assignment,
  Record<string, SimplePropertyDef>
>;
/**
 * The non-empty form of {@link StatusRdpWhereClause}, used for the elements of `$and`/`$or`
 * arrays we build dynamically (an empty `{}` operand is a compile-time error).
 */
export type NonEmptyStatusRdpWhereClause = NonEmptyWhereClause<
  Assignment,
  Record<string, SimplePropertyDef>
>;

/**
 * The derived properties plus the where clause that, together, select the assignments whose latest
 * status values match the selections. Pass `withProperties` and `where` to a list hook (e.g.
 * `useOsdkObjects`) to resolve the matching objects/keys.
 */
export interface LatestStatusQuery {
  readonly withProperties: StatusRdpCreators;
  readonly where: NonEmptyStatusRdpWhereClause;
}

// Deterministic, collision-free suffix per (type, value): same selections always produce the same
// derived-property names, so identical queries can share/coalesce in the observable cache. Each
// (type, value) is unique within one call, so the sanitized join is unique too.
function uidFor(type: string, value: string): string {
  return `${type}_${value}`.replace(/[^a-zA-Z0-9]/g, "_");
}

/**
 * For a (type, value) pair, derives the two RDPs the latest-value test needs:
 *  - targetMax = max(timestampEpochMs) over rows of this type AND this value
 *  - diff      = targetMax - max(timestampEpochMs) over rows of this type but a DIFFERENT value
 */
function buildLatestValueRdps(
  sel: LatestStatusSelection,
  uid: string,
): { creators: StatusRdpCreators; targetMaxKey: string; diffKey: string } {
  const targetMaxKey = `_su_${uid}_targetMax`;
  const diffKey = `_su_${uid}_diff`;

  const targetWhere = {
    $and: [{ type: { $eq: sel.type } }, { value: { $eq: sel.value } }],
  };
  const negatedWhere = {
    $and: [{ type: { $eq: sel.type } }, { value: { $ne: sel.value } }],
  };

  // Latest timestamp over the rows matching `where`. Kept as a local (not the creator type) so its
  // narrow numeric return type is preserved — `diff` reuses it via `.subtract`, which the widened
  // creator return type would drop.
  const latestTimestamp = (
    base: Parameters<StatusRdpCreators[string]>[0],
    where: typeof targetWhere | typeof negatedWhere,
  ) => base.pivotTo(STATUS_LINK).where(where).aggregate("timestampEpochMs:max");

  const targetMax: StatusRdpCreators[string] = (base) =>
    latestTimestamp(base, targetWhere);

  const diff: StatusRdpCreators[string] = (base) =>
    latestTimestamp(base, targetWhere).subtract(
      latestTimestamp(base, negatedWhere),
    );

  return {
    creators: { [targetMaxKey]: targetMax, [diffKey]: diff },
    targetMaxKey,
    diffKey,
  };
}

/**
 * The "no record of this type exists" RDP (count==0 path), used by no-record values such as
 * RemoteEligible == Unknown.
 */
function buildCountOfTypeRdp(
  type: string,
  uid: string,
): { creators: StatusRdpCreators; countKey: string } {
  const countKey = `_su_${uid}_count`;
  const count: StatusRdpCreators[string] = (base) =>
    base.pivotTo(STATUS_LINK).where({ type: { $eq: type } }).aggregate(
      "$count",
    );
  return { creators: { [countKey]: count }, countKey };
}

/**
 * The where-fragment proving "the latest row of this type has this value":
 *   diff >= 0  OR  (diff IS NULL AND targetMax IS NOT NULL)
 */
function latestValueCondition(
  targetMaxKey: string,
  diffKey: string,
): NonEmptyStatusRdpWhereClause {
  return {
    $or: [
      { [diffKey]: { $gte: 0 } },
      {
        $and: [
          { [diffKey]: { $isNull: true } },
          { [targetMaxKey]: { $isNull: false } },
        ],
      },
    ],
  };
}

/**
 * Builds the derived properties + where clause that select assignments whose LATEST value per
 * status type matches the given selections. Within one type the selected values are OR'd; across
 * types they are combined with `composeAcrossTypes` ("$and" for the headline query, "$or" for a
 * generic multi-status filter).
 *
 * Returns `undefined` when there are no selections (nothing to narrow by).
 */
export function buildLatestStatusQuery(
  selections: readonly LatestStatusSelection[],
  opts?: { composeAcrossTypes?: "$and" | "$or" },
): LatestStatusQuery | undefined {
  if (selections.length === 0) {
    return undefined;
  }

  const composeAcrossTypes = opts?.composeAcrossTypes ?? "$and";

  // Group selected values by type so we can OR within a type.
  const byType = new Map<string, string[]>();
  for (const sel of selections) {
    const existing = byType.get(sel.type);
    if (existing) {
      existing.push(sel.value);
    } else {
      byType.set(sel.type, [sel.value]);
    }
  }

  let withProperties: StatusRdpCreators = {};
  const perTypeConditions: NonEmptyStatusRdpWhereClause[] = [];

  for (const [type, values] of byType) {
    const noRecordValue = getNoRecordValue(type);
    const withinTypeConditions: NonEmptyStatusRdpWhereClause[] = [];

    for (const value of values) {
      const uid = uidFor(type, value);
      if (noRecordValue != null && value === noRecordValue) {
        const { creators, countKey } = buildCountOfTypeRdp(type, uid);
        withProperties = { ...withProperties, ...creators };
        withinTypeConditions.push({ [countKey]: { $eq: 0 } });
      } else {
        const { creators, targetMaxKey, diffKey } = buildLatestValueRdps(
          { type, value },
          uid,
        );
        withProperties = { ...withProperties, ...creators };
        withinTypeConditions.push(latestValueCondition(targetMaxKey, diffKey));
      }
    }

    perTypeConditions.push(
      withinTypeConditions.length === 1
        ? withinTypeConditions[0]
        : { $or: withinTypeConditions },
    );
  }

  let where: NonEmptyStatusRdpWhereClause;
  if (perTypeConditions.length === 1) {
    where = perTypeConditions[0];
  } else if (composeAcrossTypes === "$and") {
    where = { $and: perTypeConditions };
  } else {
    where = { $or: perTypeConditions };
  }

  return { withProperties, where };
}
