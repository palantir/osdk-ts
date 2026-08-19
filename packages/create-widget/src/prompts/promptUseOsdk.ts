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

import { consola } from "../consola.js";
import type { Template } from "../templates.js";

export async function promptUseOsdk({
  template,
  osdkPackage,
  osdkRegistryUrl,
  skipOsdk,
}: {
  template: Template;
  osdkPackage?: string;
  osdkRegistryUrl?: string;
  skipOsdk?: boolean;
}): Promise<boolean> {
  if (!template.supportsOsdk) {
    return false;
  }
  if (skipOsdk) {
    return false;
  }
  if (osdkPackage != null || osdkRegistryUrl != null) {
    return true;
  }

  const answer = (await consola.prompt(
    "Will you be using an OSDK in your widget set?",
    {
      type: "select",
      options: [
        { label: "Yes, I will be using an OSDK", value: "yes" },
        { label: "No (can be added later)", value: "no" },
      ],
    },
  )) as "yes" | "no";

  return answer === "yes";
}
