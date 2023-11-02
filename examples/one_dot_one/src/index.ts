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

import { generateClientSdkVersionOneDotOne } from "@osdk/generator";
import * as realFs from "node:fs/promises";

export function go(basePath: string) {
  generateClientSdkVersionOneDotOne(
    {
      rid: "ridHere",
      actionTypes: [],
      apiName: "OntologyApiName",
      objectTypes: {
        Todo: {
          apiName: "Todo",
          primaryKey: "id",
          displayName: "AwesomeTodoDisplayname",
          description: "Its a todo item.",
          properties: {
            id: {
              dataType: {
                type: "integer",
              },
            },
            body: {
              dataType: {
                type: "string",
              },
              description: "The text of the todo",
              displayName: "Body",
            },
            complete: {
              dataType: {
                type: "boolean",
              },
            },
          },
          status: "ACTIVE",
          rid: "ridForTodo",
        },
        Person: {
          apiName: "Person",
          primaryKey: "email",
          displayName: "Person",
          description: "A person",
          properties: {
            email: {
              dataType: {
                type: "string",
              },
            },
          },

          rid: "ridForPerson",
          status: "ACTIVE",
        },
      },
      queryTypes: [],
      linkTypes: {
        Person: [{
          apiName: "Todos",
          cardinality: "MANY",
          displayName: "Todos",
          objectTypeApiName: "Todo",
          status: "ACTIVE",
          foreignKeyPropertyApiName: "id",
        }],
        Todo: [{
          apiName: "Assignee",
          cardinality: "ONE",
          displayName: "Assignee",
          objectTypeApiName: "Person",
          status: "ACTIVE",
          foreignKeyPropertyApiName: "email",
        }],
      },
    },
    {
      writeFile: (path, contents) => {
        return realFs.writeFile(path, contents, "utf-8");
      },
      mkdir: async (path, options) => {
        await realFs.mkdir(path, options);
      },
    },
    basePath,
  );
}
