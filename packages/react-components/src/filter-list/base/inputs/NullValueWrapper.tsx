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

interface NullValueWrapperProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  includeNull?: boolean;
  onIncludeNullChange: (include: boolean) => void;
  showNullCount?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function NullValueWrapperInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  includeNull = false,
  onIncludeNullChange,
  showNullCount = true,
  children,
  className,
  style,
}: NullValueWrapperProps<Q, K>): React.ReactElement {
  const nullCountAggregateOptions = useMemo(
    () =>
      ({
        $select: { $count: "unordered" as const },
      }) as AggregateOpts<Q>,
    [],
  );

  const nullWhereClause = useMemo(() => {
    return { [propertyKey as string]: { $isNull: true } } as WhereClause<Q>;
  }, [propertyKey]);

  const { data: nullCountData, isLoading } = useOsdkAggregation(objectType, {
    where: nullWhereClause,
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

  const rootClassName = className
    ? `filter-input__null-wrapper ${className}`
    : "filter-input__null-wrapper";

  return (
    <div className={rootClassName} style={style}>
      {children}

      <div
        className="filter-input__null-value-row"
        data-checked={includeNull}
        data-loading={isLoading}
      >
        <label className="bp6-control bp6-checkbox">
          <input
            type="checkbox"
            checked={includeNull}
            onChange={handleToggle}
          />
          <span className="bp6-control-indicator" />
          <span className="filter-input__null-label">No value</span>
        </label>
        {showNullCount && nullCount > 0 && (
          <span className="filter-input__count">
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
