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

import type {
  InterfaceMetadata,
  ObjectMetadata,
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import { useOsdkObject } from "@osdk/react/experimental";
import * as React from "react";
import {
  BaseObjectView,
  type ObjectViewObject,
  type ObjectViewProperty,
} from "./BaseObjectView.js";
import type { ObjectViewProps } from "./ObjectViewApi.js";

/**
 * OSDK-aware object view. Fetches a single ontology object and its metadata, then renders
 * via {@link BaseObjectView}. See {@link ObjectViewProps} for input modes.
 *
 * MVP scope: only the `{ objectType, primaryKey }` input mode is implemented. The
 * `objectSet` and `object` modes throw at render time. Use `<BaseObjectView>` directly
 * if you already have a pre-fetched instance.
 */
export function ObjectView<Q extends ObjectOrInterfaceDefinition>(
  props: ObjectViewProps<Q>,
): React.ReactElement {
  if ("object" in props && props.object != null) {
    throw new Error(
      "ObjectView: `object` input mode is not yet implemented. Use <BaseObjectView> directly with a pre-fetched instance.",
    );
  }
  if ("objectSet" in props && props.objectSet != null) {
    throw new Error(
      "ObjectView: `objectSet` input mode is not yet implemented. Use the `{ objectType, primaryKey }` mode for now.",
    );
  }
  // At this point we know we're in the by-primary-key mode.
  const { objectType, primaryKey } = props as {
    objectType: Q;
    primaryKey: PrimaryKeyType<Q>;
  };
  return (
    <ObjectViewByPrimaryKey
      objectType={objectType}
      primaryKey={primaryKey}
      enableHeader={props.enableHeader}
      renderHeader={props.renderHeader}
      renderProperty={props.renderProperty}
      onObjectLoaded={props.onObjectLoaded}
      onObjectLoadError={props.onObjectLoadError}
      className={props.className}
    />
  );
}

interface ByPrimaryKeyProps<Q extends ObjectOrInterfaceDefinition> {
  objectType: Q;
  primaryKey: PrimaryKeyType<Q>;
  enableHeader?: boolean;
  renderHeader?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  ) => React.ReactNode;
  renderProperty?: (
    propertyKey: PropertyKeys<Q>,
    value: unknown,
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  ) => React.ReactNode;
  onObjectLoaded?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  ) => void;
  onObjectLoadError?: (error: Error) => void;
  className?: string;
}

function ObjectViewByPrimaryKey<Q extends ObjectOrInterfaceDefinition>(
  props: ByPrimaryKeyProps<Q>,
): React.ReactElement {
  const {
    objectType,
    primaryKey,
    enableHeader,
    renderHeader,
    renderProperty,
    onObjectLoaded,
    onObjectLoadError,
    className,
  } = props;

  const { object, isLoading, error } = useOsdkObject(objectType, primaryKey);
  const { metadata, loading: metadataLoading } = useOsdkMetadata(objectType);

  React.useEffect(() => {
    if (object != null && onObjectLoaded != null) {
      onObjectLoaded(
        object as Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
      );
    }
  }, [object, onObjectLoaded]);

  React.useEffect(() => {
    if (error != null && onObjectLoadError != null) {
      onObjectLoadError(error);
    }
  }, [error, onObjectLoadError]);

  const view: ObjectViewObject | undefined = React.useMemo(() => {
    if (object == null || metadata == null) return undefined;
    if (!isObjectMetadata(metadata)) return undefined;
    return toObjectViewObject(
      object as Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
      metadata,
    );
  }, [object, metadata]);

  const baseRenderHeader = React.useMemo(() => {
    if (renderHeader == null || object == null) return undefined;
    const captured = object as Osdk.Instance<
      Q,
      "$allBaseProperties",
      PropertyKeys<Q>
    >;
    return () => renderHeader(captured);
  }, [renderHeader, object]);

  const baseRenderProperty = React.useMemo(() => {
    if (renderProperty == null || object == null) return undefined;
    const captured = object as Osdk.Instance<
      Q,
      "$allBaseProperties",
      PropertyKeys<Q>
    >;
    return (apiName: string, value: unknown) =>
      renderProperty(apiName as PropertyKeys<Q>, value, captured);
  }, [renderProperty, object]);

  const notFound = !isLoading && !metadataLoading && error == null
    && object == null && metadata != null;

  return (
    <BaseObjectView
      object={view}
      enableHeader={enableHeader}
      renderHeader={baseRenderHeader}
      renderProperty={baseRenderProperty}
      isLoading={isLoading || metadataLoading}
      error={error}
      notFound={notFound}
      className={className}
    />
  );
}

function isObjectMetadata(
  metadata: ObjectMetadata | InterfaceMetadata,
): metadata is ObjectMetadata {
  return metadata.type === "object";
}

/**
 * Translate an OSDK instance and its type metadata into the primitive shape
 * {@link BaseObjectView} expects.
 */
function toObjectViewObject<Q extends ObjectOrInterfaceDefinition>(
  object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
  metadata: ObjectMetadata,
): ObjectViewObject {
  const titlePropApiName = String(metadata.titleProperty);
  const data = object as unknown as Record<string, unknown>;

  const properties: ObjectViewProperty[] = Object.entries(metadata.properties)
    .filter(([apiName]) => apiName !== titlePropApiName)
    .map(([apiName, prop]) => ({
      apiName,
      displayName: prop.displayName ?? apiName,
      value: data[apiName],
      dataType: typeof prop.type === "string" ? prop.type : "struct",
    }));

  const titleValue = data[titlePropApiName];
  const title = titleValue == null
    ? ""
    : typeof titleValue === "string"
    ? titleValue
    : String(titleValue);

  return {
    apiName: metadata.apiName,
    typeDisplayName: metadata.displayName,
    icon: metadata.icon != null
      ? {
        type: metadata.icon.type,
        name: metadata.icon.name,
        color: metadata.icon.color,
      }
      : undefined,
    title,
    properties,
  };
}
