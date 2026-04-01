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
import { ActionButton } from "@osdk/react-components/primitives";
import classnames from "classnames";
import React from "react";
import { backgroundFromColors } from "../utils/cbacPickerUtils.js";
import { BaseCbacBanner } from "./BaseCbacBanner.js";
import styles from "./BaseCbacBannerPopover.module.css";

export interface AppliedMarkingGroup {
  categoryName: string;
  markingNames: string[];
}

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

  const hasMarkings = appliedMarkings.length > 0;

  const pillStyle = React.useMemo((): React.CSSProperties => {
    const background = backgroundFromColors(backgroundColors);

    return {
      color: textColor,
      background,
    };
  }, [textColor, backgroundColors]);

  const showSkeleton = isLoading === true && appliedMarkings.length === 0;
  const hasWarnings = warnings !== undefined && warnings.length > 0;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
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
              {open ? <CaretUpIcon /> : <CaretDownIcon />}
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
              hasMarkings={hasMarkings}
              appliedMarkings={appliedMarkings}
              hasWarnings={hasWarnings}
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
  hasMarkings: boolean;
  appliedMarkings: AppliedMarkingGroup[];
  hasWarnings: boolean;
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
  hasMarkings,
  appliedMarkings,
  hasWarnings,
  warnings,
  handleEditClick,
}: PopoverContentProps): React.ReactElement {
  if (showSkeleton) {
    return (
      <div className={styles.skeletonContainer}>
        <div
          className={styles.skeleton}
          style={{ width: 120, height: 24 }}
        />
        <div
          className={styles.skeleton}
          style={{ width: "100%", height: 16 }}
        />
        <div
          className={styles.skeleton}
          style={{ width: "80%", height: 16 }}
        />
      </div>
    );
  }

  if (error !== undefined) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>
          Failed to load classification data
        </p>
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
                <WarningIcon />
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

function CaretDownIcon(): React.ReactElement {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CaretUpIcon(): React.ReactElement {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 7.5L6 4.5L9 7.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function WarningIcon(): React.ReactElement {
  return (
    <svg
      className={styles.warningIcon}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 1L13 13H1L7 1ZM7 3.5L2.5 12H11.5L7 3.5ZM6.5 7V9H7.5V7H6.5ZM6.5 10V11H7.5V10H6.5Z" />
    </svg>
  );
}
