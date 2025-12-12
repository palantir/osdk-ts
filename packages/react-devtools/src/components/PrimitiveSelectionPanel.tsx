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

import { Button, Collapse, Icon } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";
import type { DiscoveredPrimitives } from "../utils/ComponentPrimitiveDiscovery.js";
import styles from "./PrimitiveSelectionPanel.module.scss";

export type PrimitiveType =
  | "action"
  | "objectSet"
  | "object"
  | "link"
  | "query";

export interface SelectedPrimitive {
  type: PrimitiveType;
  data: unknown;
}

export interface PrimitiveSelectionPanelProps {
  primitives: DiscoveredPrimitives;
  onSelectPrimitive: (primitive: SelectedPrimitive) => void;
  onClose: () => void;
}

/**
 * Panel showing discovered OSDK usage from a selected component.
 * Allows user to select OSDK usage to create a mock for.
 */
export const PrimitiveSelectionPanel: React.FC<PrimitiveSelectionPanelProps> = (
  {
    primitives,
    onSelectPrimitive,
    onClose,
  },
) => {
  const [openSections, setOpenSections] = useState<Set<PrimitiveType>>(
    new Set(["action", "objectSet", "object", "link", "query"]),
  );

  const toggleSection = (section: PrimitiveType) => {
    const newSections = new Set(openSections);
    if (newSections.has(section)) {
      newSections.delete(section);
    } else {
      newSections.add(section);
    }
    setOpenSections(newSections);
  };

  const totalCount = primitives.actions.length
    + primitives.objectSets.length
    + primitives.objects.length
    + primitives.links.length
    + primitives.queries.length;

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Icon icon="cube" />
          <div>
            <div className={styles.headerTitle}>Discovered OSDK Usage</div>
            <div className={styles.headerSubtitle}>
              {primitives.componentName} · {totalCount}{" "}
              item{totalCount !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
        <Button
          variant="minimal"
          size="small"
          icon="cross"
          onClick={onClose}
          title="Close"
        />
      </div>

      <div className={styles.content}>
        {totalCount === 0 && (
          <div className={styles.emptyState}>
            <Icon icon="search" size={32} />
            <div>No OSDK usage found</div>
            <div className={styles.emptySubtext}>
              This component doesn't use any OSDK hooks
            </div>
          </div>
        )}

        {primitives.actions.length > 0 && (
          <PrimitiveSection
            title="Actions"
            icon="flash"
            count={primitives.actions.length}
            isOpen={openSections.has("action")}
            onToggle={() => toggleSection("action")}
          >
            {primitives.actions.map((action, index) => (
              <PrimitiveItem
                key={index}
                icon="flash"
                title={action.name}
                subtitle={action.location}
                onClick={() =>
                  onSelectPrimitive({ type: "action", data: action })}
              />
            ))}
          </PrimitiveSection>
        )}

        {primitives.objectSets.length > 0 && (
          <PrimitiveSection
            title="Object Sets"
            icon="th-list"
            count={primitives.objectSets.length}
            isOpen={openSections.has("objectSet")}
            onToggle={() => toggleSection("objectSet")}
          >
            {primitives.objectSets.map((objectSet, index) => (
              <PrimitiveItem
                key={index}
                icon="th-list"
                title={objectSet.type}
                subtitle={objectSet.location}
                metadata={[
                  objectSet.whereClause && "filtered",
                  objectSet.orderBy && "sorted",
                  objectSet.pageSize && `${objectSet.pageSize}/page`,
                ].filter(Boolean) as string[]}
                onClick={() =>
                  onSelectPrimitive({ type: "objectSet", data: objectSet })}
              />
            ))}
          </PrimitiveSection>
        )}

        {primitives.objects.length > 0 && (
          <PrimitiveSection
            title="Objects"
            icon="cube"
            count={primitives.objects.length}
            isOpen={openSections.has("object")}
            onToggle={() => toggleSection("object")}
          >
            {primitives.objects.map((object, index) => (
              <PrimitiveItem
                key={index}
                icon="cube"
                title={object.type}
                subtitle={object.location}
                metadata={object.primaryKey ? [object.primaryKey] : undefined}
                onClick={() =>
                  onSelectPrimitive({ type: "object", data: object })}
              />
            ))}
          </PrimitiveSection>
        )}

        {primitives.links.length > 0 && (
          <PrimitiveSection
            title="Links"
            icon="link"
            count={primitives.links.length}
            isOpen={openSections.has("link")}
            onToggle={() => toggleSection("link")}
          >
            {primitives.links.map((link, index) => (
              <PrimitiveItem
                key={index}
                icon="link"
                title={link.linkName}
                subtitle={link.location}
                metadata={[`from ${link.sourceType}`]}
                onClick={() => onSelectPrimitive({ type: "link", data: link })}
              />
            ))}
          </PrimitiveSection>
        )}

        {primitives.queries.length > 0 && (
          <PrimitiveSection
            title="Advanced Queries"
            icon="database"
            count={primitives.queries.length}
            isOpen={openSections.has("query")}
            onToggle={() => toggleSection("query")}
          >
            {primitives.queries.map((query, index) => (
              <PrimitiveItem
                key={index}
                icon="database"
                title={query.hookType}
                subtitle={query.location}
                metadata={[query.signature]}
                onClick={() =>
                  onSelectPrimitive({ type: "query", data: query })}
              />
            ))}
          </PrimitiveSection>
        )}
      </div>
    </div>
  );
};

interface PrimitiveSectionProps {
  title: string;
  icon: "flash" | "th-list" | "cube" | "link" | "database";
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const PrimitiveSection: React.FC<PrimitiveSectionProps> = ({
  title,
  icon,
  count,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className={styles.section}>
      <button
        type="button"
        className={styles.sectionHeader}
        onClick={onToggle}
      >
        <Icon icon={isOpen ? "chevron-down" : "chevron-right"} size={12} />
        <Icon icon={icon} />
        <span className={styles.sectionTitle}>{title}</span>
        <span className={styles.sectionCount}>{count}</span>
      </button>
      <Collapse isOpen={isOpen}>
        <div className={styles.sectionContent}>{children}</div>
      </Collapse>
    </div>
  );
};

interface PrimitiveItemProps {
  icon: "flash" | "th-list" | "cube" | "link" | "database";
  title: string;
  subtitle: string;
  metadata?: string[];
  onClick: () => void;
}

const PrimitiveItem: React.FC<PrimitiveItemProps> = ({
  icon,
  title,
  subtitle,
  metadata,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.item)}
      onClick={onClick}
    >
      <Icon icon={icon} size={14} />
      <div className={styles.itemContent}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemSubtitle}>{subtitle}</div>
        {metadata && metadata.length > 0 && (
          <div className={styles.itemMetadata}>
            {metadata.map((meta, index) => (
              <span key={index} className={styles.metadataTag}>
                {meta}
              </span>
            ))}
          </div>
        )}
      </div>
      <Icon icon="chevron-right" size={12} className={styles.itemChevron} />
    </button>
  );
};
