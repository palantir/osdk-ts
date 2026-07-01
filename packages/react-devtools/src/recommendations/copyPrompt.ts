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

const TASK =
  "TASK: Apply the suggested fix at the location above. Keep behavior identical except for the optimization. If the file/line is approximate, search for the matching hook call.";

/**
 * Builds an AI-ready prompt for a single performance recommendation. Sections
 * with no data are omitted cleanly so the output stays reproducible.
 */
export function buildCopyPrompt(rec: Recommendation): string {
  const sections: string[] = [
    INTRO,
    [
      `ISSUE: ${rec.title} (${rec.category}, severity: ${rec.level})`,
      `WHY IT MATTERS: ${rec.description}`,
      `EXPECTED IMPACT: ${rec.impact}`,
    ].join("\n"),
  ];

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

  sections.push(
    rec.code
      ? `SUGGESTED FIX:\n${rec.suggestion}\n\`\`\`tsx\n${rec.code}\n\`\`\``
      : `SUGGESTED FIX:\n${rec.suggestion}`
  );

  const guidance = rec.osdkGuidance ?? OSDK_GUIDANCE_BY_CATEGORY[rec.category];
  sections.push(`OSDK GUIDANCE:\n${guidance}`);

  sections.push(TASK);

  return sections.join("\n\n");
}

/**
 * Builds a single combined prompt covering several recommendations, ordered as
 * given. Each recommendation is numbered and the entries are separated by a
 * horizontal rule.
 */
export function buildCopyAllPrompt(recs: Recommendation[]): string {
  const preamble = `Here are ${recs.length} OSDK optimizations, ordered by priority:`;
  const items = recs.map((rec, i) => `${i + 1}. ${buildCopyPrompt(rec)}`);
  return `${preamble}\n\n${items.join("\n\n---\n\n")}`;
}
