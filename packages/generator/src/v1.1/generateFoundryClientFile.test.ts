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

import { describe, expect, it } from "vitest";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles";
import { generateFoundryClientFile } from "./generateFoundryClientFile";

describe(generateFoundryClientFile, () => {
  it("generates foundry client", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateFoundryClientFile(
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(
      helper.getFiles()[`${BASE_PATH}/FoundryClient.ts`],
    ).toMatchInlineSnapshot(`
      "import type { Auth, FoundryClientOptions } from '@osdk/legacy-client';
      import { BaseFoundryClient } from '@osdk/legacy-client';
      import { Ontology } from './Ontology';

      export class FoundryClient<TAuth extends Auth = Auth> extends BaseFoundryClient<typeof Ontology, TAuth> {
        constructor(options: FoundryClientOptions<TAuth>) {
          super(options, Ontology);
        }

        get ontology(): Ontology {
          return super.ontology;
        }
      }
      "
    `);
  });
});
