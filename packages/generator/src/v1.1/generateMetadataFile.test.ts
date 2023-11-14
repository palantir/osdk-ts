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
import { generateMetadataFile } from "./generateMetadataFile";

describe(generateMetadataFile, () => {
  it("generates metadata", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateMetadataFile(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(
      helper.getFiles()[`${BASE_PATH}/Ontology.ts`],
    ).toMatchInlineSnapshot(`
      "import type { OntologyDefinition } from '@osdk/api';
      import type { Ontology as ClientOntology } from '@osdk/legacy-client';
      import { markTodoCompleted } from './actions/markTodoCompleted';
      import { Person } from './objects/Person';
      import { Todo } from './objects/Todo';
      import type { Actions } from './ontologyActions';
      import type { Objects } from './ontologyObjects';
      import type { Queries } from './ontologyQueries';
      import { getCount } from './queries/getCount';

      export const Ontology: {
        metadata: {
          ontologyRid: 'ridHere';
          ontologyApiName: 'OntologyApiName';
          userAgent: 'foundry-typescript-osdk/0.0.1';
        };
        objects: {
          Todo: typeof Todo;
          Person: typeof Person;
        };
        actions: {
          markTodoCompleted: typeof markTodoCompleted;
        };
        queries: {
          getCount: typeof getCount;
        };
      } = {
        metadata: {
          ontologyRid: 'ridHere' as const,
          ontologyApiName: 'OntologyApiName' as const,
          userAgent: 'foundry-typescript-osdk/0.0.1' as const,
        },
        objects: {
          Todo,
          Person,
        },
        actions: {
          markTodoCompleted,
        },
        queries: {
          getCount,
        },
      } satisfies OntologyDefinition<'Todo' | 'Person', 'markTodoCompleted', 'getCount'>;

      export interface Ontology extends ClientOntology<typeof Ontology> {
        objects: Objects;
        actions: Actions;
        queries: Queries;
      }
      "
    `);
  });
});
