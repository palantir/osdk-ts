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

import { Cross } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import { backgroundFromColors } from "../utils/cbacPickerUtils.js";
import styles from "./BaseCbacBanner.module.css";

export interface BaseCbacBannerProps {
  classificationString: string;
  textColor: string;
  backgroundColors: string[];
  onClick?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export function BaseCbacBanner({
  classificationString,
  textColor,
  backgroundColors,
  onClick,
  onDismiss,
  className,
}: BaseCbacBannerProps): React.ReactElement {
  const bannerStyle = React.useMemo((): React.CSSProperties => ({
    "--osdk-cbac-banner-bg": backgroundFromColors(backgroundColors),
    "--osdk-cbac-banner-color": textColor,
  } as React.CSSProperties), [textColor, backgroundColors]);

  const handleDismiss = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onDismiss?.();
    },
    [onDismiss],
  );

  const dismissButton = onDismiss != null
    ? (
      <button
        type="button"
        className={styles.dismissButton}
        onClick={handleDismiss}
        aria-label="Clear classification"
      >
        <Cross size={12} color="currentColor" />
      </button>
    )
    : null;

  if (onClick != null) {
    return (
      <div
        className={classnames(styles.bannerRow, className)}
        style={bannerStyle}
      >
        <button
          type="button"
          className={classnames(styles.banner, styles.clickable)}
          onClick={onClick}
          aria-label="Edit classification"
        >
          {classificationString}
        </button>
        {dismissButton}
      </div>
    );
  }

  return (
    <div
      className={classnames(styles.bannerRow, className)}
      style={bannerStyle}
    >
      <span className={styles.banner}>
        {classificationString}
      </span>
      {dismissButton}
    </div>
  );
}
