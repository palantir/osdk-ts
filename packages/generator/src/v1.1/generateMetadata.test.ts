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
import { TodoWireOntology } from "../util/test/TodoWireOntology";
import { generateMetadata } from "./generateMetadata";

describe("generateMetadata", () => {
  it("generates metadata", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateMetadata(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(
      helper.getFiles()[`${BASE_PATH}/Ontology.ts`],
    ).toMatchInlineSnapshot(`
      "// Path: /foo/Ontology
      import type { OntologyDefinition } from '@osdk/api';
      import type { Ontology as ClientOntology } from '@osdk/legacy-client';
      import type { Objects } from './ontologyObjects';
      import { Todo } from './objects/Todo';
      export const Ontology = {
        metadata: {
          ontologyRid: 'ridHere',
          ontologyApiName: 'OntologyApiName',
          userAgent: 'foundry-typescript-osdk/0.0.1',
        },
        objects: {
          Todo: Todo,
        },
      } satisfies OntologyDefinition<'Todo'>;

      export interface Ontology extends ClientOntology<typeof Ontology> {
        objects: Objects;
      }
      "
    `);
  });
});
