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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import { useObjectSet } from "@osdk/react/experimental";
import classnames from "classnames";
import React from "react";
import {
  BlueprintIcon,
  type Icon,
} from "../../base-components/icon/BlueprintIcon.js";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import { Tooltip } from "../../base-components/tooltip/Tooltip.js";
import type { ObjectSetFieldProps } from "../FormFieldApi.js";
import styles from "./ObjectSetField.module.css";

const PAGE_SIZE = 1;
const CUBE_ICON: Icon = { name: "cube" };

export function ObjectSetField<T extends ObjectTypeDefinition>({
  id,
  value,
}: ObjectSetFieldProps<T>): React.ReactElement {
  if (value == null) {
    return (
      <div
        id={id}
        className={classnames(
          styles.osdkObjectSetField,
          styles.osdkObjectSetFieldEmpty,
        )}
      >
        No objects selected
      </div>
    );
  }

  return <ObjectSetFieldContent id={id} objectSet={value} />;
}

function ObjectSetFieldContent({
  id,
  objectSet,
}: {
  id?: string;
  objectSet: ObjectSet;
}): React.ReactElement {
  const objectTypeDef = objectSet.$objectSetInternals.def;
  const {
    metadata,
    loading: metadataLoading,
    error: metadataError,
  } = useOsdkMetadata(objectTypeDef);
  const {
    totalCount,
    isLoading: objectSetLoading,
    error: objectSetError,
  } = useObjectSet(objectSet, {
    pageSize: PAGE_SIZE,
  });

  if (metadataError != null) {
    return (
      <ObjectSetFieldWrapper id={id}>
        <ObjectSetIconError error={metadataError} />
        <ObjectSetLabel
          displayName={undefined}
          totalCount={totalCount}
          error={objectSetError}
          isLoading={objectSetLoading}
        />
      </ObjectSetFieldWrapper>
    );
  }

  if (metadataLoading) {
    return (
      <ObjectSetFieldWrapper id={id}>
        <SkeletonBar className={styles.osdkObjectSetIconSkeleton} />
        <ObjectSetLabelSkeleton />
      </ObjectSetFieldWrapper>
    );
  }

  return (
    <ObjectSetFieldWrapper id={id}>
      <BlueprintIcon
        icon={metadata != null && "icon" in metadata
          ? ((metadata.icon as Icon) ?? CUBE_ICON)
          : CUBE_ICON}
      />
      <ObjectSetLabel
        displayName={metadata != null && "pluralDisplayName" in metadata
          ? metadata.pluralDisplayName
          : metadata?.displayName}
        totalCount={totalCount}
        error={objectSetError}
        isLoading={objectSetLoading}
      />
    </ObjectSetFieldWrapper>
  );
}

function ObjectSetFieldWrapper({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className={styles.osdkObjectSetField}>
      {children}
    </div>
  );
}

function ObjectSetLabel({
  displayName,
  totalCount,
  isLoading,
  error,
}: {
  displayName: string | undefined;
  totalCount: string | undefined;
  isLoading: boolean;
  error: Error | undefined;
}): React.ReactElement {
  if (isLoading) {
    return <ObjectSetLabelSkeleton />;
  }

  if (error != null) {
    return (
      <span className={styles.osdkObjectSetFieldError} role="status">
        Failed to load object set
      </span>
    );
  }

  const label = displayName ?? "objects";

  return <span>{`${totalCount ?? "\u2013"} ${label}`}</span>;
}

function ObjectSetLabelSkeleton(): React.ReactElement {
  return <SkeletonBar className={styles.osdkObjectSetLabelSkeleton} />;
}

function ObjectSetIconError({ error }: { error: string }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger render={<span />}>
          <BlueprintIcon icon={CUBE_ICON} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4}>
            <Tooltip.Popup>
              {error}
              <Tooltip.Arrow />
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
