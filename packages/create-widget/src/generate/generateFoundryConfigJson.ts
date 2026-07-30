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

export function generateFoundryConfigJson({
  foundryUrl,
  widgetSet,
  repository,
  directory,
}: {
  foundryUrl: string;
  widgetSet: string;
  repository: string | undefined;
  directory: string;
}): string {
  return (
    JSON.stringify(
      {
        foundryUrl,
        widgetSet: {
          rid: widgetSet,
          repository,
          directory,
          autoVersion: {
            type: "package-json",
          },
        },
      },
      null,
      2,
    ) + "\n"
  );
}
