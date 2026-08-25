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

import { Intent, Section, SectionCard, Tag } from "@blueprintjs/core";
import classNames from "classnames";
import React, { memo, useMemo } from "react";

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

    const contentClassName = classNames(
      columnCount === 2
        ? styles.osdkFormSectionGrid
        : styles.osdkFormSectionContent,
    );
    const collapseProps = useMemo(
      () => ({
        defaultIsOpen: !collapsedByDefault,
        // Keep registered form controls mounted so collapsing a section does
        // not discard React Hook Form state.
        keepChildrenMounted: true,
      }),
      [collapsedByDefault],
    );

    if (!showTitleBar) {
      return <SectionCard className={contentClassName}>{children}</SectionCard>;
    }

    return (
      <Section
        title={title}
        subtitle={description}
        collapsible={style !== "minimal"}
        collapseProps={collapseProps}
        compact={style === "minimal"}
        rightElement={
          errorCount > 0 ? (
            <Tag intent={Intent.DANGER} minimal={true} role="status">
              {errorCount === 1 ? "1 error" : `${errorCount} errors`}
            </Tag>
          ) : undefined
        }
      >
        <SectionCard className={contentClassName}>{children}</SectionCard>
      </Section>
    );
  },
);
