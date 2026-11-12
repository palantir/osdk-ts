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

import type { ActionTypeV2, QueryDataType } from "@osdk/foundry.ontologies";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import { generatePerActionDataFiles } from "./generatePerActionDataFiles.js";

describe(generatePerActionDataFiles, () => {
  it("guards against empty actions", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";
    const sanitizedOntology = { ...TodoWireOntology, actionTypes: {} };
    await generatePerActionDataFiles(
      {
        fs: helper.minimalFiles,
        outDir: BASE_PATH,
        ontology: enhanceOntology({
          sanitized: sanitizedOntology,
          importExt: "",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
      },
    );
    expect(helper.getFiles()[`${BASE_PATH}/ontology/actions.ts`]).toEqual(
      "export {};\n",
    );
  });

  it("imports object types correctly with array params in actions", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo/ontology/actions";
    const sanitizedOntology = TodoWireOntology;
    await generatePerActionDataFiles(
      {
        fs: helper.minimalFiles,
        outDir: path.join(BASE_PATH, "..", ".."),
        ontology: enhanceOntology({
          sanitized: sanitizedOntology,
          importExt: "",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
      },
    );

    expect(helper.getFiles()[`${BASE_PATH}/deleteTodos.ts`]).toContain(
      "import type { Todo } from '../objects/Todo';\n",
    );
  });

  describe("return values", () => {
    function actionReturning(
      apiName: string,
      returnType: QueryDataType,
    ): ActionTypeV2 & { returnType: QueryDataType } {
      return {
        apiName,
        parameters: {},
        rid: `ri.actions.main.action-type.${apiName}`,
        status: "ACTIVE",
        operations: [],
        returnType,
      };
    }

    async function generateActions(
      actionTypes: Record<string, ActionTypeV2>,
    ): Promise<Record<string, string>> {
      const helper = createMockMinimalFiles();
      await generatePerActionDataFiles({
        fs: helper.minimalFiles,
        outDir: "/foo",
        ontology: enhanceOntology({
          sanitized: { ...TodoWireOntology, actionTypes },
          importExt: "",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
      });
      return helper.getFiles();
    }

    it("types applyAction with the action's return type", async () => {
      const files = await generateActions({
        returnsName: actionReturning("returnsName", { type: "string" }),
      });

      expect(files["/foo/ontology/actions/returnsName.ts"])
        .toMatchInlineSnapshot(`
          "import type {
            ActionDefinition,
            ActionMetadata,
            ActionParam,
            ActionReturnTypeForOptions,
            ApplyActionOptions,
            ApplyBatchActionOptions,
            QueryResult,
          } from '@osdk/client';
          import { $osdkMetadata } from '../../OntologyMetadata';

          export namespace returnsName {
            // Represents the definition of the parameters for the action
            export type ParamsDefinition = Record<string, never>;

            export interface Params {}

            export type ReturnType = QueryResult.PrimitiveType<'string'>;

            // Represents a fqn of the action
            export interface Signatures {
              applyAction<OP extends ApplyActionOptions>(
                args: returnsName.Params,
                options?: OP,
              ): Promise<ActionReturnTypeForOptions<OP, returnsName.ReturnType>>;

              batchApplyAction<OP extends ApplyBatchActionOptions>(
                args: ReadonlyArray<returnsName.Params>,
                options?: OP,
              ): Promise<ActionReturnTypeForOptions<OP>>;
            }
          }

          /**
           */
          export interface returnsName extends ActionDefinition<returnsName.Signatures> {
            __DefinitionMetadata?: {
              apiName: 'returnsName';
              modifiedEntities: {};
              parameters: returnsName.ParamsDefinition;
              returnType: {
                type: 'string';
                nullable: false;
              };
              rid: 'ri.actions.main.action-type.returnsName';
              status: 'ACTIVE';
              type: 'action';
              unsanitizedApiName: 'returnsName';

              signatures: returnsName.Signatures;
            };
            apiName: 'returnsName';
            type: 'action';
            unsanitizedApiName: 'returnsName';
            osdkMetadata: typeof $osdkMetadata;
          }

          export const returnsName: returnsName = {
            apiName: 'returnsName',
            type: 'action',
            unsanitizedApiName: 'returnsName',
            osdkMetadata: $osdkMetadata,
          };
          "
        `);
    });

    it("generates optional, struct and map return types", async () => {
      const files = await generateActions({
        returnsOptional: actionReturning("returnsOptional", {
          type: "union",
          unionTypes: [{ type: "integer" }, { type: "null" }],
        }),
        returnsStruct: actionReturning("returnsStruct", {
          type: "struct",
          fields: [{ name: "name", fieldType: { type: "string" } }],
        }),
        returnsMap: actionReturning("returnsMap", {
          type: "entrySet",
          keyType: { type: "string" },
          valueType: { type: "long" },
        }),
      });

      expect(files["/foo/ontology/actions/returnsOptional.ts"]).toContain(
        "export type ReturnType = QueryResult.PrimitiveType<'integer'> | undefined;",
      );
      expect(files["/foo/ontology/actions/returnsStruct.ts"]).toMatch(
        /export interface ReturnType \{\s+name: QueryResult.PrimitiveType<'string'>;\s+\}/,
      );
      expect(files["/foo/ontology/actions/returnsMap.ts"]).toMatch(
        /export type ReturnType = Partial<\s*Record<QueryResult.PrimitiveType<'string'>,\s*QueryResult.PrimitiveType<'long'>>\s*>;/,
      );
    });

    it("allows undefined items in list and set return types", async () => {
      const nullableInteger: QueryDataType = {
        type: "union",
        unionTypes: [{ type: "integer" }, { type: "null" }],
      };
      const files = await generateActions({
        returnsList: actionReturning("returnsList", {
          type: "array",
          subType: nullableInteger,
        }),
        returnsSet: actionReturning("returnsSet", {
          type: "set",
          subType: nullableInteger,
        }),
      });

      expect(files["/foo/ontology/actions/returnsList.ts"]).toMatch(
        /export type ReturnType = Array<\s*QueryResult.PrimitiveType<'integer'> \| undefined\s*> \| undefined;/,
      );
      expect(files["/foo/ontology/actions/returnsSet.ts"]).toMatch(
        /export type ReturnType = Array<\s*QueryResult.PrimitiveType<'integer'> \| undefined\s*>;/,
      );
    });

    it("leaves actions without a return type unchanged", async () => {
      const files = await generateActions(TodoWireOntology.actionTypes);
      const generated = files["/foo/ontology/actions/markTodoCompleted.ts"];

      expect(generated).not.toContain("export type ReturnType");
      expect(generated).not.toContain("QueryResult");
      expect(generated).toContain(
        "Promise<ActionReturnTypeForOptions<OP>>",
      );
    });
  });
});
