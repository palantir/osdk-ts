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
        fixedVersionQueryTypes: [],
      },
      true,
    );

    expect(helper.getFiles()).toMatchInlineSnapshot(`
      {
        "/foo/ontology/queries.ts": "export { getCount } from './queries/getCount.js';
      export { returnsTodo } from './queries/returnsTodo.js';
      ",
        "/foo/ontology/queries/getCount.ts": "import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
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
          version: '1.1.0';
          isFixedVersion: false;
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
        version: '1.1.0';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const getCount: getCount = {
        apiName: 'getCount',
        type: 'query',
        version: '1.1.0',
        isFixedVersion: false,
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/queries/returnsTodo.ts": "import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
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
          version: '3.2.0';
          isFixedVersion: false;
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
        version: '3.2.0';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const returnsTodo: returnsTodo = {
        apiName: 'returnsTodo',
        type: 'query',
        version: '3.2.0',
        isFixedVersion: false,
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
                  listField: {
                    dataType: { type: "array", "subType": { "type": "float" } },
                  },
                  nestedListField: {
                    dataType: {
                      type: "array",
                      "subType": {
                        "type": "array",
                        "subType": { "type": "float" },
                      },
                    },
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
                typeReferences: {},
              },
            },
            sharedPropertyTypes: {},
            valueTypes: {},
          },
          importExt: ".js",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
        outDir: BASE_PATH,
        importExt: ".js",
        forInternalUse: true,
        fixedVersionQueryTypes: [],
      },
      true,
    );
    expect(helper.getFiles()["/foo/ontology/queries/doThing.ts"])
      .toMatchInlineSnapshot(`
        "import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
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
            readonly listField: ReadonlyArray<QueryParam.PrimitiveType<'float'>>;

            /**
             * (no ontology metadata)
             */
            readonly nestedListField: ReadonlyArray<ReadonlyArray<QueryParam.PrimitiveType<'float'>>>;

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
            isFixedVersion: false;
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
              listField: {
                array: {
                  type: 'float';
                  nullable: false;
                };
                nullable: false;
                type: 'array';
              };
              /**
               * (no ontology metadata)
               */
              nestedListField: {
                array: {
                  array: {
                    type: 'float';
                    nullable: false;
                  };
                  type: 'array';
                  nullable: false;
                };
                nullable: false;
                type: 'array';
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
          isFixedVersion: false,
          osdkMetadata: $osdkMetadata,
        };
        "
      `);
  });

  it("generates interfaces for recursive type references", async () => {
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
              queryWithRecursiveType: {
                rid: "rid.query.recursive",
                version: "1.0.0",
                apiName: "queryWithRecursiveType",
                parameters: {
                  treeNode: {
                    description: "A recursive tree node parameter",
                    dataType: {
                      type: "typeReference",
                      typeId: "tree-node-type-id",
                    },
                  },
                },
                output: {
                  type: "array",
                  subType: {
                    type: "typeReference",
                    typeId: "tree-node-type-id",
                  },
                },
                typeReferences: {
                  "tree-node-type-id": {
                    type: "struct",
                    fields: [
                      {
                        name: "value",
                        fieldType: { type: "string" },
                      },
                      {
                        name: "children",
                        fieldType: {
                          type: "array",
                          subType: {
                            type: "typeReference",
                            typeId: "tree-node-type-id",
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
            sharedPropertyTypes: {},
            valueTypes: {},
          },
          importExt: ".js",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
        outDir: BASE_PATH,
        importExt: ".js",
        forInternalUse: true,
        fixedVersionQueryTypes: [],
      },
      true,
    );
    expect(helper.getFiles()["/foo/ontology/queries/queryWithRecursiveType.ts"])
      .toMatchInlineSnapshot(`
        "import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export namespace queryWithRecursiveType {
          namespace CustomTypes {
            export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
            export interface $tree_node_type_id {
              readonly children: ReadonlyArray<CustomTypes.$tree_node_type_id>;

              readonly value: QueryParam.PrimitiveType<'string'>;
            }
          }

          export interface Signature {
            (query: queryWithRecursiveType.Parameters): Promise<queryWithRecursiveType.ReturnType>;
          }

          export interface Parameters {
            /**
             *   description: A recursive tree node parameter
             */
            readonly treeNode: CustomTypes.Expand<CustomTypes.$tree_node_type_id>;
          }

          export type ReturnType = Array<CustomTypes.Expand<CustomTypes.$tree_node_type_id>>;
        }

        export interface queryWithRecursiveType
          extends QueryDefinition<queryWithRecursiveType.Signature>,
            VersionBound<$ExpectedClientVersion> {
          __DefinitionMetadata?: {
            apiName: 'queryWithRecursiveType';
            rid: 'rid.query.recursive';
            type: 'query';
            version: '1.0.0';
            isFixedVersion: false;
            parameters: {
              /**
               *   description: A recursive tree node parameter
               */
              treeNode: {
                description: 'A recursive tree node parameter';
                nullable: false;
                type: 'typeReference';
                typeId: 'tree-node-type-id';
              };
            };
            output: {
              array: {
                type: 'typeReference';
                typeId: 'tree-node-type-id';
                nullable: false;
              };
              nullable: false;
              type: 'array';
            };
            signature: queryWithRecursiveType.Signature;
          };
          apiName: 'queryWithRecursiveType';
          type: 'query';
          version: '1.0.0';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const queryWithRecursiveType: queryWithRecursiveType = {
          apiName: 'queryWithRecursiveType',
          type: 'query',
          version: '1.0.0',
          isFixedVersion: false,
          osdkMetadata: $osdkMetadata,
        };
        "
      `);
  });

  it("generates interfaces for multiple type references", async () => {
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
              queryWithMultipleTypeRefs: {
                rid: "rid.query.multi",
                version: "1.0.0",
                apiName: "queryWithMultipleTypeRefs",
                parameters: {
                  binaryTree: {
                    description: "A binary tree parameter",
                    dataType: {
                      type: "typeReference",
                      typeId: "binary-tree-id",
                    },
                  },
                  linkedList: {
                    description: "A linked list parameter",
                    dataType: {
                      type: "typeReference",
                      typeId: "linked-list-id",
                    },
                  },
                },
                output: {
                  type: "struct",
                  fields: [
                    {
                      name: "tree",
                      fieldType: {
                        type: "typeReference",
                        typeId: "binary-tree-id",
                      },
                    },
                    {
                      name: "list",
                      fieldType: {
                        type: "typeReference",
                        typeId: "linked-list-id",
                      },
                    },
                  ],
                },
                typeReferences: {
                  "binary-tree-id": {
                    type: "struct",
                    fields: [
                      {
                        name: "value",
                        fieldType: { type: "integer" },
                      },
                      {
                        name: "left",
                        fieldType: {
                          type: "union",
                          unionTypes: [
                            { type: "typeReference", typeId: "binary-tree-id" },
                            { type: "null" },
                          ],
                        },
                      },
                      {
                        name: "right",
                        fieldType: {
                          type: "union",
                          unionTypes: [
                            { type: "typeReference", typeId: "binary-tree-id" },
                            { type: "null" },
                          ],
                        },
                      },
                    ],
                  },
                  "linked-list-id": {
                    type: "struct",
                    fields: [
                      {
                        name: "data",
                        fieldType: { type: "string" },
                      },
                      {
                        name: "next",
                        fieldType: {
                          type: "union",
                          unionTypes: [
                            { type: "typeReference", typeId: "linked-list-id" },
                            { type: "null" },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
            },
            sharedPropertyTypes: {},
            valueTypes: {},
          },
          importExt: ".js",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
        outDir: BASE_PATH,
        importExt: ".js",
        forInternalUse: true,
        fixedVersionQueryTypes: [],
      },
      true,
    );
    expect(
      helper.getFiles()["/foo/ontology/queries/queryWithMultipleTypeRefs.ts"],
    )
      .toMatchInlineSnapshot(`
        "import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export namespace queryWithMultipleTypeRefs {
          namespace CustomTypes {
            export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
            export interface $binary_tree_id {
              readonly left?: CustomTypes.$binary_tree_id;

              readonly right?: CustomTypes.$binary_tree_id;

              readonly value: QueryParam.PrimitiveType<'integer'>;
            }

            export interface $linked_list_id {
              readonly data: QueryParam.PrimitiveType<'string'>;

              readonly next?: CustomTypes.$linked_list_id;
            }
          }

          export interface Signature {
            (query: queryWithMultipleTypeRefs.Parameters): Promise<queryWithMultipleTypeRefs.ReturnType>;
          }

          export interface Parameters {
            /**
             *   description: A binary tree parameter
             */
            readonly binaryTree: CustomTypes.Expand<CustomTypes.$binary_tree_id>;

            /**
             *   description: A linked list parameter
             */
            readonly linkedList: CustomTypes.Expand<CustomTypes.$linked_list_id>;
          }

          export interface ReturnType {
            list: CustomTypes.Expand<CustomTypes.$linked_list_id>;

            tree: CustomTypes.Expand<CustomTypes.$binary_tree_id>;
          }
        }

        export interface queryWithMultipleTypeRefs
          extends QueryDefinition<queryWithMultipleTypeRefs.Signature>,
            VersionBound<$ExpectedClientVersion> {
          __DefinitionMetadata?: {
            apiName: 'queryWithMultipleTypeRefs';
            rid: 'rid.query.multi';
            type: 'query';
            version: '1.0.0';
            isFixedVersion: false;
            parameters: {
              /**
               *   description: A binary tree parameter
               */
              binaryTree: {
                description: 'A binary tree parameter';
                nullable: false;
                type: 'typeReference';
                typeId: 'binary-tree-id';
              };
              /**
               *   description: A linked list parameter
               */
              linkedList: {
                description: 'A linked list parameter';
                nullable: false;
                type: 'typeReference';
                typeId: 'linked-list-id';
              };
            };
            output: {
              nullable: false;
              struct: {
                tree: {
                  type: 'typeReference';
                  typeId: 'binary-tree-id';
                  nullable: false;
                };
                list: {
                  type: 'typeReference';
                  typeId: 'linked-list-id';
                  nullable: false;
                };
              };
              type: 'struct';
            };
            signature: queryWithMultipleTypeRefs.Signature;
          };
          apiName: 'queryWithMultipleTypeRefs';
          type: 'query';
          version: '1.0.0';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const queryWithMultipleTypeRefs: queryWithMultipleTypeRefs = {
          apiName: 'queryWithMultipleTypeRefs',
          type: 'query',
          version: '1.0.0',
          isFixedVersion: false,
          osdkMetadata: $osdkMetadata,
        };
        "
      `);
  });

  it("generates Output-prefixed interfaces for output-only type references", async () => {
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
              queryWithOutputOnlyTypeRef: {
                rid: "rid.query.output-only",
                version: "1.0.0",
                apiName: "queryWithOutputOnlyTypeRef",
                parameters: {
                  name: {
                    dataType: { type: "string" },
                  },
                },
                output: {
                  type: "struct",
                  fields: [
                    {
                      name: "metadata",
                      fieldType: {
                        type: "typeReference",
                        typeId: "metadata-type-id",
                      },
                    },
                    {
                      name: "data",
                      fieldType: {
                        type: "typeReference",
                        typeId: "data-type-id",
                      },
                    },
                  ],
                },
                typeReferences: {
                  "metadata-type-id": {
                    type: "struct",
                    fields: [
                      {
                        name: "createdAt",
                        fieldType: { type: "timestamp" },
                      },
                      {
                        name: "updatedAt",
                        fieldType: { type: "timestamp" },
                      },
                    ],
                  },
                  "data-type-id": {
                    type: "struct",
                    fields: [
                      {
                        name: "value",
                        fieldType: { type: "string" },
                      },
                      {
                        name: "nested",
                        fieldType: {
                          type: "typeReference",
                          typeId: "data-type-id",
                        },
                      },
                    ],
                  },
                },
              },
            },
            sharedPropertyTypes: {},
            valueTypes: {},
          },
          importExt: ".js",
          externalObjects: new Map(),
          externalInterfaces: new Map(),
          externalSpts: new Map(),
        }),
        outDir: BASE_PATH,
        importExt: ".js",
        forInternalUse: true,
        fixedVersionQueryTypes: [],
      },
      true,
    );
    expect(
      helper.getFiles()["/foo/ontology/queries/queryWithOutputOnlyTypeRef.ts"],
    )
      .toMatchInlineSnapshot(`
        "import type { ObjectSpecifier, QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export namespace queryWithOutputOnlyTypeRef {
          namespace CustomTypes {
            export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
            export interface $metadata_type_id {
              createdAt: QueryResult.PrimitiveType<'timestamp'>;

              updatedAt: QueryResult.PrimitiveType<'timestamp'>;
            }

            export interface $data_type_id {
              nested: CustomTypes.$data_type_id;

              value: QueryResult.PrimitiveType<'string'>;
            }
          }

          export interface Signature {
            (query: queryWithOutputOnlyTypeRef.Parameters): Promise<queryWithOutputOnlyTypeRef.ReturnType>;
          }

          export interface Parameters {
            /**
             * (no ontology metadata)
             */
            readonly name: QueryParam.PrimitiveType<'string'>;
          }

          export interface ReturnType {
            data: CustomTypes.Expand<CustomTypes.$data_type_id>;

            metadata: CustomTypes.Expand<CustomTypes.$metadata_type_id>;
          }
        }

        export interface queryWithOutputOnlyTypeRef
          extends QueryDefinition<queryWithOutputOnlyTypeRef.Signature>,
            VersionBound<$ExpectedClientVersion> {
          __DefinitionMetadata?: {
            apiName: 'queryWithOutputOnlyTypeRef';
            rid: 'rid.query.output-only';
            type: 'query';
            version: '1.0.0';
            isFixedVersion: false;
            parameters: {
              /**
               * (no ontology metadata)
               */
              name: {
                nullable: false;
                type: 'string';
              };
            };
            output: {
              nullable: false;
              struct: {
                metadata: {
                  type: 'typeReference';
                  typeId: 'metadata-type-id';
                  nullable: false;
                };
                data: {
                  type: 'typeReference';
                  typeId: 'data-type-id';
                  nullable: false;
                };
              };
              type: 'struct';
            };
            signature: queryWithOutputOnlyTypeRef.Signature;
          };
          apiName: 'queryWithOutputOnlyTypeRef';
          type: 'query';
          version: '1.0.0';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const queryWithOutputOnlyTypeRef: queryWithOutputOnlyTypeRef = {
          apiName: 'queryWithOutputOnlyTypeRef',
          type: 'query',
          version: '1.0.0',
          isFixedVersion: false,
          osdkMetadata: $osdkMetadata,
        };
        "
      `);
  });
});
