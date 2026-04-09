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

import { useCbacBanner } from "@osdk/react/experimental/admin";
import React from "react";
import { BaseCbacBanner } from "./base/BaseCbacBanner.js";
import { resolveBannerDisplay } from "./utils/cbacPickerUtils.js";

export interface CbacBannerProps {
  markingIds: string[];
  onClick?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export function CbacBanner({
  markingIds,
  onClick,
  onDismiss,
  className,
}: CbacBannerProps): React.ReactElement {
  const { banner } = useCbacBanner({ markingIds });
  const resolved = resolveBannerDisplay(banner);

  return (
    <BaseCbacBanner
      classificationString={resolved.classificationString}
      textColor={resolved.textColor}
      backgroundColors={resolved.backgroundColors}
      onClick={onClick}
      onDismiss={onDismiss}
      className={className}
    />
  );
}
