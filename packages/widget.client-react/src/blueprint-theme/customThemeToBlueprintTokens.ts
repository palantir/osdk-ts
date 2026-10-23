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

import type { HostMessage } from "@osdk/widget.client";

type BlueprintTokenMap = Record<`--bp-${string}`, string>;

export function customThemeToBlueprintTokens(
  theme: HostMessage.ThemeV1,
): BlueprintTokenMap {
  const tokens: BlueprintTokenMap = {};
  switch (theme.borderRadius) {
    case "SQUARE":
      tokens["--bp-surface-border-radius"] = "0px";
      break;
    case "REGULAR":
      tokens["--bp-surface-border-radius"] = "4px";
      break;
    case "ROUNDED":
      tokens["--bp-surface-border-radius"] = "8px";
      break;
  }
  return tokens;
}
