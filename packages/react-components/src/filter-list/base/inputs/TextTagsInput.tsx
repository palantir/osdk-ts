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

import type { ObjectSet, ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import classnames from "classnames";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { Combobox } from "../../../base-components/combobox/Combobox.js";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";
import sharedStyles from "./shared.module.css";
import styles from "./TextTagsInput.module.css";

interface TextTagsInputProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> {
  objectType: Q;
  propertyKey: K;
  tags: string[];
  onChange: (tags: string[]) => void;
  objectSet?: ObjectSet<Q>;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  allowCustomTags?: boolean;
  suggestFromData?: boolean;
}

function TextTagsInputInner<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>({
  objectType,
  propertyKey,
  tags,
  onChange,
  objectSet,
  className,
  style,
  placeholder = "Add a tag...",
  allowCustomTags = true,
  suggestFromData = true,
}: TextTagsInputProps<Q, K>): React.ReactElement {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: suggestions, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { objectSet, limit: suggestFromData ? 50 : 0 },
  );

  const filteredSuggestions = useMemo(() => {
    if (!suggestFromData) return [];
    const lowerInput = inputValue.toLowerCase();
    return suggestions
      .filter(
        (s) =>
          (!inputValue.trim()
            || s.value.toLowerCase().includes(lowerInput))
          && !tags.includes(s.value),
      )
      .slice(0, 10);
  }, [suggestions, inputValue, tags, suggestFromData]);

  const addTag = useCallback(
    (tag: string) => {
      const trimmedTag = tag.trim();
      if (trimmedTag && !tags.includes(trimmedTag)) {
        onChange([...tags, trimmedTag]);
      }
      setInputValue("");
    },
    [tags, onChange],
  );

  const removeTag = useCallback(
    (tag: string) => {
      onChange(tags.filter((t) => t !== tag));
    },
    [tags, onChange],
  );

  const handleValueChange = useCallback(
    (newTags: string[] | null) => {
      onChange(newTags ?? []);
    },
    [onChange],
  );

  const handleInputValueChange = useCallback(
    (value: string) => {
      setInputValue(value);
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && inputValue.trim()) {
        e.preventDefault();
        if (allowCustomTags) {
          addTag(inputValue);
        } else if (filteredSuggestions.length > 0) {
          addTag(filteredSuggestions[0].value);
        }
      } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
        removeTag(tags[tags.length - 1]);
      }
    },
    [inputValue, tags, addTag, removeTag, allowCustomTags, filteredSuggestions],
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedText = e.clipboardData.getData("text");
      if (pastedText.includes(",") || pastedText.includes("\n")) {
        e.preventDefault();
        const newTags = pastedText
          .split(/[,\n]/)
          .map((t) => t.trim())
          .filter((t) => t && !tags.includes(t));
        if (newTags.length > 0) {
          onChange([...tags, ...newTags]);
        }
      }
    },
    [tags, onChange],
  );

  return (
    <div
      className={classnames(styles.textTags, className)}
      style={style}
      data-loading={isLoading}
    >
      {error && (
        <div className={sharedStyles.errorMessage}>
          Error loading suggestions: {error.message}
        </div>
      )}

      <Combobox.Root<string, true>
        multiple
        value={tags}
        onValueChange={handleValueChange}
        inputValue={inputValue}
        onInputValueChange={handleInputValueChange}
      >
        {tags.length > 0 && (
          <div className={sharedStyles.tagContainer}>
            {tags.map((tag) => (
              <span key={tag} className={sharedStyles.tag}>
                {tag}
                <button
                  type="button"
                  className={sharedStyles.tagRemove}
                  onClick={() => removeTag(tag)}
                  aria-label={`Remove ${tag}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        <Combobox.Input
          ref={inputRef}
          className={styles.input}
          placeholder={tags.length > 0 ? "" : placeholder}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          aria-label={`Add ${propertyKey} tag`}
        />

        <Combobox.Portal>
          <Combobox.Positioner>
            <Combobox.Popup>
              {filteredSuggestions.length === 0
                ? (
                  allowCustomTags && inputValue.trim()
                    ? (
                      <Combobox.Empty>
                        Press Enter to add "{inputValue}"
                      </Combobox.Empty>
                    )
                    : (
                      <Combobox.Empty>
                        {suggestFromData
                          ? "No suggestions"
                          : "Type to add a tag"}
                      </Combobox.Empty>
                    )
                )
                : filteredSuggestions.map(({ value, count }) => (
                  <Combobox.Item key={value} value={value}>
                    {value} ({count.toLocaleString()})
                  </Combobox.Item>
                ))}
            </Combobox.Popup>
          </Combobox.Positioner>
        </Combobox.Portal>
      </Combobox.Root>

      {isLoading && suggestFromData && (
        <div className={sharedStyles.loadingMessage}>
          Loading suggestions...
        </div>
      )}
    </div>
  );
}

export const TextTagsInput = memo(
  TextTagsInputInner,
) as typeof TextTagsInputInner;
