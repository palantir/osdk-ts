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

import classNames from "classnames";
import React from "react";

import styles from "./StatusTag.module.scss";

export type StatusVariant =
  | "cache"
  | "optimistic"
  | "fetching"
  | "error"
  | "healthy"
  | "warning"
  | "pending"
  | "neutral";

export interface StatusTagProps {
  variant: StatusVariant;
  children: React.ReactNode;
}

/**
 * A small status pill with a fixed palette shared across tabs: cache (orange),
 * optimistic (green), fetching (blue), error (red), healthy (green), plus
 * neutral/pending fallbacks.
 */
export const StatusTag: React.FC<StatusTagProps> = ({ variant, children }) => (
  <span className={classNames(styles.tag, styles[variant])}>{children}</span>
);
