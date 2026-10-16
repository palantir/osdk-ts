/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { defineOntology, dumpOntologyFullMetadata } from "@osdk/maker";
import { beforeEach, describe, expect, it } from "vitest";

import { defineFunctionBackedAction } from "./defineFunctionBackedAction.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";

describe("function-backed action folder placement", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  it.each([{ id: "people-actions", location: "actions//people/" }])(
    "preserves raw folder %j and explicit permissions",
    (folder) => {
      const action = defineFunctionBackedAction({
        functionApiName: "updatePerson",
        permission: "publicProject",
        folder,
      });
      expect(action).toMatchObject({
        folder,
        permission: "publicProject",
      });
      expect(
        dumpOntologyFullMetadata().ontology.blockPermissionInformation
          ?.actionTypes[action.apiName].restrictionStatus.publicProject,
      ).toBe(true);
    },
  );

  it("rejects traversal during experimental conversion", async () => {
    await expect(
      defineOntologyV2("com.palantir.", () => {
        defineFunctionBackedAction({
          functionApiName: "updatePerson",
          permission: "publicProject",
          folder: { id: "people-actions", location: "actions/../people" },
        });
      }),
    ).rejects.toThrow('folder must not contain "." or ".." path segments');
  });

  it("requires explicit publicProject permission during conversion", async () => {
    await expect(
      defineOntologyV2("com.palantir.", () => {
        defineFunctionBackedAction({
          functionApiName: "updatePerson",
          folder: { id: "people-actions", location: "/actions" },
        });
      }),
    ).rejects.toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
  });
});
