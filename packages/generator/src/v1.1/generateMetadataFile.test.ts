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
      "@osdk/foundry-sdk-generator/0.0.0",
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(
      helper.getFiles()[`${BASE_PATH}/Ontology.ts`],
    ).toMatchInlineSnapshot(`
      "import type { OntologyDefinition } from '@osdk/api';
      import type { Ontology as ClientOntology } from '@osdk/legacy-client';
      import type { Actions } from './ontology/actions/Actions';
      import { markTodoCompleted } from './ontology/actions/markTodoCompleted';
      import type { Objects } from './ontology/objects/Objects';
      import { Person } from './ontology/objects/Person';
      import { Todo } from './ontology/objects/Todo';
      import type { Queries } from './ontology/queries/Queries';
      import { getCount } from './ontology/queries/getCount';

      export const Ontology: {
        metadata: {
          ontologyRid: 'ridHere';
          ontologyApiName: 'OntologyApiName';
          userAgent: '@osdk/foundry-sdk-generator/0.0.0';
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
          userAgent: '@osdk/foundry-sdk-generator/0.0.0' as const,
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

  it("handles object+action+query name conflicts", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateMetadataFile(
      {
        ontology: {
          apiName: "apiName",
          displayName: "",
          description: "",
          rid: "rid",
        },
        objectTypes: {
          foo: {
            objectType: {
              apiName: "foo",
              primaryKey: "id",
              rid: "rid.object.foo",
              status: "ACTIVE",
              properties: {
                id: {
                  dataType: { type: "integer" },
                },
              },
            },
            linkTypes: [],
          },
        },
        actionTypes: {
          "foo": {
            apiName: "foo",
            rid: "rid.action.foo",
            status: "ACTIVE",
            parameters: {},
            operations: [],
          },
          "bar": {
            apiName: "bar",
            rid: "rid.action.bar",
            status: "ACTIVE",
            parameters: {},
            operations: [],
          },
        },
        queryTypes: {
          "foo": {
            apiName: "foo",
            rid: "rid.query.foo",
            version: "1",
            parameters: {},
            output: { type: "boolean" },
          },
          "bar": {
            apiName: "bar",
            rid: "rid.query.bar",
            version: "1",
            parameters: {},
            output: { type: "boolean" },
          },
        },
        interfaceTypes: {},
        sharedPropertyTypes: {},
      },
      "@osdk/foundry-sdk-generator/0.0.0",
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(
      helper.getFiles()[`${BASE_PATH}/Ontology.ts`],
    ).toMatchInlineSnapshot(`
      "import type { OntologyDefinition } from '@osdk/api';
      import type { Ontology as ClientOntology } from '@osdk/legacy-client';
      import type { Actions } from './ontology/actions/Actions';
      import { bar } from './ontology/actions/bar';
      import { foo as fooAction } from './ontology/actions/foo';
      import type { Objects } from './ontology/objects/Objects';
      import { foo } from './ontology/objects/foo';
      import type { Queries } from './ontology/queries/Queries';
      import { bar as barQuery } from './ontology/queries/bar';
      import { foo as fooQuery } from './ontology/queries/foo';

      export const Ontology: {
        metadata: {
          ontologyRid: 'rid';
          ontologyApiName: 'apiName';
          userAgent: '@osdk/foundry-sdk-generator/0.0.0';
        };
        objects: {
          foo: typeof foo;
        };
        actions: {
          foo: typeof fooAction;
          bar: typeof bar;
        };
        queries: {
          foo: typeof fooQuery;
          bar: typeof barQuery;
        };
      } = {
        metadata: {
          ontologyRid: 'rid' as const,
          ontologyApiName: 'apiName' as const,
          userAgent: '@osdk/foundry-sdk-generator/0.0.0' as const,
        },
        objects: {
          foo,
        },
        actions: {
          foo: fooAction,
          bar,
        },
        queries: {
          foo: fooQuery,
          bar: barQuery,
        },
      } satisfies OntologyDefinition<'foo', 'foo' | 'bar', 'foo' | 'bar'>;

      export interface Ontology extends ClientOntology<typeof Ontology> {
        objects: Objects;
        actions: Actions;
        queries: Queries;
      }
      "
    `);
  });

  it("handles empty object, action, and query names", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateMetadataFile(
      {
        ontology: {
          apiName: "apiName",
          displayName: "",
          description: "",
          rid: "rid",
        },
        objectTypes: {},
        actionTypes: {},
        queryTypes: {},
        interfaceTypes: {},
        sharedPropertyTypes: {},
      },
      "@osdk/foundry-sdk-generator/0.0.0",
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.minimalFiles.writeFile).toBeCalled();

    expect(
      helper.getFiles()[`${BASE_PATH}/Ontology.ts`],
    ).toMatchInlineSnapshot(`
      "import type { OntologyDefinition } from '@osdk/api';
      import type { Ontology as ClientOntology } from '@osdk/legacy-client';
      import type { Actions } from './ontology/actions/Actions';
      import type { Objects } from './ontology/objects/Objects';
      import type { Queries } from './ontology/queries/Queries';

      export const Ontology: {
        metadata: {
          ontologyRid: 'rid';
          ontologyApiName: 'apiName';
          userAgent: '@osdk/foundry-sdk-generator/0.0.0';
        };
        objects: {};
        actions: {};
        queries: {};
      } = {
        metadata: {
          ontologyRid: 'rid' as const,
          ontologyApiName: 'apiName' as const,
          userAgent: '@osdk/foundry-sdk-generator/0.0.0' as const,
        },
        objects: {},
        actions: {},
        queries: {},
      } satisfies OntologyDefinition<never, never, never>;

      export interface Ontology extends ClientOntology<typeof Ontology> {
        objects: Objects;
        actions: Actions;
        queries: Queries;
      }
      "
    `);
  });
});
