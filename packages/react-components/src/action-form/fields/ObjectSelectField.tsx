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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react/experimental";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useDebouncedValue } from "../../shared/hooks/useDebouncedValue.js";
import type { FetchingState, ObjectSelectFieldProps } from "../FormFieldApi.js";
import { AsyncDropdownField } from "./AsyncDropdownField.js";

const SEARCH_DEBOUNCE_MS = 300;
const PAGE_SIZE = 50;

type OsdkObject = Osdk.Instance<ObjectTypeDefinition>;

const EMPTY_ITEMS: OsdkObject[] = [];

export const ObjectSelectField: React.NamedExoticComponent<
  ObjectSelectFieldProps
> = memo(function ObjectSelectField({
  objectTypeApiName,
  value,
  onChange,
  error,
  id,
  placeholder,
  isMultiple,
  portalRef,
}): React.ReactElement {
  // Tracks the user's search text. Cleared on selection so the selected
  // label (managed by base-ui) doesn't trigger a server-side search.
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, SEARCH_DEBOUNCE_MS);

  const handleChange = useCallback(
    (newValue: unknown) => {
      onChange?.(newValue);
      setQuery("");
    },
    [onChange],
  );

  // At runtime, useOsdkObjects only reads apiName and type from the definition.
  // The full ObjectTypeDefinition is for compile-time type safety only.
  // Internal OSDK code uses this same pattern (ObjectListQuery.ts line 46).
  const objectTypeDef = useMemo(
    () =>
      ({
        type: "object" as const,
        apiName: objectTypeApiName,
      }) as ObjectTypeDefinition,
    [objectTypeApiName],
  );

  const where = useMemo(() => {
    if (debouncedQuery.trim() === "") {
      return undefined;
    }
    // Search on $title property via a containsAllTermsInOrder filter.
    // The where clause is loosely typed since we don't have compile-time
    // property info — the object type metadata is resolved at fetch time.
    return {
      $title: { $containsAllTermsInOrder: debouncedQuery.trim() },
    } as Parameters<typeof useOsdkObjects>[1] extends
      | { where?: infer W }
      | undefined ? W
      : never;
  }, [debouncedQuery]);

  const {
    data,
    isLoading,
    error: fetchError,
    fetchMore,
    hasMore,
  } = useOsdkObjects(objectTypeDef, {
    where,
    pageSize: PAGE_SIZE,
  });

  const items = data ?? EMPTY_ITEMS;

  const fetchingState = useMemo((): FetchingState => {
    if (fetchError != null) {
      return "error";
    }
    if (isLoading && items.length === 0) {
      return "loading";
    }
    if (hasMore) {
      return "more_available";
    }
    return "all_fetched";
  }, [fetchError, isLoading, items.length, hasMore]);

  const handleFetchMore = useCallback(() => {
    void fetchMore?.();
  }, [fetchMore]);

  const typedValue = narrowValue(value);

  return (
    <AsyncDropdownField
      id={id}
      value={typedValue}
      onChange={handleChange}
      error={error}
      items={items}
      itemToStringLabel={itemToStringLabel}
      itemToKey={itemToKey}
      isItemEqual={isItemEqual}
      placeholder={placeholder ?? "Search…"}
      isMultiple={isMultiple}
      portalRef={portalRef}
      onQueryChange={setQuery}
      fetchingState={fetchingState}
      onFetchMore={handleFetchMore}
      fetchError={fetchError}
    />
  );
});

/**
 * Narrows an unknown form value to an OsdkObject by checking for $primaryKey.
 * The form state stores OsdkObject instances selected by the user; this guard
 * bridges the untyped form boundary to the typed OSDK world.
 */
function isOsdkObject(value: unknown): value is OsdkObject {
  return value != null && typeof value === "object" && "$primaryKey" in value;
}

function narrowValue(value: unknown): OsdkObject | OsdkObject[] | null {
  if (value == null) {
    return null;
  }
  if (Array.isArray(value)) {
    return value.filter(isOsdkObject);
  }
  return isOsdkObject(value) ? value : null;
}

function itemToStringLabel(obj: OsdkObject): string {
  return obj.$title ?? String(obj.$primaryKey);
}

function itemToKey(obj: OsdkObject): string {
  return String(obj.$primaryKey);
}

function isItemEqual(a: OsdkObject, b: OsdkObject): boolean {
  return a.$primaryKey === b.$primaryKey;
}
