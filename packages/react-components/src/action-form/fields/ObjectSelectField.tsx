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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import { useObjectSet, useOsdkMetadata, useOsdkObjects } from "@osdk/react";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useDebouncedValue } from "../../shared/hooks/useDebouncedValue.js";
import type { ObjectSelectFieldProps } from "../FormFieldApi.js";
import { AsyncDropdownField } from "./AsyncDropdownField.js";

/** Debounce search input to avoid firing a server query on every keystroke. */
const SEARCH_DEBOUNCE_MS = 300;
/** Number of objects fetched per page from the OSDK. */
const PAGE_SIZE = 50;

type ObjectSelectOsdkObject = Osdk.Instance<ObjectTypeDefinition>;

/** Stable empty array so the component doesn't re-render when data is undefined. */
const EMPTY_OBJECT_SELECT_ITEMS: ObjectSelectOsdkObject[] = [];

export const ObjectSelectField: React.NamedExoticComponent<
  ObjectSelectFieldProps
> = memo(function ObjectSelectFieldFn(props): React.ReactElement {
  const source = resolveObjectSelectSource(props);

  if (source == null) {
    return <ObjectSelectUnavailableField {...props} />;
  }

  return <ObjectSelectAvailableField {...props} source={source} />;
});

type ResolvedObjectSelectSource<Q extends ObjectTypeDefinition> =
  | { kind: "objectType"; objectType: Q; objectSet?: undefined }
  | { kind: "objectSet"; objectType: Q; objectSet: ObjectSet<Q> };

type ObjectSelectAvailableFieldProps<Q extends ObjectTypeDefinition> =
  & ObjectSelectFieldProps<Q>
  & {
    source: ResolvedObjectSelectSource<Q>;
  };

const ObjectSelectAvailableField: React.NamedExoticComponent<
  ObjectSelectAvailableFieldProps<ObjectTypeDefinition>
> = memo(function ObjectSelectAvailableFieldFn({
  source,
  value,
  onChange,
  error,
  id,
  placeholder,
  isMultiple,
  portalRef,
  portalContainer,
}): React.ReactElement {
  // Tracks the user's search text. Cleared on selection so the selected
  // label (managed by base-ui) doesn't trigger a server-side search.
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, SEARCH_DEBOUNCE_MS);

  const handleChange = useCallback(
    (newValue: ObjectSelectOsdkObject | null) => {
      onChange?.(newValue);
      setQuery("");
    },
    [onChange],
  );

  const { metadata } = useOsdkMetadata(source.objectType);
  const titleProperty = typeof metadata?.titleProperty === "string"
    ? metadata.titleProperty
    : undefined;

  // Search on the title property (e.g. "fullName") so the where clause
  // matches the same text displayed to the user via obj.$title.
  // The where clause is loosely typed because we resolve the property
  // name at runtime from metadata, not from compile-time type info.
  const where: WhereClause<ObjectTypeDefinition> | undefined = useMemo(() => {
    const trimmed = debouncedQuery.trim();
    if (trimmed === "" || titleProperty == null) {
      return undefined;
    }
    return {
      [titleProperty]: { $containsAllTermsInOrder: trimmed },
    } as WhereClause<ObjectTypeDefinition>;
  }, [debouncedQuery, titleProperty]);

  const objectSetResult = useObjectSet(source.objectSet, {
    where,
    pageSize: PAGE_SIZE,
    enabled: source.kind === "objectSet",
  });

  const objectTypeResult = useOsdkObjects(source.objectType, {
    where,
    pageSize: PAGE_SIZE,
    enabled: source.kind === "objectType",
  });

  const {
    data,
    isLoading,
    error: fetchError,
    fetchMore,
    hasMore,
  } = source.kind === "objectSet" ? objectSetResult : objectTypeResult;

  const items = data ?? EMPTY_OBJECT_SELECT_ITEMS;

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
      portalContainer={portalContainer}
      onQueryChange={setQuery}
      isLoading={isLoading}
      isSearching={debouncedQuery.trim() !== "" && isLoading}
      hasMore={hasMore}
      onFetchMore={handleFetchMore}
      fetchError={fetchError}
    />
  );
});

const ObjectSelectUnavailableField: React.NamedExoticComponent<
  ObjectSelectFieldProps<ObjectTypeDefinition>
> = memo(function ObjectSelectUnavailableFieldFn({
  value,
  onChange,
  error,
  id,
  placeholder,
  isMultiple,
  portalRef,
  portalContainer,
}): React.ReactElement {
  const handleChange = useCallback(
    (newValue: ObjectSelectOsdkObject | null) => {
      onChange?.(newValue);
    },
    [onChange],
  );

  const handleFetchMore = useCallback(() => {}, []);

  return (
    <AsyncDropdownField
      id={id}
      value={value}
      onChange={handleChange}
      error={error}
      items={EMPTY_OBJECT_SELECT_ITEMS}
      itemToStringLabel={itemToStringLabel}
      itemToKey={itemToKey}
      isItemEqual={isItemEqual}
      placeholder={placeholder ?? "Search…"}
      isMultiple={isMultiple}
      portalRef={portalRef}
      portalContainer={portalContainer}
      isLoading={false}
      isSearching={false}
      hasMore={false}
      onFetchMore={handleFetchMore}
    />
  );
});

function resolveObjectSelectSource(
  props: ObjectSelectFieldProps<ObjectTypeDefinition>,
): ResolvedObjectSelectSource<ObjectTypeDefinition> | undefined {
  if ("objectSet" in props && props.objectSet != null) {
    return {
      kind: "objectSet",
      objectSet: props.objectSet,
      objectType: props.objectSet.$objectSetInternals.def,
    };
  }

  if ("objectType" in props && props.objectType != null) {
    return { kind: "objectType", objectType: props.objectType };
  }

  return undefined;
}

function itemToStringLabel(obj: ObjectSelectOsdkObject): string {
  return obj.$title ?? String(obj.$primaryKey);
}

function itemToKey(obj: ObjectSelectOsdkObject): string {
  return String(obj.$primaryKey);
}

function isItemEqual(
  a: ObjectSelectOsdkObject,
  b: ObjectSelectOsdkObject,
): boolean {
  return a.$primaryKey === b.$primaryKey;
}
