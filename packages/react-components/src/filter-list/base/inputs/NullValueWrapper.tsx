/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  AggregateOpts,
  ObjectTypeDefinition,
  PropertyKeys,
  WhereClause,
} from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import React, { memo, useCallback, useMemo } from "react";
import type { NullValueWrapperClassNames } from "../../types/ClassNameOverrides.js";

interface NullValueWrapperProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  includeNull?: boolean;
  onIncludeNullChange: (include: boolean) => void;
  /**
   * WhereClause from other filters to chain aggregation queries.
   * When provided, the aggregation will respect other active filters.
   */
  whereClause?: WhereClause<Q>;
  showNullCount?: boolean;
  children: React.ReactNode;
  classNames?: NullValueWrapperClassNames;
}

function NullValueWrapperInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  includeNull = false,
  onIncludeNullChange,
  whereClause,
  showNullCount = true,
  children,
  classNames,
}: NullValueWrapperProps<Q, K>): React.ReactElement {
  // Aggregate to count null values
  const nullCountAggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
        $where: {
          [propertyKey as string]: { $isNull: true },
        },
      }) as AggregateOpts<Q>,
    [propertyKey],
  );

  const { data: nullCountData, isLoading } = useOsdkAggregation(objectType, {
    where: whereClause,
    aggregate: nullCountAggregateOptions,
  });

  const nullCount = useMemo(() => {
    if (!nullCountData) return 0;
    const result = nullCountData as { $count?: number } | Iterable<unknown>;
    if ("$count" in result && typeof result.$count === "number") {
      return result.$count;
    }
    return 0;
  }, [nullCountData]);

  const handleToggle = useCallback(() => {
    onIncludeNullChange(!includeNull);
  }, [includeNull, onIncludeNullChange]);

  return (
    <div className={classNames?.root}>
      {children}

      <div
        className={classNames?.nullValueRow}
        data-checked={includeNull}
        data-loading={isLoading}
      >
        <label className={classNames?.checkbox}>
          <input
            type="checkbox"
            checked={includeNull}
            onChange={handleToggle}
          />
          <span className={classNames?.checkboxIndicator} />
          <span className={classNames?.label}>No value</span>
        </label>
        {showNullCount && nullCount > 0 && (
          <span className={classNames?.count}>
            {nullCount.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

export const NullValueWrapper = memo(
  NullValueWrapperInner,
) as typeof NullValueWrapperInner;
