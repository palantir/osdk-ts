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

import classnames from "classnames";
import React from "react";

import { WorkshopModuleSignIn } from "./components/WorkshopModuleSignIn.js";
import { getWorkshopModuleUrl } from "./getWorkshopModuleUrl.js";
import { useInitialTheme } from "./hooks/useInitialTheme.js";
import { useWorkshopAuth } from "./hooks/useWorkshopAuth.js";
import type { BaseWorkshopModuleProps } from "./WorkshopModuleApi.js";

import styles from "./BaseWorkshopModule.module.css";

export function BaseWorkshopModule({
  defaultTheme,
  enableAuthPopup = false,
  title = "Workshop module",
  className,
  style,
  ...props
}: BaseWorkshopModuleProps): React.ReactElement {
  const { theme, isLoading } = useInitialTheme(defaultTheme);
  const src = getWorkshopModuleUrl({ ...props, theme });
  const { status, signIn } = useWorkshopAuth(
    enableAuthPopup && !isLoading ? src : undefined,
  );
  const isReady = !isLoading && (!enableAuthPopup || status === "ready");

  return (
    <div className={classnames(styles.container, className)} style={style}>
      <iframe
        src={isReady ? src : undefined}
        hidden={!isReady}
        title={title}
        className={styles.iframe}
      />
      {enableAuthPopup && status !== "ready" && (
        <WorkshopModuleSignIn
          status={status}
          onSignIn={signIn}
          moduleUrl={src}
        />
      )}
    </div>
  );
}
