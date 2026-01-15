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
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePropertyAggregation } from "../../hooks/usePropertyAggregation.js";

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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const { data: suggestions, isLoading, error } = usePropertyAggregation(
    objectType,
    propertyKey,
    { objectSet, limit: suggestFromData ? 50 : 0 },
  );

  const filteredSuggestions = useMemo(() => {
    if (!suggestFromData || !inputValue.trim()) return [];
    const lowerInput = inputValue.toLowerCase();
    return suggestions
      .filter(
        (s) =>
          s.value.toLowerCase().includes(lowerInput) && !tags.includes(s.value),
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
      setShowSuggestions(false);
    },
    [tags, onChange],
  );

  const removeTag = useCallback(
    (tag: string) => {
      onChange(tags.filter((t) => t !== tag));
    },
    [tags, onChange],
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

  const rootClassName = className
    ? `filter-input--text-tags ${className}`
    : "filter-input--text-tags";

  return (
    <div className={rootClassName} style={style} data-loading={isLoading}>
      {error && (
        <div className="filter-input__error-message">
          Error loading suggestions: {error.message}
        </div>
      )}

      <div className="filter-input__tag-container">
        {tags.map((tag) => (
          <span key={tag} className="filter-input__tag">
            {tag}
            <button
              type="button"
              className="filter-input__tag-remove"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <div className="filter-input__input-container">
        <input
          type="text"
          className="filter-input__input"
          placeholder={tags.length > 0 ? "" : placeholder}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setTimeout(() => {
              if (isMountedRef.current) {
                setShowSuggestions(false);
              }
            }, 150);
          }}
          aria-label={`Add ${propertyKey} tag`}
        />

        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="filter-input__suggestion-list">
            {filteredSuggestions.map(({ value, count }) => (
              <li key={value}>
                <button
                  type="button"
                  className="filter-input__suggestion-item"
                  onMouseDown={() => addTag(value)}
                >
                  {value} ({count.toLocaleString()})
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isLoading && suggestFromData && (
        <div className="filter-input__loading-message">
          Loading suggestions...
        </div>
      )}
    </div>
  );
}

export const TextTagsInput = memo(
  TextTagsInputInner,
) as typeof TextTagsInputInner;
