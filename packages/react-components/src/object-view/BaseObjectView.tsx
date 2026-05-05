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

import { Properties, Search, Star, WarningSign } from "@blueprintjs/icons";
import classNames from "classnames";
import * as React from "react";
import css from "./BaseObjectView.module.css";

/**
 * The visibility of a property as defined in the ontology metadata.
 */
export type ObjectViewPropertyVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

/**
 * An icon descriptor compatible with Blueprint's icon set.
 */
export interface ObjectViewIcon {
  type: "blueprint";
  name: string;
  color?: string;
}

/**
 * A single property to render. Hidden properties should be filtered out by the caller
 * before passing in.
 */
export interface ObjectViewProperty {
  /** The property's API name, used as a stable key. */
  apiName: string;
  /** Human-readable label shown next to the value. */
  displayName: string;
  /** The current value. The Base renders primitives via the default value renderer. */
  value: unknown;
  /** Wire data type (e.g. `string`, `double`, `boolean`). Used by the default value renderer. */
  dataType: string;
  /** @default "NORMAL" */
  visibility?: ObjectViewPropertyVisibility;
}

/**
 * Primitive object data passed to {@link BaseObjectView}. The OSDK wrapper translates
 * `Osdk.Instance` and `ObjectMetadata` into this shape.
 */
export interface ObjectViewObject {
  /** Object type API name, e.g. `"Supplier"`. */
  apiName: string;
  /** Human-readable type label, e.g. `"Supplier"`. */
  typeDisplayName: string;
  /** Optional Blueprint icon for the object type. */
  icon?: ObjectViewIcon;
  /** The value of the object's title property, shown as the header title. */
  title: string;
  /** Properties to render. Order is the display order. */
  properties: ObjectViewProperty[];
}

export interface BaseObjectViewProps {
  /**
   * The object to display. If undefined, the component shows a loading or empty state
   * based on `isLoading`, `error`, and `notFound`.
   */
  object?: ObjectViewObject;

  /**
   * Whether the object header (icon, title, type) is shown.
   * @default true
   */
  enableHeader?: boolean;

  /**
   * Override the default header rendering. Receives the object;
   * return a `ReactNode` to replace the header entirely.
   */
  renderHeader?: (object: ObjectViewObject) => React.ReactNode;

  /**
   * Override the rendering of an individual property's value. If undefined for a given
   * property, the default type-aware renderer is used.
   */
  renderProperty?: (
    propertyApiName: string,
    value: unknown,
    object: ObjectViewObject,
  ) => React.ReactNode;

  /** Set when the object is being fetched. */
  isLoading?: boolean;

  /** Set when fetching the object failed. */
  error?: Error;

  /** Set when the fetch succeeded but no object was returned. */
  notFound?: boolean;

  className?: string;
}

/**
 * OSDK-agnostic object view. Renders an object as a header + Prominent section + Properties
 * section. Loading, error, and not-found states are rendered inline.
 *
 * For an OSDK-aware version that fetches the object and metadata for you, see `ObjectView`.
 */
export const BaseObjectView: React.FC<BaseObjectViewProps> = React.memo(
  function BaseObjectView(props: BaseObjectViewProps) {
    const {
      object,
      enableHeader = true,
      renderHeader,
      renderProperty,
      isLoading,
      error,
      notFound,
      className,
    } = props;

    if (error != null) {
      return (
        <div
          className={classNames(css.container, css.stateContainer, className)}
        >
          <div className={css.stateMessage}>
            <WarningSign size={32} />
            <div className={css.stateTitle}>Failed to load object</div>
            <div className={css.stateDescription}>{error.message}</div>
          </div>
        </div>
      );
    }

    if (notFound === true || (object == null && isLoading !== true)) {
      return (
        <div
          className={classNames(css.container, css.stateContainer, className)}
        >
          <div className={css.stateMessage}>
            <Search size={32} />
            <div className={css.stateTitle}>Object not found</div>
          </div>
        </div>
      );
    }

    if (object == null) {
      return (
        <div
          className={classNames(css.container, css.stateContainer, className)}
        >
          <div
            className={css.spinner}
            role="progressbar"
            aria-label="Loading"
          />
        </div>
      );
    }

    const visibleProperties = object.properties.filter(
      (p) => p.visibility !== "HIDDEN",
    );
    const prominentProperties = visibleProperties.filter(
      (p) => p.visibility === "PROMINENT",
    );
    const normalProperties = visibleProperties.filter(
      (p) => p.visibility !== "PROMINENT",
    );

    return (
      <div className={classNames(css.container, className)}>
        {enableHeader && (
          renderHeader != null
            ? renderHeader(object)
            : <DefaultHeader object={object} />
        )}
        {prominentProperties.length > 0 && (
          <ProminentSection
            object={object}
            properties={prominentProperties}
            renderProperty={renderProperty}
          />
        )}
        {normalProperties.length > 0 && (
          <PropertiesSection
            object={object}
            properties={normalProperties}
            renderProperty={renderProperty}
          />
        )}
      </div>
    );
  },
);

