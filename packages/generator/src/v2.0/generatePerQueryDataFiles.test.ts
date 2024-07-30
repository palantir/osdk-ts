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
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import { generatePerQueryDataFilesV2 as generatePerQueryDataFiles } from "./generatePerQueryDataFiles.js";

describe("generatePerQueryDataFiles", () => {
  it("is stable v2", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo/queries";

    await generatePerQueryDataFiles(
      TodoWireOntology,
      helper.minimalFiles,
      BASE_PATH,
      ".js",
    );

    expect(helper.getFiles()).toMatchInlineSnapshot(`
      {
        "/foo/queries/getCount.ts": "import type { VersionBound } from '@osdk/api';
      import { QueryDefinition } from '@osdk/api';

      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

      export interface getCount extends QueryDefinition<'getCount', never>, VersionBound<$ExpectedClientVersion> {
        apiName: 'getCount';
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
      }

      export const getCount: getCount = {
        apiName: 'getCount',
        type: 'query',
        version: '0',
        parameters: {
          completed: {
            type: 'boolean',
            nullable: false,
          },
        },
        output: {
          nullable: false,
          type: 'integer',
        },
      };
      ",
        "/foo/queries/index.ts": "export * from './getCount.js';
      export * from './returnsTodo.js';
      ",
        "/foo/queries/returnsTodo.ts": "import type { VersionBound } from '@osdk/api';
      import { QueryDefinition } from '@osdk/api';

      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

      import { Todo } from '../objects.js';

      export interface returnsTodo extends QueryDefinition<'returnsTodo', 'Todo'>, VersionBound<$ExpectedClientVersion> {
        apiName: 'returnsTodo';
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
      }

      export const returnsTodo: returnsTodo = {
        apiName: 'returnsTodo',
        type: 'query',
        version: '0',
        parameters: {
          someTodo: {
            description: 'Random desc so we test jsdoc',
            type: 'object',
            object: 'Todo',
            nullable: false,
          },
        },
        output: {
          nullable: false,
          object: 'Todo',
          type: 'object',
        },
      };
      ",
      }
    `);

    await helper.minimalFiles.writeFile(
      "/bar/test.ts",
      `
      import {returnsTodo} from "/foo/queries/returnsTodo.ts";

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
