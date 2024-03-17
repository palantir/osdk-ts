/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import { italic } from "../highlight.js";

export async function promptApplicationUrl(
  { skipApplicationUrl, applicationUrl }: {
    skipApplicationUrl?: boolean;
    applicationUrl?: string;
  },
): Promise<string | undefined> {
  if (skipApplicationUrl) {
    return undefined;
  }

  if (applicationUrl == null) {
    const skip = (await consola.prompt(
      `Do you know the URL your production application will be hosted on? This is required to create a production build of your application with the correct OAuth redirect URL.`,
      {
        type: "select",
        options: [
          { label: "Yes, let me fill it here", value: "yes" },
          {
            label:
              "No, I will set `VITE_FOUNDRY_REDIRECT_URL` variable in `.env.production` file later",
            value: "no",
          },
        ],
      },
      // Types for "select" are wrong the value is returned rather than the option object
      // https://github.com/unjs/consola/pull/238
    )) as unknown as "yes" | "no";

    if (skip === "no") {
      return undefined;
    }
  }

  while (applicationUrl == null || !/^https?:\/\//.test(applicationUrl)) {
    if (applicationUrl != null) {
      consola.fail("Please enter a valid application URL");
    }
    applicationUrl = await consola.prompt(
      `Enter the URL your production application will be hosted on:\n${
        italic(
          "(Example: https://myapp.example.palantirfoundry.com)",
        )
      }`,
      { type: "text" },
    );
  }
  return applicationUrl.replace(/\/$/, "");
}
