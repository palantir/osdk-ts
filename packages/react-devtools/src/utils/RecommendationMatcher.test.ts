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

import { describe, expect, it } from "vitest";
import type { Operation } from "../types/index.js";
import type { Recommendation } from "./PerformanceRecommendationEngine.js";
import {
  buildRecommendationMap,
  getRecommendationsForOperation,
} from "./RecommendationMatcher.js";

function makeRecommendation(id: string): Recommendation {
  return {
    id,
    level: "medium",
    category: "Cache",
    title: "Test",
    description: "Test desc",
    impact: "Some impact",
    effort: "Low",
    suggestion: "Fix it",
    dismissible: true,
  };
}

function makeOperation(signature: string): Operation {
  return {
    id: "op-1",
    type: "cache-hit",
    signature,
    timestamp: Date.now(),
  };
}

describe("RecommendationMatcher", () => {
  it("returns empty map for empty recommendations", () => {
    const map = buildRecommendationMap([]);
    expect(map.size).toBe(0);
  });

  it("maps waterfall-prefixed recommendations by stripped key", () => {
    const rec = makeRecommendation("waterfall-Employee:list");
    const map = buildRecommendationMap([rec]);

    expect(map.has("Employee:list")).toBe(true);
    expect(map.get("Employee:list")).toContain(rec);
  });

  it("maps field-prefixed recommendations by stripped key", () => {
    const rec = makeRecommendation("field-Employee:name");
    const map = buildRecommendationMap([rec]);

    expect(map.has("Employee:name")).toBe(true);
  });

  it("maps dup-prefixed recommendations by stripped key", () => {
    const rec = makeRecommendation("dup-Employee:list");
    const map = buildRecommendationMap([rec]);

    expect(map.has("Employee:list")).toBe(true);
  });

  it("ignores recommendations without recognized prefixes", () => {
    const rec = makeRecommendation("cache-low-hit-rate");
    const map = buildRecommendationMap([rec]);

    expect(map.size).toBe(0);
  });

  it("groups multiple recommendations under the same key", () => {
    const recs = [
      makeRecommendation("waterfall-Employee:list"),
      makeRecommendation("dup-Employee:list"),
    ];
    const map = buildRecommendationMap(recs);

    expect(map.get("Employee:list")?.length).toBe(2);
  });

  it("getRecommendationsForOperation returns matched recommendations", () => {
    const rec = makeRecommendation("waterfall-Employee:list");
    const map = buildRecommendationMap([rec]);
    const op = makeOperation("Employee:list");

    const result = getRecommendationsForOperation(op, map);
    expect(result).toContain(rec);
  });

  it("getRecommendationsForOperation returns empty array for no match", () => {
    const rec = makeRecommendation("waterfall-Employee:list");
    const map = buildRecommendationMap([rec]);
    const op = makeOperation("Department:list");

    const result = getRecommendationsForOperation(op, map);
    expect(result).toEqual([]);
  });
});
