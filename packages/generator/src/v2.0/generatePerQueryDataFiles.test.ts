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
        ontology: enhanceOntology({
          sanitized: TodoWireOntology,
          importExt: ".js",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
        outDir: BASE_PATH,
        importExt: ".js",
        forInternalUse: true,
      },
      true,
    );

    expect(helper.getFiles()).toMatchInlineSnapshot(`
      {
        "/foo/ontology/queries.ts": "export { getCount } from './queries/getCount.js';
      export { returnsTodo } from './queries/returnsTodo.js';
      ",
        "/foo/ontology/queries/getCount.ts": "import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';

      export namespace getCount {
        export interface Signature {
          (query: getCount.Parameters): Promise<getCount.ReturnType>;
        }

        export interface Parameters {
          /**
           * (no ontology metadata)
           */
          readonly completed: QueryParam.PrimitiveType<'boolean'>;
        }

        export type ReturnType = QueryResult.PrimitiveType<'integer'>;
      }

      export interface getCount extends QueryDefinition<getCount.Signature>, VersionBound<$ExpectedClientVersion> {
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
        "/foo/ontology/queries/returnsTodo.ts": "import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';
      import type { Todo } from '../objects/Todo.js';

      export namespace returnsTodo {
        export interface Signature {
          (query: returnsTodo.Parameters): Promise<returnsTodo.ReturnType>;
        }

        export interface Parameters {
          /**
           *   description: Random desc so we test jsdoc
           */
          readonly someTodo: QueryParam.ObjectType<Todo>;
        }

        export type ReturnType = QueryResult.ObjectType<Todo>;
      }

      export interface returnsTodo extends QueryDefinition<returnsTodo.Signature>, VersionBound<$ExpectedClientVersion> {
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

  it("generates structs for queries", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generatePerQueryDataFilesV2(
      {
        fs: helper.minimalFiles,
        ontology: enhanceOntology({
          sanitized: {
            actionTypes: {},
            interfaceTypes: {},
            objectTypes: {},
            ontology: {
              apiName: "foo",
              description: "foo",
              displayName: "foo",
              rid: "ri.foo",
            },
            queryTypes: {
              doThing: {
                rid: "rid.query.1",
                version: "0",
                apiName: "doThing",
                parameters: {
                  foo: {
                    dataType: { type: "string" },
                  },
                  paramStruct: {
                    dataType: {
                      type: "struct",
                      fields: [
                        {
                          name: "aDate",
                          fieldType: { type: "date" },
                        },
                        {
                          name: "nestedStruct",
                          fieldType: {
                            type: "struct",
                            fields: [
                              {
                                name: "nestedString",
                                fieldType: { type: "string" },
                              },
                              {
                                name: "nestedInteger",
                                fieldType: { type: "integer" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                },
                output: {
                  type: "struct",
                  fields: [
                    {
                      name: "aString",
                      fieldType: { type: "string" },
                    },
                    {
                      name: "anInteger",
                      fieldType: { type: "integer" },
                    },
                    {
                      name: "aLong",
                      fieldType: { type: "long" },
                    },
                    {
                      name: "aDate",
                      fieldType: { type: "date" },
                    },
                    {
                      name: "nestedStruct",
                      fieldType: {
                        type: "struct",
                        fields: [
                          {
                            name: "nestedString",
                            fieldType: { type: "string" },
                          },
                          {
                            name: "nestedInteger",
                            fieldType: { type: "integer" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
            sharedPropertyTypes: {},
          },
          importExt: ".js",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
        outDir: BASE_PATH,
        importExt: ".js",
        forInternalUse: true,
      },
      true,
    );
    expect(helper.getFiles()["/foo/ontology/queries/doThing.ts"])
      .toMatchInlineSnapshot(`
        "import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export namespace doThing {
          export interface Signature {
            (query: doThing.Parameters): Promise<doThing.ReturnType>;
          }

          export interface Parameters {
            /**
             * (no ontology metadata)
             */
            readonly foo: QueryParam.PrimitiveType<'string'>;

            /**
             * (no ontology metadata)
             */
            readonly paramStruct: {
              readonly aDate: QueryParam.PrimitiveType<'datetime'>;

              readonly nestedStruct: {
                readonly nestedInteger: QueryParam.PrimitiveType<'integer'>;

                readonly nestedString: QueryParam.PrimitiveType<'string'>;
              };
            };
          }

          export interface ReturnType {
            aDate: QueryResult.PrimitiveType<'datetime'>;

            aLong: QueryResult.PrimitiveType<'long'>;

            anInteger: QueryResult.PrimitiveType<'integer'>;

            aString: QueryResult.PrimitiveType<'string'>;

            nestedStruct: {
              nestedInteger: QueryResult.PrimitiveType<'integer'>;

              nestedString: QueryResult.PrimitiveType<'string'>;
            };
          }
        }

        export interface doThing extends QueryDefinition<doThing.Signature>, VersionBound<$ExpectedClientVersion> {
          __DefinitionMetadata?: {
            apiName: 'doThing';
            rid: 'rid.query.1';
            type: 'query';
            version: '0';
            parameters: {
              /**
               * (no ontology metadata)
               */
              foo: {
                nullable: false;
                type: 'string';
              };
              /**
               * (no ontology metadata)
               */
              paramStruct: {
                nullable: false;
                struct: {
                  aDate: {
                    type: 'date';
                    nullable: false;
                  };
                  nestedStruct: {
                    type: 'struct';
                    struct: {
                      nestedString: {
                        type: 'string';
                        nullable: false;
                      };
                      nestedInteger: {
                        type: 'integer';
                        nullable: false;
                      };
                    };
                    nullable: false;
                  };
                };
                type: 'struct';
              };
            };
            output: {
              nullable: false;
              struct: {
                aString: {
                  type: 'string';
                  nullable: false;
                };
                anInteger: {
                  type: 'integer';
                  nullable: false;
                };
                aLong: {
                  type: 'long';
                  nullable: false;
                };
                aDate: {
                  type: 'date';
                  nullable: false;
                };
                nestedStruct: {
                  type: 'struct';
                  struct: {
                    nestedString: {
                      type: 'string';
                      nullable: false;
                    };
                    nestedInteger: {
                      type: 'integer';
                      nullable: false;
                    };
                  };
                  nullable: false;
                };
              };
              type: 'struct';
            };
            signature: doThing.Signature;
          };
          apiName: 'doThing';
          type: 'query';
          version: '0';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const doThing: doThing = {
          apiName: 'doThing',
          type: 'query',
          version: '0',
          osdkMetadata: $osdkMetadata,
        };
        "
      `);
  });
});
