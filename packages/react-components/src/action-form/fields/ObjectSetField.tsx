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

import { type IconName, IconSize } from "@blueprintjs/icons";
import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { useObjectSet, useOsdkMetadata } from "@osdk/react";
import classnames from "classnames";
import React from "react";

import {
  BlueprintIcon,
  type Icon,
} from "../../base-components/icon/BlueprintIcon.js";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type {
  ObjectSetFieldLabels,
  ObjectSetFieldProps,
} from "../FormFieldApi.js";

import styles from "./ObjectSetField.module.css";

const DEFAULT_OBJECT_ICON: Icon = {
  name: "cube",
  color: "var(--osdk-object-set-icon-default-color)",
};
const ICON_SIZE = IconSize.STANDARD;
const DEFAULT_EMPTY_MESSAGE = "Object set is not defined";
const DEFAULT_OBJECT_SET_FIELD_LABELS: ObjectSetFieldLabels = {
  renderObjectSetCountLabel: defaultRenderObjectSetCountLabel,
  renderLoadErrorMessage: defaultRenderLoadErrorMessage,
};

export const ObjectSetField: <T extends ObjectTypeDefinition>(
  props: ObjectSetFieldProps<T>,
) => React.ReactElement = typedReactMemo(function ObjectSetFieldFn<
  T extends ObjectTypeDefinition,
>({
  value,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
  labels,
  disabled,
}: ObjectSetFieldProps<T>): React.ReactElement {
  if (value == null) {
    return (
      <div
        className={classnames(
          styles.osdkObjectSetField,
          styles.osdkObjectSetFieldEmpty,
        )}
        aria-disabled={disabled === true || undefined}
      >
        {emptyMessage}
      </div>
    );
  }

  return (
    <ObjectSetFieldContent {...labels} objectSet={value} disabled={disabled} />
  );
});

const ObjectSetFieldContent = React.memo(function ObjectSetFieldContentFn({
  objectSet,
  disabled,
  renderObjectSetCountLabel,
  renderLoadErrorMessage,
}: Partial<ObjectSetFieldLabels> & {
  objectSet: ObjectSet;
  disabled: boolean | undefined;
}): React.ReactElement {
  const objectTypeDef = objectSet.$objectSetInternals.def;
  const { metadata, loading: metadataLoading } = useOsdkMetadata(objectTypeDef);
  const {
    totalCount,
    data,
    isLoading: objectSetLoading,
    error: objectSetError,
  } = useObjectSet(objectSet, {
    // Fetching a page size of one is enough to get the totalCount
    pageSize: 1,
  });

  const hasMetadata = metadata != null;

  const icon = React.useMemo(
    () =>
      metadata != null && "icon" in metadata && metadata.icon != null
        ? toComponentIcon(metadata.icon)
        : DEFAULT_OBJECT_ICON,
    [metadata],
  );

  const displayName =
    totalCount === "1" || !hasMetadata || !("pluralDisplayName" in metadata)
      ? metadata?.displayName
      : metadata.pluralDisplayName;

  // Wait for metadata even if the count is already available, so we can
  // show the correct display name and avoid a flash of "objects" → "Employees".
  const showLoadingState = metadataLoading && !hasMetadata;

  return (
    <div
      className={styles.osdkObjectSetField}
      aria-disabled={disabled === true || undefined}
    >
      {showLoadingState ? (
        <>
          {OBJECT_SET_ICON_SKELETON}
          {OBJECT_SET_LABEL_SKELETON}
        </>
      ) : (
        <>
          <BlueprintIcon icon={icon} size={ICON_SIZE} />
          <ObjectSetLabel
            displayName={displayName}
            totalCount={totalCount}
            error={objectSetError}
            isLoading={objectSetLoading}
            renderObjectSetCountLabel={
              renderObjectSetCountLabel ??
              DEFAULT_OBJECT_SET_FIELD_LABELS.renderObjectSetCountLabel
            }
            renderLoadErrorMessage={
              renderLoadErrorMessage ??
              DEFAULT_OBJECT_SET_FIELD_LABELS.renderLoadErrorMessage
            }
          />
        </>
      )}
    </div>
  );
});

const ObjectSetLabel = React.memo(function ObjectSetLabelFn({
  displayName,
  totalCount,
  isLoading,
  error,
  renderObjectSetCountLabel,
  renderLoadErrorMessage,
}: ObjectSetFieldLabels & {
  displayName: string | undefined;
  totalCount: string | undefined;
  isLoading: boolean;
  error: Error | undefined;
}): React.ReactElement {
  const hasData = totalCount != null;
  const label = renderObjectSetCountLabel(totalCount, displayName);
  const showSkeleton = isLoading && !hasData;
  const showError = error != null && !hasData && !isLoading;

  return (
    <>
      {showSkeleton && OBJECT_SET_LABEL_SKELETON}
      {showError && (
        <span className={styles.osdkObjectSetFieldError} role="alert">
          {renderLoadErrorMessage(error.message)}
        </span>
      )}
      {!showSkeleton && !showError && <span>{label}</span>}
    </>
  );
});

const OBJECT_SET_ICON_SKELETON = (
  <SkeletonBar className={styles.osdkObjectSetIconSkeleton} />
);

const OBJECT_SET_LABEL_SKELETON = (
  <SkeletonBar className={styles.osdkObjectSetLabelSkeleton} />
);

function defaultRenderLoadErrorMessage(message: string): string {
  return `Failed to load: ${message}`;
}

function defaultRenderObjectSetCountLabel(
  count: string | undefined,
  displayName: string | undefined,
): string {
  return `${formatCount(count)} ${displayName ?? getFallbackObjectLabel(count)}`;
}

function formatCount(count: string | undefined): string {
  if (count == null) {
    return "\u2013"; // '–' symbol
  }
  try {
    return BigInt(count).toLocaleString();
  } catch {
    return count;
  }
}

function getFallbackObjectLabel(count: string | undefined): string {
  return count === "1" ? "object" : "objects";
}

function toComponentIcon(apiIcon: { name: string; color: string }): Icon {
  return { name: apiIcon.name as IconName, color: apiIcon.color };
}
