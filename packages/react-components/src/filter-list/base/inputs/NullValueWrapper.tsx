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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { useOsdkAggregation } from "@osdk/react/experimental";
import classnames from "classnames";
import React, { memo, useCallback, useMemo } from "react";
import { Checkbox } from "../../../base-components/checkbox/Checkbox.js";
import {
  createNullCountAggregateOptions,
  createNullWhereClause,
} from "../../utils/aggregationHelpers.js";
import styles from "./NullValueWrapper.module.css";
import sharedStyles from "./shared.module.css";

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
    () => createNullCountAggregateOptions<Q>(),
    [],
  );

  const nullWhereClause = useMemo(
    () => createNullWhereClause<Q>(propertyKey as string),
    [propertyKey],
  );

  const { data: nullCountData, isLoading, error } = useOsdkAggregation(
    objectType,
    {
      where: nullWhereClause,
      aggregate: nullCountAggregateOptions,
    },
  );

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
    <div className={classnames(styles.nullWrapper, className)} style={style}>
      {children}

      <div
        className={styles.nullValueRow}
        data-checked={includeNull}
        data-loading={isLoading}
      >
        <label className={styles.nullLabel}>
          <Checkbox checked={includeNull} onCheckedChange={handleToggle} />
          <span className={styles.nullLabelText}>No value</span>
        </label>
        {showNullCount && !error && nullCount > 0 && (
          <span className={styles.count}>
            {nullCount.toLocaleString()}
          </span>
        )}
      </div>
      {error && (
        <div className={sharedStyles.errorMessage}>
          Failed to load null count
        </div>
      )}
    </div>
  );
}

export const NullValueWrapper = memo(
  NullValueWrapperInner,
) as typeof NullValueWrapperInner;
