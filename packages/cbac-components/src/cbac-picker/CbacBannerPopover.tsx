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
  useCbacBanner,
  useMarkingCategories,
  useMarkings,
} from "@osdk/react/experimental/admin";
import React from "react";
import { BaseCbacBannerPopover } from "./base/BaseCbacBannerPopover.js";
import { CbacPickerDialog } from "./CbacPickerDialog.js";
import type { MaxClassificationConstraint } from "./types.js";
import {
  groupMarkingsByCategory,
  resolveBannerDisplay,
} from "./utils/cbacPickerUtils.js";

export interface CbacBannerPopoverProps {
  markingIds: string[];
  onChange: (markingIds: string[]) => void;
  maxClassificationConstraint?: MaxClassificationConstraint;
  className?: string;
}

export function CbacBannerPopover({
  markingIds,
  onChange,
  maxClassificationConstraint,
  className,
}: CbacBannerPopoverProps): React.ReactElement {
  const {
    banner,
    isLoading: bannerLoading,
    error: bannerError,
    refetch: refetchBanner,
  } = useCbacBanner({ markingIds });
  const {
    categories,
    isLoading: categoriesLoading,
    error: categoriesError,
    refetch: refetchCategories,
  } = useMarkingCategories();
  const {
    markings,
    isLoading: markingsLoading,
    error: markingsError,
    refetch: refetchMarkings,
  } = useMarkings();

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const isLoading = bannerLoading || categoriesLoading || markingsLoading;

  const error = bannerError ?? categoriesError ?? markingsError;

  const handleRetry = React.useCallback(() => {
    refetchBanner();
    refetchCategories();
    refetchMarkings();
  }, [refetchBanner, refetchCategories, refetchMarkings]);

  const appliedMarkings = React.useMemo(
    () => groupMarkingsByCategory(markingIds, categories, markings),
    [markingIds, categories, markings],
  );

  const resolved = resolveBannerDisplay(banner);

  const description =
    markingIds.length === 0
      ? "This data has no classification restrictions."
      : `This data is classified as: ${resolved.classificationString}`;

  const handleEditClick = React.useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleConfirm = React.useCallback(
    (newMarkingIds: string[]) => {
      onChange(newMarkingIds);
      setIsDialogOpen(false);
    },
    [onChange],
  );

  return (
    <>
      <BaseCbacBannerPopover
        classificationString={resolved.classificationString}
        textColor={resolved.textColor}
        backgroundColors={resolved.backgroundColors}
        appliedMarkings={appliedMarkings}
        onEditClick={handleEditClick}
        description={description}
        isLoading={isLoading}
        error={error}
        onRetry={handleRetry}
        className={className}
      />
      {isDialogOpen && (
        <CbacPickerDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onConfirm={handleConfirm}
          initialMarkingIds={markingIds}
          maxClassificationConstraint={maxClassificationConstraint}
        />
      )}
    </>
  );
}
