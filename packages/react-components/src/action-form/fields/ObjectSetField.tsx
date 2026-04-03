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

import {
  getIconPaths,
  type IconName,
  IconSize,
  SVGIconContainer,
} from "@blueprintjs/icons";
import type {
  ObjectMetadata,
  ObjectSet,
  ObjectTypeDefinition,
} from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import { useObjectSet } from "@osdk/react/experimental";
import classnames from "classnames";
import React, { useMemo } from "react";
import type { ObjectSetFieldProps } from "../FormFieldApi.js";
import styles from "./ObjectSetField.module.css";

const ICON_SIZE = 16;
const PAGE_SIZE = 1;

export function ObjectSetField({
  id,
  value,
}: ObjectSetFieldProps<ObjectTypeDefinition>): React.ReactElement {
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
  objectSet: ObjectSet<ObjectTypeDefinition>;
}): React.ReactElement {
  const objectTypeDef = objectSet.$objectSetInternals.def;
  const { metadata } = useOsdkMetadata(objectTypeDef);
  const { totalCount, isLoading } = useObjectSet(objectSet, {
    pageSize: PAGE_SIZE,
  });

  const icon = metadata?.type === "object"
    ? (metadata as ObjectMetadata).icon
    : undefined;

  const label = metadata?.type === "object"
    ? (metadata as ObjectMetadata).pluralDisplayName
    : metadata?.displayName;

  const displayText = isLoading
    ? "Loading\u2026"
    : `${totalCount ?? "\u2013"} ${label ?? "objects"}`;

  return (
    <div id={id} className={styles.osdkObjectSetField}>
      {icon != null ? <BlueprintIcon icon={icon} /> : null}
      <span>{displayText}</span>
    </div>
  );
}

function BlueprintIcon({
  icon,
}: {
  icon: NonNullable<ObjectMetadata["icon"]>;
}): React.ReactElement {
  const paths = useMemo(
    () => getIconPaths(icon.name as IconName, IconSize.STANDARD),
    [icon.name],
  );

  return (
    <SVGIconContainer
      iconName={icon.name as IconName}
      size={ICON_SIZE}
      color={icon.color}
    >
      {paths.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)}
    </SVGIconContainer>
  );
}
