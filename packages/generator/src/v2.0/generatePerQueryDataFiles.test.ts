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

import * as ts from "typescript";
import { describe, expect, it } from "vitest";
import { enhanceOntology } from "../GenerateContext/enhanceOntology.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import { generatePerQueryDataFilesV2 } from "./generatePerQueryDataFiles.js";

describe("generatePerQueryDataFiles", () => {
  it("is stable v2", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generatePerQueryDataFilesV2(
      {
        fs: helper.minimalFiles,
        ontology: enhanceOntology(
          TodoWireOntology,
          undefined,
          new Map(),
          ".js",
        ),
        outDir: BASE_PATH,
        importExt: ".js",
      },
      true,
    );

    expect(helper.getFiles()).toMatchInlineSnapshot(`
      {
        "/foo/ontology/queries.ts": "export * from './queries/getCount.js';
      export * from './queries/returnsTodo.js';
      ",
        "/foo/ontology/queries/getCount.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';

      export namespace getCount {
        export interface Signature {
          (query: getCount.Parameters): Promise<QueryResult.PrimitiveType<'integer'>>;
        }

        export interface Parameters {
          /**
           * (no ontology metadata)
           */
          readonly completed: QueryParam.PrimitiveType<'boolean'>;
        }
      }

      export interface getCount
        extends QueryDefinition<'getCount', never, getCount.Signature>,
          VersionBound<$ExpectedClientVersion> {
        __DefinitionMetadata?: {
          apiName: 'getCount';
          rid: 'rid.query.1';
          type: 'query';
          version: '0';
          parameters: {
            /**
             * (no ontology metadata)
             */
            completed: {
              nullable: false;
              type: 'boolean';
            };
          };
          output: {
            nullable: false;
            type: 'integer';
          };
          signature: getCount.Signature;
        };
        apiName: 'getCount';
        type: 'query';
        version: '0';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const getCount: getCount = {
        apiName: 'getCount',
        type: 'query',
        version: '0',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/queries/returnsTodo.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';
      import type { Todo } from '../objects/Todo.js';

      export namespace returnsTodo {
        export interface Signature {
          (query: returnsTodo.Parameters): Promise<QueryResult.ObjectType<Todo>>;
        }

        export interface Parameters {
          /**
           *   description: Random desc so we test jsdoc
           */
          readonly someTodo: QueryParam.ObjectType<Todo>;
        }
      }

      export interface returnsTodo
        extends QueryDefinition<'returnsTodo', 'Todo', returnsTodo.Signature>,
          VersionBound<$ExpectedClientVersion> {
        __DefinitionMetadata?: {
          apiName: 'returnsTodo';
          rid: 'rid.query.2';
          type: 'query';
          version: '0';
          parameters: {
            /**
             *   description: Random desc so we test jsdoc
             */
            someTodo: {
              description: 'Random desc so we test jsdoc';
              nullable: false;
              object: 'Todo';
              type: 'object';
              __OsdkTargetType?: Todo;
            };
          };
          output: {
            nullable: false;
            object: 'Todo';
            type: 'object';
            __OsdkTargetType?: Todo;
          };
          signature: returnsTodo.Signature;
        };
        apiName: 'returnsTodo';
        type: 'query';
        version: '0';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const returnsTodo: returnsTodo = {
        apiName: 'returnsTodo',
        type: 'query',
        version: '0',
        osdkMetadata: $osdkMetadata,
      };
      ",
      }
    `);

    await helper.minimalFiles.writeFile(
      "/bar/test.ts",
      `
      import {returnsTodo} from "/foo/ontology/queries/returnsTodo.ts";

      returnsTodo({someTodo:/*marker*/})
    `,
    );

    const rootFileNames = Object.keys(helper.getFiles());
    console.log(rootFileNames);

    const files: ts.MapLike<{ version: number }> = {};

    // initialize the list of files
    rootFileNames.forEach(fileName => {
      files[fileName] = { version: 0 };
    });

    const servicesHost: ts.LanguageServiceHost = {
      getScriptFileNames: () => Object.keys(helper.getFiles()),
      getScriptVersion: fileName =>
        files[fileName] && files[fileName].version.toString(),
      getScriptSnapshot: fileName => {
        if (!helper.getFiles()[fileName]) {
          return undefined;
        }

        return ts.ScriptSnapshot.fromString(
          helper.getFiles()[fileName],
        );
      },
      getCurrentDirectory: () => "/bar",
      getCompilationSettings: () => ({}),
      getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
      fileExists: (path: string) => {
        console.log(path);
        return helper.getFiles()[path] !== undefined;
      },
      readFile: (path: string) => {
        console.log("readFile: ", path);
        return helper.getFiles()[path];
      },
      readDirectory: (path, extensions, exclude, include, depth) => {
        console.log("readDirectory", path);
        return ts.sys.readDirectory(path, extensions, exclude, include, depth);
      },
      directoryExists: ts.sys.directoryExists,
      getDirectories: ts.sys.getDirectories,
    };

    const langServices = ts.createLanguageService(servicesHost);

    const q = langServices.getDocCommentTemplateAtPosition("/bar/test.ts", 1);
    console.log(q);
    ts.createDocumentRegistry();
  });
});
