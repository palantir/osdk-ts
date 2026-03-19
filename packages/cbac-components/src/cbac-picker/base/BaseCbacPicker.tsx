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
import type {
  CategoryMarkingGroup as CategoryMarkingGroupType,
  CbacBannerData,
  MarkingSelectionState,
  RequiredMarkingGroup,
} from "../types.js";
import { BaseCbacBanner } from "./BaseCbacBanner.js";
import styles from "./BaseCbacPicker.module.css";
import { CategoryMarkingGroup } from "./CategoryMarkingGroup.js";
import { InfoBanner } from "./InfoBanner.js";
import { ValidationWarning } from "./ValidationWarning.js";

export interface BaseCbacPickerProps {
  categories: CategoryMarkingGroupType[];
  markingStates: Map<string, MarkingSelectionState>;
  banner?: CbacBannerData;
  onMarkingToggle: (markingId: string) => void;
  onDismissBanner?: () => void;
  showInfoBanner?: boolean;
  requiredMarkingGroups?: ReadonlyArray<RequiredMarkingGroup>;
  isValid?: boolean;
  readOnly?: boolean;
  isLoading?: boolean;
  error?: Error;
  className?: string;
}

const DEFAULT_MARKING_STATE: MarkingSelectionState = "NONE";

export function BaseCbacPicker({
  categories,
  markingStates,
  banner,
  onMarkingToggle,
  onDismissBanner,
  showInfoBanner,
  requiredMarkingGroups,
  isValid,
  readOnly,
  isLoading,
  error,
  className,
}: BaseCbacPickerProps): React.ReactElement {
  const categoriesWithStates = React.useMemo(
    () =>
      categories.map((group) => ({
        category: group.category,
        markings: group.markings.map((marking) => ({
          id: marking.id,
          label: marking.name,
          selectionState: markingStates.get(marking.id)
            ?? DEFAULT_MARKING_STATE,
          disabled: readOnly,
        })),
      })),
    [categories, markingStates, readOnly],
  );

  const showInitialLoading = isLoading === true && categories.length === 0;
  const showValidationWarning = isValid === false
    && requiredMarkingGroups != null
    && requiredMarkingGroups.length > 0;

  return (
    <div className={classnames(styles.picker, className)}>
      {showInfoBanner === true && (
        <InfoBanner message="Implied markings are (in parentheses)." />
      )}
      {banner != null && (
        <BaseCbacBanner
          classificationString={banner.classificationString}
          textColor={banner.textColor}
          backgroundColors={banner.backgroundColors}
          onDismiss={onDismissBanner}
          className={styles.innerBanner}
        />
      )}
      {error != null
        ? (
          <div className={styles.statusMessage}>
            {error.message}
          </div>
        )
        : showInitialLoading
        ? (
          <div className={styles.statusMessage}>
            Loading...
          </div>
        )
        : (
          <div className={styles.categoriesContainer}>
            {categoriesWithStates.map((group) => (
              <CategoryMarkingGroup
                key={group.category.id}
                categoryName={group.category.name}
                markings={group.markings}
                onMarkingToggle={onMarkingToggle}
              />
            ))}
          </div>
        )}
      {showValidationWarning && (
        <ValidationWarning requiredMarkingGroups={requiredMarkingGroups} />
      )}
    </div>
  );
}
