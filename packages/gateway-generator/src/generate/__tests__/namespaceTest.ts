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

import { Project } from "ts-morph";
import { describe, expect, it } from "vitest";
import type { Namespace } from "../../spec/index.js";
import { generateNamespace } from "../namespace.js";

describe("Namespace", () => {
  it("Generates a resource static method on a namespace correctly", () => {
    const project = new Project({});
    const directory = project.createDirectory("namespaces");

    const namespace: Namespace = {
      name: "Datasets",
      resources: [
        {
          component: "Dataset",
          staticOperations: [
            {
              name: "createDataset",
              verb: "create",
              path: "/v1/datasets",
              documentation: {
                description:
                  "Creates a new Dataset. A default branch - `master` for most enrollments - will be created on the Dataset.\n\nThird-party applications using this endpoint via OAuth2 must request the following operation scope: `api:datasets-write`.\n",
                plainTextDescription:
                  "Creates a new Dataset. A default branch - master for most enrollments - will be created on the Dataset.\nThird-party applications using this endpoint via OAuth2 must request the following operation scope: api:datasets-write.",
              },
              httpMethod: "POST",
              parameters: [],
              requestBody: {
                body: {
                  requestType: {
                    type: "component",
                    component: {
                      mediaType: "application/json",
                      type: {
                        type: {
                          type: "reference",
                          reference: "CreateDatasetRequest",
                        },
                        safety: "UNSAFE",
                        documentation: {},
                      },
                      example: {
                        type: "example",
                        example: {
                          name: "My Dataset",
                          parentFolderRid:
                            "ri.foundry.main.folder.bfe58487-4c56-4c58-aba7-25defd6163c4",
                        },
                      },
                    },
                  },
                },
              },
              response: {
                documentation: {
                  description: "",
                  plainTextDescription: "",
                },
                body: {
                  type: "ok",
                  ok: {
                    responseType: {
                      type: "component",
                      component: {
                        mediaType: "application/json",
                        type: {
                          type: {
                            type: "reference",
                            reference: "Dataset",
                          },
                          safety: "UNSAFE",
                          documentation: {},
                        },
                        documentation: {
                          example: {
                            type: "example",
                            example: {
                              rid:
                                "ri.foundry.main.dataset.c26f11c8-cdb3-4f44-9f5d-9816ea1c82da",
                              path: "/My Important Project/My Dataset",
                            },
                          },
                        },
                      },
                    },
                    required: true,
                  },
                },
                code: "200",
              },
              auth: {
                includeAuthHeader: true,
                scopes: ["api:datasets-write"],
              },
            },
          ],
        },
      ],
    };

    generateNamespace(namespace, directory);
    const sourceFiles = project.getSourceFiles();
    const sourceFile = project.getSourceFile("namespaces/Datasets.ts");
    expect(sourceFile?.getFullText()).toMatchInlineSnapshot(`
            "import type { CreateDatasetRequest } from \\"../components/CreateDatasetRequest\\";
            import type { Dataset } from \\"../components/Dataset\\";
            import { OpenApiRequest } from \\"../request\\";

            /**
             * Creates a new Dataset. A default branch - \`master\` for most enrollments - will be created on the Dataset.
             *
             * Third-party applications using this endpoint via OAuth2 must request the following operation scope: \`api:datasets-write\`.
             *
             */
            export function createDataset<TResponse>(_request: OpenApiRequest<Dataset, TResponse>, request: CreateDatasetRequest): Promise<TResponse> {
                return _request(
                    \\"POST\\",
                    \`/v1/datasets\`,
                    request,
                    __undefined,
                    __undefined,
                );
            }

            const __anyMediaType: string = \\"*/*\\";
            const __applicationJson: string = \\"application/json\\";
            /** Constant reference to \`undefined\` that we expect to get minified and therefore reduce total code size */
            const __undefined: undefined = undefined;
            "
        `);
    expect(sourceFiles.length).toBe(1);
  });
});
