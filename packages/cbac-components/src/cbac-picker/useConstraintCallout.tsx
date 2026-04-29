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

import { useCbacBanner } from "@osdk/react/platform-apis";
import React from "react";
import { MaxClassificationField } from "./base/MaxClassificationField.js";
import type { MaxClassificationConstraint } from "./types.js";
import { EMPTY_ARRAY, resolveBannerDisplay } from "./utils/cbacPickerUtils.js";

export function useConstraintCallout(
  maxClassificationConstraint: MaxClassificationConstraint | undefined,
): React.ReactNode {
  const constraintMarkingIds = maxClassificationConstraint?.markingIds
    ?? EMPTY_ARRAY;
  const { banner: constraintBanner } = useCbacBanner({
    markingIds: constraintMarkingIds,
    enabled: maxClassificationConstraint != null,
  });

  return React.useMemo(() => {
    if (maxClassificationConstraint == null) {
      return undefined;
    }
    const resolved = resolveBannerDisplay(constraintBanner);
    return (
      <MaxClassificationField
        classificationString={maxClassificationConstraint
          .bannerClassificationString}
        textColor={resolved.textColor}
        backgroundColors={resolved.backgroundColors}
        helperText={maxClassificationConstraint.helperText}
      />
    );
  }, [maxClassificationConstraint, constraintBanner]);
}
