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
  Error as ErrorIcon,
  InfoSign,
  Tick,
  WarningSign,
} from "@blueprintjs/icons";
import classNames from "classnames";
import * as React from "react";

import styles from "./Callout.module.css";

export type CalloutIntent = "error" | "warning" | "success" | "info";

export interface CalloutProps {
  /**
   * Visual intent that determines background, border, and text color.
   */
  intent: CalloutIntent;

  /**
   * Optional bold heading displayed above the message content.
   */
  title?: string;

  /**
   * Message content rendered inside the callout body.
   */
  children?: React.ReactNode;

  /**
   * Optional slot for action buttons (e.g. dismiss, retry) rendered
   * on the trailing edge.
   */
  actions?: React.ReactNode;

  /**
   * Override the default intent icon.
   */
  icon?: React.ComponentType<{ size?: number }>;

  className?: string;
}

const DEFAULT_ICONS: Record<
  CalloutIntent,
  React.ComponentType<{ size?: number }>
> = {
  error: ErrorIcon,
  warning: WarningSign,
  success: Tick,
  info: InfoSign,
};

const INTENT_STYLES: Record<CalloutIntent, string> = {
  error: styles.error,
  warning: styles.warning,
  success: styles.success,
  info: styles.info,
};

/**
 * A styled alert banner supporting four intent levels with an icon,
 * title, message body, and action slot.
 */
export const Callout: React.NamedExoticComponent<CalloutProps> = React.memo(
  function Callout({ intent, title, children, actions, icon, className }) {
    const IconComponent = icon ?? DEFAULT_ICONS[intent];

    return (
      <div
        aria-live="polite"
        className={classNames(styles.callout, INTENT_STYLES[intent], className)}
        role="alert"
      >
        {IconComponent != null && (
          <span className={styles.icon}>
            <IconComponent size={16} />
          </span>
        )}
        <div className={styles.body}>
          {title != null && <div className={styles.title}>{title}</div>}
          {children != null && <div className={styles.message}>{children}</div>}
        </div>
        {actions != null && <div className={styles.actions}>{actions}</div>}
      </div>
    );
  }
);
