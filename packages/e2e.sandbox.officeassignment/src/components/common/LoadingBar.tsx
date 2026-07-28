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

import React from "react";

import styles from "./common.module.css";

export interface LoadingBarProps {
  active: boolean;
}

/** Thin indeterminate loading bar shown while data is (re)loading. */
export function LoadingBar(props: LoadingBarProps): React.JSX.Element {
  return (
    <div className={styles.loadingTrack} aria-hidden={!props.active}>
      {props.active ? <div className={styles.loadingBar} /> : null}
    </div>
  );
}
