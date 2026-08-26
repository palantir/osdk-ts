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

// cspell:ignore listoption

import { MenuItem } from "@blueprintjs/core";
import {
  type ItemListPredicate,
  type ItemPredicate,
  type ItemRenderer,
  MultiSelect,
} from "@blueprintjs/select";
import classnames from "classnames";
import React, { memo, useCallback, useMemo, useState } from "react";

import type { PropertyAggregationValue } from "../../types/AggregationTypes.js";
import { useFilterListBoundary } from "../FilterListBoundaryContext.js";
import { OptionLabel } from "./OptionLabel.js";
import { SelectInputSkeleton } from "./SelectInputSkeleton.js";

import sharedStyles from "./shared.module.css";
import styles from "./TextTagsInput.module.css";

const TAG_SEPARATOR_PATTERN = /[,\n]/u;

interface TextTagsInputProps {
  suggestions: PropertyAggregationValue[];
  isLoading: boolean;
  error: Error | null;
  tags: string[];
  onChange: (tags: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  allowCustomTags?: boolean;
  suggestionLimit?: number;
  ariaLabel?: string;
}

function TextTagsInputInner({
  suggestions,
  isLoading,
  error,
  tags,
  onChange,
  className,
  style,
  placeholder = "Add a tag...",
  allowCustomTags = true,
  suggestionLimit = 10,
  ariaLabel = "Add tag",
}: TextTagsInputProps): React.ReactElement {
  const collisionBoundary = useFilterListBoundary();
  const [query, setQuery] = useState("");
  const items = useMemo(
    () => suggestions.map(({ value }) => value),
    [suggestions],
  );
  const countByValue = useMemo(
    () => new Map(suggestions.map(({ value, count }) => [value, count])),
    [suggestions],
  );
  const selectedSet = useMemo(() => new Set(tags), [tags]);
  const itemPredicate = useCallback<ItemPredicate<string>>(
    (nextQuery, value, _index, exactMatch) => {
      if (selectedSet.has(value)) return false;
      return exactMatch
        ? value.toLocaleLowerCase() === nextQuery.toLocaleLowerCase()
        : value.toLocaleLowerCase().includes(nextQuery.toLocaleLowerCase());
    },
    [selectedSet],
  );
  const itemListPredicate = useCallback<ItemListPredicate<string>>(
    (nextQuery, nextItems) =>
      nextItems
        .filter((value) => itemPredicate(nextQuery, value))
        .slice(0, suggestionLimit),
    [itemPredicate, suggestionLimit],
  );
  const addTags = useCallback(
    (nextTags: readonly string[]) => {
      const additions = nextTags
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0 && !selectedSet.has(tag));
      if (additions.length > 0) onChange([...tags, ...new Set(additions)]);
      setQuery("");
    },
    [onChange, selectedSet, tags],
  );
  const handleItemSelect = useCallback(
    (tag: string) => addTags([tag]),
    [addTags],
  );
  const handleItemsPaste = useCallback(
    (nextTags: string[]) => addTags(nextTags),
    [addTags],
  );
  const handleRemove = useCallback(
    (tag: string) => onChange(tags.filter((value) => value !== tag)),
    [onChange, tags],
  );
  const createTagsFromQuery = useCallback(
    (nextQuery: string) =>
      nextQuery.split(TAG_SEPARATOR_PATTERN).map((tag) => tag.trim()),
    [],
  );
  const renderCreateTag = useCallback(
    (
      nextQuery: string,
      active: boolean,
      handleClick: React.MouseEventHandler<HTMLElement>,
    ) => (
      <MenuItem
        active={active}
        icon="add"
        onClick={handleClick}
        roleStructure="listoption"
        shouldDismissPopover={false}
        text={`Add "${nextQuery}"`}
      />
    ),
    [],
  );
  const renderItem = useCallback<ItemRenderer<string>>(
    (value, { handleClick, modifiers }) => {
      if (!modifiers.matchesPredicate) return null;
      return (
        <MenuItem
          active={modifiers.active}
          key={value}
          label={`(${(countByValue.get(value) ?? 0).toLocaleString()})`}
          onClick={handleClick}
          roleStructure="listoption"
          shouldDismissPopover={false}
          text={<OptionLabel value={value} />}
        />
      );
    },
    [countByValue],
  );
  const renderTag = useCallback(
    (tag: string) => <OptionLabel value={tag} />,
    [],
  );

  return (
    <div
      className={classnames(styles.textTags, className)}
      style={style}
      data-loading={isLoading && suggestions.length > 0}
    >
      <span className={sharedStyles.srOnly} role="status">
        {isLoading ? "Loading options" : ""}
      </span>

      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading suggestions: {error.message}
        </div>
      )}

      <MultiSelect<string>
        createNewItemFromQuery={
          allowCustomTags ? createTagsFromQuery : undefined
        }
        createNewItemRenderer={allowCustomTags ? renderCreateTag : undefined}
        fill={true}
        itemListPredicate={itemListPredicate}
        itemPredicate={itemPredicate}
        itemRenderer={renderItem}
        items={items}
        noResults={
          <MenuItem
            disabled={true}
            roleStructure="listoption"
            text={suggestionLimit ? "No suggestions" : "Type to add a tag"}
          />
        }
        onItemSelect={handleItemSelect}
        onItemsPaste={handleItemsPaste}
        onQueryChange={setQuery}
        onRemove={handleRemove}
        placeholder={placeholder}
        popoverProps={{
          boundary: collisionBoundary,
          matchTargetWidth: true,
          minimal: true,
        }}
        query={query}
        selectedItems={tags}
        tagInputProps={{ inputProps: { "aria-label": ariaLabel } }}
        tagRenderer={renderTag}
      />

      {!error && suggestions.length === 0 && isLoading && !!suggestionLimit && (
        <SelectInputSkeleton />
      )}
    </div>
  );
}

export const TextTagsInput = memo(
  TextTagsInputInner,
) as typeof TextTagsInputInner;
