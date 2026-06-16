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

import { Popover } from "@base-ui/react/popover";
import { CaretDown, CaretUp, WarningSign } from "@blueprintjs/icons";
import { ActionButton, SkeletonBar } from "@osdk/react-components/primitives";
import classnames from "classnames";
import React from "react";
import {
  type AppliedMarkingGroup,
  backgroundFromColors,
} from "../utils/cbacPickerUtils.js";
export type { AppliedMarkingGroup } from "../utils/cbacPickerUtils.js";
import { formatCbacError } from "../utils/errorMessages.js";
import { BaseCbacBanner } from "./BaseCbacBanner.js";
import styles from "./BaseCbacBannerPopover.module.css";

export interface BaseCbacBannerPopoverProps {
  classificationString: string;
  textColor: string;
  backgroundColors: string[];
  appliedMarkings: AppliedMarkingGroup[];
  onEditClick: () => void;
  description?: string;
  isLoading?: boolean;
  error?: Error;
  onRetry?: () => void;
  onDismiss?: () => void;
  warnings?: string[];
  className?: string;
}

export function BaseCbacBannerPopover({
  classificationString,
  textColor,
  backgroundColors,
  appliedMarkings,
  onEditClick,
  description,
  isLoading,
  error,
  onRetry,
  onDismiss,
  warnings,
  className,
}: BaseCbacBannerPopoverProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  const handleEditClick = React.useCallback(() => {
    setOpen(false);
    onEditClick();
  }, [onEditClick]);

  const pillStyle = React.useMemo((): React.CSSProperties => ({
    color: textColor,
    background: backgroundFromColors(backgroundColors),
  }), [textColor, backgroundColors]);

  const showSkeleton = isLoading === true && appliedMarkings.length === 0;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        nativeButton={false}
        render={
          <div className={styles.bannerTriggerWrapper}>
            <BaseCbacBanner
              classificationString={classificationString}
              textColor={textColor}
              backgroundColors={backgroundColors}
              onDismiss={onDismiss}
              className={className}
            />
            <span
              className={classnames(
                styles.caretIcon,
                open && styles.caretIconVisible,
              )}
            >
              {open ? <CaretUp size={12} /> : <CaretDown size={12} />}
            </span>
          </div>
        }
      />
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="center">
          <Popover.Popup className={styles.popover}>
            <PopoverContent
              showSkeleton={showSkeleton}
              error={error}
              onRetry={onRetry}
              pillStyle={pillStyle}
              classificationString={classificationString}
              description={description}
              appliedMarkings={appliedMarkings}
              warnings={warnings}
              handleEditClick={handleEditClick}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

interface PopoverContentProps {
  showSkeleton: boolean;
  error: Error | undefined;
  onRetry: (() => void) | undefined;
  pillStyle: React.CSSProperties;
  classificationString: string;
  description: string | undefined;
  appliedMarkings: AppliedMarkingGroup[];
  warnings: string[] | undefined;
  handleEditClick: () => void;
}

const PopoverContent = React.memo(function PopoverContent({
  showSkeleton,
  error,
  onRetry,
  pillStyle,
  classificationString,
  description,
  appliedMarkings,
  warnings,
  handleEditClick,
}: PopoverContentProps): React.ReactElement {
  const hasMarkings = appliedMarkings.length > 0;
  const hasWarnings = warnings !== undefined && warnings.length > 0;
  if (showSkeleton) {
    return <PopoverSkeleton />;
  }

  if (error !== undefined) {
    const errorMessage = formatCbacError(error);
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>
          {errorMessage.title}
        </p>
        {errorMessage.remediation && (
          <p className={styles.errorRemediation}>
            {errorMessage.remediation}
          </p>
        )}
        {onRetry !== undefined && (
          <ActionButton variant="secondary" onClick={onRetry}>
            Retry
          </ActionButton>
        )}
      </div>
    );
  }

  return (
    <>
      <div
        className={styles.pill}
        style={pillStyle}
        title={classificationString}
      >
        {classificationString}
      </div>

      {description !== undefined && (
        <p className={styles.description}>{description}</p>
      )}

      <p className={styles.sectionLabel}>Applied markings</p>

      {hasMarkings
        ? (
          appliedMarkings.map((group) => (
            <div key={group.categoryName} className={styles.markingGroup}>
              <p className={styles.markingCategoryName}>
                {group.categoryName}
              </p>
              {group.markingNames.map((name, i) => (
                <p key={`${name}-${i}`} className={styles.markingName}>
                  {name}
                </p>
              ))}
            </div>
          ))
        )
        : <p className={styles.noMarkings}>No markings applied</p>}

      {hasWarnings && warnings !== undefined && (
        <>
          <hr className={styles.divider} />
          <div className={styles.warningsSection}>
            <p className={styles.warningsHeader}>Warnings and Notices</p>
            {warnings.map((warning, i) => (
              <div key={`warning-${i}`} className={styles.warningCallout}>
                <WarningSign className={styles.warningIcon} size={14} />
                <p className={styles.warningText}>{warning}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <hr className={styles.divider} />

      <ActionButton
        variant="primary"
        className={styles.editButton}
        onClick={handleEditClick}
      >
        {hasMarkings ? "Edit classification" : "Set classification"}
      </ActionButton>
    </>
  );
});

function PopoverSkeleton(): React.ReactElement {
  return (
    <div className={styles.skeletonContainer}>
      <SkeletonBar className={styles.skeletonPill} />
      <SkeletonBar className={styles.skeletonLine} />
      <SkeletonBar className={styles.skeletonLineNarrow} />
    </div>
  );
}
