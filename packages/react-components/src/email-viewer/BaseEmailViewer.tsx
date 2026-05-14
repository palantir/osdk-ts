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
import React, { useMemo } from "react";
import styles from "./BaseEmailViewer.module.css";
import type { BaseEmailViewerProps, EmailAddress } from "./EmailViewerApi.js";

function formatAddress(address: EmailAddress): string {
  if (address.name) {
    return `${address.name} <${address.address}>`;
  }
  return address.address;
}

function formatAddressList(addresses: readonly EmailAddress[]): string {
  return addresses.map(formatAddress).join(", ");
}

export function BaseEmailViewer({
  email,
  className,
}: BaseEmailViewerProps): React.ReactElement {
  const rootClassName = classnames(styles.container, className);

  const bodyContent = useMemo(() => {
    if (email.html != null) {
      return (
        <div className={styles.bodyContainer}>
          {
            /*
             * Security: allow-same-origin is needed so CSS within the email HTML
             * resolves correctly. Scripts are blocked because allow-scripts is NOT
             * set. Never add allow-scripts here — the combination of
             * allow-same-origin + allow-scripts bypasses the sandbox entirely.
             *
             * Known limitation: because the iframe shares the parent origin,
             * email CSS can make outbound requests via url() (e.g. tracking
             * pixels in background-image) and can read CSS custom properties.
             * This is acceptable for an experimental component.
             */
          }
          <iframe
            className={styles.bodyIframe}
            sandbox="allow-same-origin"
            srcDoc={email.html}
            title="Email body"
          />
        </div>
      );
    }
    if (email.text != null) {
      return (
        <div className={styles.textBody}>
          {email.text}
        </div>
      );
    }
    return (
      <div className={styles.emptyBody}>
        No content
      </div>
    );
  }, [email.html, email.text]);

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        {email.subject != null && (
          <div className={styles.subject}>{email.subject}</div>
        )}
        {email.from != null && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>From:</span>
            <span className={styles.headerValue}>
              {formatAddress(email.from)}
            </span>
          </div>
        )}
        {email.to.length > 0 && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>To:</span>
            <span className={styles.headerValue}>
              {formatAddressList(email.to)}
            </span>
          </div>
        )}
        {email.cc.length > 0 && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>Cc:</span>
            <span className={styles.headerValue}>
              {formatAddressList(email.cc)}
            </span>
          </div>
        )}
        {email.date != null && (
          <div className={styles.headerRow}>
            <span className={styles.headerLabel}>Date:</span>
            <span className={styles.headerValue}>{email.date}</span>
          </div>
        )}
      </div>
      {bodyContent}
    </div>
  );
}
