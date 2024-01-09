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
import { formatTs } from "../util/test/formatTs";
import { TodoWireOntology } from "../util/test/TodoWireOntology";
import { wireObjectTypeV2ToObjectInterfaceStringV1 } from "./wireObjectTypeV2ToV1ObjectInterfaceString";

describe("wireObjectTypeV2ToObjectInterfaceStringV1", () => {
  it("generates object interface", async () => {
    const objectInterface = wireObjectTypeV2ToObjectInterfaceStringV1(
      TodoWireOntology.objectTypes["Todo"],
    );
    expect(
      await formatTs(objectInterface),
    ).toMatchInlineSnapshot(`
      "import type { OntologyObject, SingleLink } from '@osdk/legacy-client';
      import type { Person } from './Person';

      /**
       * Its a todo item.
       */
      export interface Todo extends OntologyObject {
        readonly __apiName: 'Todo';
        readonly __primaryKey: number;
        /**
         * The text of the todo
         */
        readonly body: string | undefined;
        readonly complete: boolean | undefined;
        readonly id: number | undefined;
        readonly Assignee: SingleLink<Person>;
      }
      "
    `);
  });

  it("adds backcompat entries for reserved keyword property names", async () => {
    const objectInterface = wireObjectTypeV2ToObjectInterfaceStringV1(
      {
        objectType: {
          apiName: "Todo",
          status: "ACTIVE",
          primaryKey: "break",
          properties: {
            "break": {
              dataType: { type: "integer" },
            },
          },
          rid: "ridForTodo",
        },
        linkTypes: [{
          apiName: "this",
          cardinality: "ONE",
          displayName: "thisLink",
          status: "ACTIVE",
          objectTypeApiName: "Todo",
        }],
      },
    );
    expect(await formatTs(objectInterface)).toMatchInlineSnapshot(`
      "import type { OntologyObject, SingleLink } from '@osdk/legacy-client';

      export interface Todo extends OntologyObject {
        readonly __apiName: 'Todo';
        readonly __primaryKey: number;
        readonly break: number | undefined;
        /** @deprecated please migrate to 'break' instead */
        readonly break_: number | undefined;
        readonly this: SingleLink<Todo>;
      }
      "
    `);
  });
});
