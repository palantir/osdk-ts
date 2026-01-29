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

import { Button, Collapse, Icon, MenuItem, Tag } from "@blueprintjs/core";
import type { IconName } from "@blueprintjs/icons";
import React, { useMemo, useState } from "react";
import type {
  AddFilterMenuProps,
  FilterCategory,
  FilterTemplate,
} from "../types/AddFilterMenuTypes.js";
import styles from "./AddFilterMenu.module.css";

const SECTION_ORDER: FilterCategory[] = [
  "ALL_PROPERTIES",
  "SINGLE_PROPERTY",
  "LINKED_OBJECT",
];

const SECTION_LABELS: Record<FilterCategory, string> = {
  ALL_PROPERTIES: "FILTER ON ALL PROPERTIES",
  SINGLE_PROPERTY: "FILTER ON A SINGLE PROPERTY",
  LINKED_OBJECT: "FILTER ON A LINKED OBJECT",
};

const KEYWORD_SEARCH_TEMPLATE: FilterTemplate = {
  id: "keyword-search",
  label: "Keyword Search",
  key: "$search",
  filterComponent: "CONTAINS_TEXT",
  icon: "search",
  allowMultiple: false,
  category: "ALL_PROPERTIES",
};

export function AddFilterMenu({
  templates,
  activeCounts,
  onSelectFilter,
  onClose,
}: AddFilterMenuProps): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<
    Record<FilterCategory, boolean>
  >({
    ALL_PROPERTIES: true,
    SINGLE_PROPERTY: true,
    LINKED_OBJECT: true,
  });

  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) return templates;
    const query = searchQuery.toLowerCase();
    return templates.filter(
      (t) =>
        t.label.toLowerCase().includes(query)
        || t.key.toLowerCase().includes(query),
    );
  }, [templates, searchQuery]);

  const groupedTemplates = useMemo(() => {
    const groups: Record<FilterCategory, FilterTemplate[]> = {
      ALL_PROPERTIES: [],
      SINGLE_PROPERTY: [],
      LINKED_OBJECT: [],
    };
    for (const template of filteredTemplates) {
      groups[template.category].push(template);
    }
    return groups;
  }, [filteredTemplates]);

  const toggleSection = (category: FilterCategory) => {
    setExpandedSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="filter-add-menu">
      <div className="filter-add-menu__search-container">
        <input
          type="text"
          className="filter-add-menu__search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button
            variant="minimal"
            size="small"
            intent="primary"
            onClick={() => setSearchQuery("")}
            style={{ marginRight: 8 }}
          >
            Clear
          </Button>
        )}
        <Button
          variant="minimal"
          size="small"
          icon="cross"
          aria-label="Close menu"
          onClick={onClose}
        />
      </div>

      <div className="filter-add-menu__content">
        {SECTION_ORDER.map((category) => {
          const items = groupedTemplates[category];
          const count = items.length;
          const isExpanded = expandedSections[category];

          if (searchQuery && count === 0 && category !== "ALL_PROPERTIES") {
            return null;
          }

          return (
            <div key={category}>
              <Button
                className="filter-add-menu__section-button"
                variant="minimal"
                fill
                alignText="left"
                onClick={() => toggleSection(category)}
                aria-expanded={isExpanded}
                endIcon={
                  <Icon
                    icon="chevron-down"
                    size={16}
                    className={styles.chevron}
                    data-expanded={isExpanded}
                  />
                }
              >
                <span className="filter-add-menu__section-label">
                  {SECTION_LABELS[category]}{" "}
                  {category !== "ALL_PROPERTIES" && `(${count})`}
                </span>
              </Button>

              <Collapse isOpen={isExpanded}>
                {category === "ALL_PROPERTIES" && (
                  <MenuItem
                    icon="search"
                    text="Keyword search"
                    labelElement={<Icon icon="small-plus" />}
                    onClick={() => onSelectFilter(KEYWORD_SEARCH_TEMPLATE)}
                  />
                )}
                {items.map((template) => {
                  const activeCount = activeCounts[template.key] || 0;
                  const isDisabled = activeCount > 0 && !template.allowMultiple;

                  return (
                    <MenuItem
                      key={template.id}
                      icon={typeof template.icon === "string"
                        ? template.icon as IconName
                        : undefined}
                      text={
                        <>
                          {typeof template.icon !== "string" && (
                            <span style={{ marginRight: 7 }}>
                              {template.icon}
                            </span>
                          )}
                          {template.label}
                        </>
                      }
                      labelElement={
                        <>
                          {activeCount > 0 && (
                            <Tag minimal round style={{ marginRight: 4 }}>
                              {activeCount}
                            </Tag>
                          )}
                          <Icon icon="small-plus" />
                        </>
                      }
                      disabled={isDisabled}
                      onClick={() => onSelectFilter(template)}
                    />
                  );
                })}
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
}
