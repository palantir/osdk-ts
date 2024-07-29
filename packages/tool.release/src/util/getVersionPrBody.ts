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

/*
 * This code is heavily adapted from https://github.com/changesets/action/ which
 * is licensed under the MIT License according to its package.json. However, it
 * does not have a license file in the repository nor any headers on its source.
 *
 * Below is a modified version of the MIT license.
 */

/*
MIT License

Copyright (c) 2024 authors of https://github.com/changesets/action/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import type { PreState } from "@changesets/types";

type GetMessageOptions = {
  hasPublishScript: boolean;
  branch: string;
  changedPackagesInfo: {
    highestLevel: number;
    private: boolean;
    content: string;
    header: string;
  }[];
  prBodyMaxCharacters: number;
  preState?: PreState;
};

export async function getVersionPrBody({
  hasPublishScript,
  preState,
  changedPackagesInfo,
  prBodyMaxCharacters,
  branch,
}: GetMessageOptions): Promise<string> {
  const messageHeader =
    `This PR was opened by automation. When you're ready to do a release, you can merge this and publish to npm yourself.
     If you're not ready to do a release yet, that's fine, whenever you re-run the release script in ${branch}, this PR will be updated.
`;
  const messagePreState = preState && preState.mode === "pre"
    ? `⚠️⚠️⚠️⚠️⚠️⚠️

\`${branch}\` is currently in **pre mode** so this branch has prereleases rather than normal releases. If you want to exit prereleases, run \`changeset pre exit\` on \`${branch}\`.

⚠️⚠️⚠️⚠️⚠️⚠️
`
    : "";
  const messageReleasesHeading = `# Releases`;

  let fullMessage = [
    messageHeader,
    messagePreState,
    messageReleasesHeading,
    ...changedPackagesInfo.map((info) => `${info.header}\n\n${info.content}`),
  ].join("\n");

  // Check that the message does not exceed the size limit.
  // If not, omit the changelog entries of each package.
  if (fullMessage.length > prBodyMaxCharacters) {
    fullMessage = [
      messageHeader,
      messagePreState,
      messageReleasesHeading,
      `\n> The changelog information of each package has been omitted from this message, as the content exceeds the size limit.\n`,
      ...changedPackagesInfo.map((info) => `${info.header}\n\n`),
    ].join("\n");
  }

  // Check (again) that the message is within the size limit.
  // If not, omit all release content this time.
  if (fullMessage.length > prBodyMaxCharacters) {
    fullMessage = [
      messageHeader,
      messagePreState,
      messageReleasesHeading,
      `\n> All release information have been omitted from this message, as the content exceeds the size limit.`,
    ].join("\n");
  }

  return fullMessage;
}
