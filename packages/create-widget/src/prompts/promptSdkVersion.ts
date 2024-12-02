/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import type { SdkVersion, Template } from "../templates.js";

export async function promptSdkVersion({
  sdkVersion,
  template,
}: {
  sdkVersion?: string;
  template: Template;
}): Promise<SdkVersion> {
  if (sdkVersion == null) {
    // If the SDK version is not provided, default to the earliest template version for backwards-compatibility
    return Object.keys(template.files)[0] as SdkVersion;
  }

  if (template.files[sdkVersion as SdkVersion] == null) {
    consola.fail(
      `The ${template.label} template does not support a "${sdkVersion}" SDK version.`,
    );
    sdkVersion = (await consola.prompt(
      `Please choose which version of the OSDK you'd like to use for the ${template.label} template:`,
      {
        type: "select",
        options: Object.keys(template.files)
          .reverse()
          .map((sdkVersion) => ({
            label: sdkVersion,
            value: sdkVersion,
          })),
      },
      // Types for "select" are wrong the value is returned rather than the option object
      // https://github.com/unjs/consola/pull/238
    )) as unknown as SdkVersion;
  }

  return sdkVersion as SdkVersion;
}
