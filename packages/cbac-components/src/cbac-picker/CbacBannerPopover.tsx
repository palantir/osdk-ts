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
import type { AppliedMarkingGroup } from "./base/BaseCbacBannerPopover.js";
import { BaseCbacBannerPopover } from "./base/BaseCbacBannerPopover.js";
import { CbacPickerDialog } from "./CbacPickerDialog.js";
import { resolveBannerDisplay } from "./utils/cbacPickerUtils.js";

const EMPTY_APPLIED_MARKINGS: AppliedMarkingGroup[] = [];

export interface CbacBannerPopoverProps {
  markingIds: string[];
  onChange: (markingIds: string[]) => void;
  className?: string;
}

export function CbacBannerPopover({
  markingIds,
  onChange,
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

  const appliedMarkings = React.useMemo((): AppliedMarkingGroup[] => {
    if (
      markingIds.length === 0 || categories === undefined
      || markings === undefined
    ) {
      return EMPTY_APPLIED_MARKINGS;
    }

    const markingIdSet = new Set(markingIds);
    const categoryMap = new Map<string, string>();
    for (const cat of categories) {
      categoryMap.set(cat.id, cat.name);
    }

    const grouped = new Map<string, string[]>();
    for (const marking of markings) {
      if (markingIdSet.has(marking.id)) {
        const categoryName = categoryMap.get(marking.categoryId)
          ?? marking.categoryId;
        const existing = grouped.get(categoryName);
        if (existing !== undefined) {
          existing.push(marking.name);
        } else {
          grouped.set(categoryName, [marking.name]);
        }
      }
    }

    const result: AppliedMarkingGroup[] = [];
    for (const [categoryName, markingNames] of grouped) {
      result.push({ categoryName, markingNames });
    }
    return result;
  }, [markingIds, categories, markings]);

  const resolved = resolveBannerDisplay(banner);

  const description = React.useMemo((): string => {
    if (markingIds.length === 0) {
      return "This data has no classification restrictions.";
    }
    return `This data is classified as: ${resolved.classificationString}`;
  }, [markingIds.length, resolved.classificationString]);

  const handleEditClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
  };

  const handleConfirm = (newMarkingIds: string[]) => {
    onChange(newMarkingIds);
    setIsDialogOpen(false);
  };

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
          onOpenChange={handleDialogOpenChange}
          onConfirm={handleConfirm}
          initialMarkingIds={markingIds}
        />
      )}
    </>
  );
}
