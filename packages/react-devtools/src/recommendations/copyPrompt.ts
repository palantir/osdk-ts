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

import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";
import { OSDK_GUIDANCE_BY_CATEGORY } from "../utils/PerformanceRecommendationEngine.js";

const INTRO =
  "You are helping optimize an app built with the OSDK React Toolkit (@osdk/react).";

/**
 * Builds an AI-ready prompt for a single performance recommendation. Sections
 * with no data are omitted cleanly so the output stays reproducible.
 */
export function buildCopyPrompt(rec: Recommendation): string {
  const sections: string[] = [INTRO];

  // Only fields that carry data go into the prompt — an absent field is dropped
  // rather than rendered as the literal string "undefined", which is noise that
  // misleads the model instead of helping it.
  const issue: string[] = [
    `ISSUE: ${rec.title} (${rec.category}, severity: ${rec.level})`,
  ];
  if (rec.description) {
    issue.push(`WHY IT MATTERS: ${rec.description}`);
  }
  if (rec.impact) {
    issue.push(`EXPECTED IMPACT: ${rec.impact}`);
  }
  sections.push(issue.join("\n"));

  if (rec.filePath) {
    const location =
      rec.lineNumber != null
        ? `${rec.filePath}:${rec.lineNumber}`
        : rec.filePath;
    sections.push(`LOCATION: ${location}`);
  }

  if (rec.currentCode) {
    sections.push(`CURRENT CODE:\n\`\`\`tsx\n${rec.currentCode}\n\`\`\``);
  }

  if (rec.suggestion || rec.code) {
    const fix: string[] = [];
    if (rec.suggestion) {
      fix.push(rec.suggestion);
    }
    if (rec.code) {
      fix.push(`\`\`\`tsx\n${rec.code}\n\`\`\``);
    }
    sections.push(`SUGGESTED FIX:\n${fix.join("\n")}`);
  }

  const guidance = rec.osdkGuidance ?? OSDK_GUIDANCE_BY_CATEGORY[rec.category];
  if (guidance) {
    sections.push(`OSDK GUIDANCE:\n${guidance}`);
  }

  // The location is only known when a binding could be resolved. Without it,
  // lean on the issue text, which names the component, query, and object type,
  // rather than pointing at a location that was never included.
  const task =
    rec.filePath != null
      ? "TASK: Apply the suggested fix at the location above, keeping behavior identical except for the optimization."
      : "TASK: Apply the suggested fix. Use the issue above — it names the component, query, and object type involved — to find the code it refers to, keeping behavior identical except for the optimization.";
  sections.push(task);

  return sections.join("\n\n");
}

/**
 * Builds a single combined prompt covering several recommendations, ordered as
 * given. Each recommendation is numbered and the entries are separated by a
 * horizontal rule.
 */
export function buildCopyAllPrompt(recs: Recommendation[]): string {
  // Recs arrive already sorted by priority from PerformanceRecommendationEngine,
  // so this keeps the caller's order rather than re-sorting here.
  const preamble = `Here are ${recs.length} OSDK optimizations, ordered by priority:`;
  const items = recs.map((rec, i) => `${i + 1}. ${buildCopyPrompt(rec)}`);
  return `${preamble}\n\n${items.join("\n\n---\n\n")}`;
}