interface DefaultHeaderProps {
  object: ObjectViewObject;
}

const DefaultHeader: React.FC<DefaultHeaderProps> = function DefaultHeader({
  object,
}) {
  const initial = object.title?.trim()?.[0]?.toUpperCase()
    ?? object.typeDisplayName?.trim()?.[0]?.toUpperCase()
    ?? "?";
  return (
    <div className={css.header}>
      <div
        className={css.headerIcon}
        style={object.icon?.color != null
          ? { color: object.icon.color }
          : undefined}
      >
        {initial}
      </div>
      <div className={css.headerText}>
        <div className={css.headerTitle}>{object.title}</div>
        <div className={css.headerSubtitle}>{object.typeDisplayName}</div>
      </div>
    </div>
  );
};

interface SectionProps {
  object: ObjectViewObject;
  properties: ObjectViewProperty[];
  renderProperty: BaseObjectViewProps["renderProperty"];
}

const ProminentSection: React.FC<SectionProps> = function ProminentSection(
  { object, properties, renderProperty },
) {
  return (
    <section className={css.section} aria-label="Prominent">
      <div className={css.sectionTitle}>
        <Star size={14} />
        <span>Prominent</span>
      </div>
      <div className={css.prominentGrid}>
        {properties.map((p) => (
          <div className={css.prominentItem} key={p.apiName}>
            <div className={css.prominentValue}>
              {renderProperty != null
                ? renderProperty(p.apiName, p.value, object)
                : defaultRenderValue(p.value, p.dataType)}
            </div>
            <div className={css.prominentLabel}>{p.displayName}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PropertiesSection: React.FC<SectionProps> = function PropertiesSection(
  { object, properties, renderProperty },
) {
  return (
    <section className={css.section} aria-label="Properties">
      <div className={css.sectionTitle}>
        <Properties size={14} />
        <span>Properties</span>
      </div>
      <div className={css.propertiesGrid}>
        {properties.map((p) => (
          <React.Fragment key={p.apiName}>
            <div className={css.propertyLabel}>{p.displayName}</div>
            <div className={css.propertyValue}>
              {renderProperty != null
                ? renderProperty(p.apiName, p.value, object)
                : defaultRenderValue(p.value, p.dataType)}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

/**
 * Default value renderer. Handles primitives, arrays, dates, and falls back to
 * `JSON.stringify` for objects.
 */
function defaultRenderValue(
  value: unknown,
  dataType: string,
): React.ReactNode {
  if (value == null) {
    return <span className={css.emptyValue}>—</span>;
  }
  if (Array.isArray(value)) {
    return value.map((v, i) => (
      <span key={i}>
        {i > 0 && ", "}
        {defaultRenderValue(v, dataType)}
      </span>
    ));
  }
  if (
    dataType === "datetime"
    || dataType === "timestamp"
    || dataType === "date"
  ) {
    if (typeof value === "string" || typeof value === "number") {
      const d = new Date(value);
      if (!Number.isNaN(d.getTime())) {
        return d.toLocaleString();
      }
    }
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  return JSON.stringify(value);
}
