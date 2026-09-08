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

import { escapeJsDocText } from "../util/escapeJsDocText.js";

export function entityJsdoc(
  apiName: string,
  displayName: string | undefined,
  description: string | undefined,
): string {
  const lines: string[] = [];
  if (displayName != null && displayName !== apiName) {
    lines.push(
      ...escapeMetadata(displayName).map((line, index) =>
        index === 0 ? `Display name: ${line}` : line
      ),
    );
  }
  if (description != null) {
    lines.push(...escapeMetadata(description));
  }
  if (lines.length === 0) {
    return "";
  }
  return `/**\n${lines.map((line) => ` * ${line}`).join("\n")}\n */\n`;
}

function escapeMetadata(metadata: string): string[] {
  return escapeJsDocText(metadata)
    .split("\n")
    .map(line => line.startsWith("@") ? `&#64;${line.slice(1)}` : line);
}
