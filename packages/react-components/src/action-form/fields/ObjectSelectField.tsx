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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import { useOsdkObjects } from "@osdk/react/experimental";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useDebouncedValue } from "../../shared/hooks/useDebouncedValue.js";
import type { ObjectSelectFieldProps } from "../FormFieldApi.js";
import { AsyncDropdownField } from "./AsyncDropdownField.js";

/** Debounce search input to avoid firing a server query on every keystroke. */
const SEARCH_DEBOUNCE_MS = 300;
/** Number of objects fetched per page from the OSDK. */
const PAGE_SIZE = 5;

type OsdkObject = Osdk.Instance<ObjectOrInterfaceDefinition>;

/** Stable empty array so the component doesn't re-render when data is undefined. */
const EMPTY_ITEMS: OsdkObject[] = [];

export const ObjectSelectField: React.NamedExoticComponent<
  ObjectSelectFieldProps
> = memo(function ObjectSelectFieldFn({
  apiName,
  ontologyType,
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
    (newValue: OsdkObject | null) => {
      onChange?.(newValue);
      setQuery("");
    },
    [onChange],
  );

  // At runtime, useOsdkObjects only reads apiName and type from the definition.
  // The full type definition shape is for compile-time type safety only.
  const typeDef = useMemo(
    () =>
      ({
        type: ontologyType,
        apiName,
      }) as ObjectOrInterfaceDefinition,
    [apiName, ontologyType],
  );

  const { metadata } = useOsdkMetadata(typeDef);
  // InterfaceMetadata doesn't have titleProperty — only ObjectMetadata does.
  // When absent, search is disabled (where clause stays undefined).
  const titleProperty = metadata != null
      && "titleProperty" in metadata
      && typeof metadata.titleProperty === "string"
    ? metadata.titleProperty
    : undefined;

  // Search on the title property (e.g. "fullName") so the where clause
  // matches the same text displayed to the user via obj.$title.
  // The where clause is loosely typed because we resolve the property
  // name at runtime from metadata, not from compile-time type info.
  const where = useMemo(() => {
    const trimmed = debouncedQuery.trim();
    if (trimmed === "" || titleProperty == null) {
      return undefined;
    }
    return {
      [titleProperty]: { $containsAnyTerm: trimmed },
    } as Parameters<typeof useOsdkObjects>[1] extends
      | { where?: infer W }
      | undefined ? W
      : never;
  }, [debouncedQuery, titleProperty]);

  const {
    data,
    isLoading,
    error: fetchError,
    fetchMore,
    hasMore,
  } = useOsdkObjects(typeDef, {
    where,
    pageSize: PAGE_SIZE,
  });

  const items = data ?? EMPTY_ITEMS;

  const handleFetchMore = useCallback(() => {
    void fetchMore?.();
  }, [fetchMore]);

  return (
    <AsyncDropdownField
      id={id}
      value={value}
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
      isLoading={isLoading}
      isSearching={debouncedQuery.trim() !== "" && isLoading}
      hasMore={hasMore}
      onFetchMore={handleFetchMore}
      fetchError={fetchError}
    />
  );
});

function itemToStringLabel(obj: OsdkObject): string {
  return obj.$title ?? String(obj.$primaryKey);
}

function itemToKey(obj: OsdkObject): string {
  return String(obj.$primaryKey);
}

function isItemEqual(a: OsdkObject, b: OsdkObject): boolean {
  return a.$primaryKey === b.$primaryKey;
}
