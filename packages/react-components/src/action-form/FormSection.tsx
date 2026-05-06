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

import { Collapsible } from "@base-ui/react/collapsible";
import { CaretDown } from "@blueprintjs/icons";
import classNames from "classnames";
import React, { memo } from "react";
import type { FormSectionDefinition } from "./ActionFormApi.js";
import styles from "./FormSection.module.css";

export interface FormSectionProps {
  definition: FormSectionDefinition;
  errorCount: number;
  children: React.ReactNode;
}

export const FormSection: React.NamedExoticComponent<FormSectionProps> = memo(
  function FormSectionFn({
    definition,
    errorCount,
    children,
  }: FormSectionProps): React.ReactElement {
    const {
      title,
      description,
      collapsedByDefault = false,
      showTitleBar = true,
      columnCount = 1,
      style = "box",
    } = definition;

    const isMinimal = style === "minimal";

    if (isMinimal) {
      return (
        <MinimalSection title={title} description={description}>
          {children}
        </MinimalSection>
      );
    }

    const contentClassName = classNames(
      columnCount === 2
        ? styles.osdkFormSectionGrid
        : styles.osdkFormSectionContent,
      styles.osdkFormSectionDivider,
    );

    if (!showTitleBar) {
      return (
        <div className={styles.osdkFormSectionBox}>
          <div className={contentClassName}>{children}</div>
        </div>
      );
    }

    return (
      <Collapsible.Root
        // Inverted: Base UI uses "open" semantics, our API uses "collapsed" semantics
        defaultOpen={!collapsedByDefault}
        className={styles.osdkFormSectionBox}
      >
        <div className={styles.osdkFormSectionHeader}>
          <div className={styles.osdkFormSectionTitleArea}>
            <span className={styles.osdkFormSectionTitle}>{title}</span>
            {description != null && (
              <span className={styles.osdkFormSectionDescription}>
                {description}
              </span>
            )}
          </div>
          <Collapsible.Trigger
            className={styles.osdkFormSectionTrigger}
            aria-label={title}
          >
            {errorCount > 0 && (
              <span className={styles.osdkFormSectionErrorBadge} role="status">
                {errorCount === 1 ? "1 error" : `${errorCount} errors`}
              </span>
            )}
            <span className={styles.osdkFormSectionChevron}>
              <CaretDown size={16} />
            </span>
          </Collapsible.Trigger>
        </div>
        {/* keepMounted: RHF needs fields in the DOM even when collapsed for validation */}
        <Collapsible.Panel keepMounted={true}>
          <div className={contentClassName}>{children}</div>
        </Collapsible.Panel>
      </Collapsible.Root>
    );
  },
);

interface MinimalSectionProps {
  title: string;
  description: string | undefined;
  children: React.ReactNode;
}

const MinimalSection = memo(function MinimalSectionFn({
  title,
  description,
  children,
}: MinimalSectionProps): React.ReactElement {
  return (
    <div>
      <div className={styles.osdkFormSectionMinimalHeader}>
        <div className={styles.osdkFormSectionMinimalTitle}>{title}</div>
        {description != null && (
          <div className={styles.osdkFormSectionMinimalDescription}>
            {description}
          </div>
        )}
      </div>
      <div className={styles.osdkFormSectionMinimalContent}>{children}</div>
    </div>
  );
});
