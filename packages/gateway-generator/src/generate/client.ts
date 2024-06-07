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

import type { Project, SourceFile } from "ts-morph";

export function generateRequestType(
  outputDir: string,
  project: Project,
  addCopyright: (sf: SourceFile) => void,
): void {
  const directory = project.createDirectory(`${outputDir}/request`);
  const sourceFile = directory.createSourceFile(`OpenApiRequest.ts`);

  sourceFile.addTypeAlias({
    name: "OpenApiRequest",
    isExported: true,
    typeParameters: [
      {
        name: "TExpectedResponse",
      },
      {
        name: "TResponse",
        default: "TExpectedResponse",
      },
    ],
    type: `(
            method: string,
            endpointPath: string,
            data?: any,
            queryArguments?: { [paramName: string]: any; },
            headers?: { [header: string]: string | number | boolean | undefined | null; },
            requestMediaType?: string,
            responseMediaType?: string
        ) => Promise<TResponse>`,
  });
  addCopyright(sourceFile);
}
