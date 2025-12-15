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

import type { Operation } from "../types/index.js";
import type { Recommendation } from "./PerformanceRecommendationEngine.js";

export type RecommendationMap = Map<string, Recommendation[]>;

/**
 * Creates a lookup map from operation signatures to relevant recommendations.
 */
export function buildRecommendationMap(
  recommendations: Recommendation[],
): RecommendationMap {
  const map = new Map<string, Recommendation[]>();

  for (const rec of recommendations) {
    const keys = extractMatchingKeys(rec);
    for (const key of keys) {
      const existing = map.get(key);
      if (existing) {
        existing.push(rec);
      } else {
        map.set(key, [rec]);
      }
    }
  }

  return map;
}

function extractMatchingKeys(rec: Recommendation): string[] {
  const keys: string[] = [];

  if (rec.id.startsWith("waterfall-")) {
    keys.push(rec.id.replace("waterfall-", ""));
  } else if (rec.id.startsWith("field-")) {
    keys.push(rec.id.replace("field-", ""));
  } else if (rec.id.startsWith("dup-")) {
    keys.push(rec.id.replace("dup-", ""));
  }

  return keys;
}

export function getRecommendationsForOperation(
  operation: Operation,
  recommendationMap: RecommendationMap,
): Recommendation[] {
  return recommendationMap.get(operation.signature) ?? [];
}
