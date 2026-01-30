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

import { Icon, InputGroup, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface SidebarProps {
  ontology: OntologyFullMetadata;
}

type CategoryType = "objects" | "actions" | "queries" | "interfaces";

interface NavItem {
  apiName: string;
  displayName: string;
  category: CategoryType;
}

export function Sidebar({ ontology }: SidebarProps): React.ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<CategoryType>>(
    new Set(["objects", "actions", "queries", "interfaces"])
  );

  // Extract items from ontology
  const navItems = useMemo((): NavItem[] => {
    const items: NavItem[] = [];

    // Object types
    for (const [apiName, meta] of Object.entries(ontology.objectTypes)) {
      items.push({
        apiName,
        displayName: meta.objectType?.displayName || apiName,
        category: "objects",
      });
    }

    // Action types
    for (const [apiName, meta] of Object.entries(ontology.actionTypes)) {
      items.push({
        apiName,
        displayName: meta.displayName || apiName,
        category: "actions",
      });
    }

    // Query types
    for (const [apiName, meta] of Object.entries(ontology.queryTypes)) {
      items.push({
        apiName,
        displayName: meta.displayName || apiName,
        category: "queries",
      });
    }

    // Interface types
    for (const [apiName, meta] of Object.entries(ontology.interfaceTypes)) {
      items.push({
        apiName,
        displayName: meta.displayName || apiName,
        category: "interfaces",
      });
    }

    return items;
  }, [ontology]);

  // Filter items by search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return navItems;
    }
    const query = searchQuery.toLowerCase();
    return navItems.filter(
      (item) =>
        item.displayName.toLowerCase().includes(query) ||
        item.apiName.toLowerCase().includes(query)
    );
  }, [navItems, searchQuery]);

  // Group items by category
  const groupedItems = useMemo(() => {
    const groups: Record<CategoryType, NavItem[]> = {
      objects: [],
      actions: [],
      queries: [],
      interfaces: [],
    };

    for (const item of filteredItems) {
      groups[item.category].push(item);
    }

    // Sort each group alphabetically by display name
    for (const category of Object.keys(groups) as CategoryType[]) {
      groups[category].sort((a, b) => a.displayName.localeCompare(b.displayName));
    }

    return groups;
  }, [filteredItems]);

  const toggleCategory = (category: CategoryType) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const handleItemClick = (category: CategoryType, apiName: string) => {
    navigate(`/${category}/${encodeURIComponent(apiName)}`);
  };

  const isItemActive = (category: CategoryType, apiName: string): boolean => {
    return location.pathname === `/${category}/${encodeURIComponent(apiName)}`;
  };

  const getCategoryIcon = (category: CategoryType): "cube" | "flash" | "function" | "diagram-tree" => {
    switch (category) {
      case "objects":
        return "cube";
      case "actions":
        return "flash";
      case "queries":
        return "function";
      case "interfaces":
        return "diagram-tree";
    }
  };

  const getCategoryLabel = (category: CategoryType): string => {
    switch (category) {
      case "objects":
        return "Object Types";
      case "actions":
        return "Action Types";
      case "queries":
        return "Query Types";
      case "interfaces":
        return "Interface Types";
    }
  };

  const renderCategory = (category: CategoryType) => {
    const items = groupedItems[category];
    const isExpanded = expandedCategories.has(category);

    if (items.length === 0 && searchQuery.trim()) {
      return null;
    }

    return (
      <React.Fragment key={category}>
        <MenuItem
          icon={<Icon icon={getCategoryIcon(category)} />}
          text={`${getCategoryLabel(category)} (${items.length})`}
          onClick={() => toggleCategory(category)}
          className="category-header"
          labelElement={
            <Icon icon={isExpanded ? "chevron-down" : "chevron-right"} />
          }
        />
        {isExpanded && items.map((item) => (
          <MenuItem
            key={item.apiName}
            text={item.displayName}
            onClick={() => handleItemClick(category, item.apiName)}
            active={isItemActive(category, item.apiName)}
            className="nav-item"
          />
        ))}
        <MenuDivider />
      </React.Fragment>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Ontology Explorer</h2>
      </div>
      <div className="sidebar-search">
        <InputGroup
          leftIcon="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="sidebar-content">
        <Menu className="sidebar-menu">
          {renderCategory("objects")}
          {renderCategory("actions")}
          {renderCategory("queries")}
          {renderCategory("interfaces")}
        </Menu>
      </div>
    </div>
  );
}
