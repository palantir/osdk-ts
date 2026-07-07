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

import type { Intent } from "@blueprintjs/core";

import type { RecommendationLevel } from "../utils/PerformanceRecommendationEngine.js";

/** Map a recommendation severity level to a Blueprint intent for display. */
export function levelToIntent(level: RecommendationLevel): Intent {
  switch (level) {
    case "critical": {
      return "danger";
    }
    case "high": {
      return "warning";
    }
    case "medium": {
      return "primary";
    }
    default: {
      return "none";
    }
  }
}
