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

import type { WorkshopVariableMap } from "@osdk/workshop-embed";
import classnames from "classnames";
import React from "react";

import { getWorkshopModuleUrl } from "./getWorkshopModuleUrl.js";
import { useInitialTheme } from "./hooks/useInitialTheme.js";
import { useWorkshopModuleMessaging } from "./hooks/useWorkshopModuleMessaging.js";
import type { BaseWorkshopModuleProps } from "./WorkshopModuleApi.js";

import styles from "./BaseWorkshopModule.module.css";

export function BaseWorkshopModule<
  TVariables extends WorkshopVariableMap = WorkshopVariableMap,
>({
  defaultTheme,
  title = "Workshop module",
  className,
  style,
  ...props
}: BaseWorkshopModuleProps<TVariables>): React.ReactElement {
  const { theme, isLoading } = useInitialTheme(defaultTheme);
  const src = getWorkshopModuleUrl({ ...props, theme });
  const iframeSrc = isLoading ? undefined : src;
  const onLoad = useWorkshopModuleMessaging<TVariables>(iframeSrc, props);

  return (
    <iframe
      src={iframeSrc}
      onLoad={onLoad}
      hidden={isLoading}
      title={title}
      className={classnames(styles.iframe, className)}
      style={style}
    />
  );
}
