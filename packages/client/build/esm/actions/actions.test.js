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

import { $Actions, actionTakesAttachment, actionTakesMedia, createFooInterface, createOffice, createStructPerson, deleteBarInterface, deleteFooInterface, Employee, moveOffice } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, MockOntologiesV2, startNodeApiServer, stubData } from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it, vi } from "vitest";
import { createClient } from "../createClient.js";
import { createAttachmentUpload } from "../object/AttachmentUpload.js";
import { ActionValidationError } from "./ActionValidationError.js";
import { remapActionResponse } from "./applyAction.js";
describe.each(["https://stack.palantir.com", "https://stack.palantirCustom.com/foo/first/someStuff"])("actions for %s", baseUrl => {
  let client;
  let apiServer;
  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(baseUrl), createClient);
    ({
      client,
      apiServer
    } = testSetup);
    return () => {
      apiServer.close();
    };
  });
  it("conditionally returns the edits", async () => {
    const result = await client(createOffice).applyAction({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100
    }, {
      $returnEdits: true
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toMatchObject({
      "addedLinks": [],
      "addedObjects": [{
        "objectType": "Office",
        "primaryKey": "NYC"
      }],
      "deletedLinks": [],
      "deletedLinksCount": 0,
      "deletedObjects": [],
      "deletedObjectsCount": 0,
      "editedObjectTypes": ["Office"],
      "modifiedObjects": [],
      "type": "edits"
    });

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const undefinedResult = await client(createOffice).applyAction({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100
    });
    expectTypeOf().toEqualTypeOf();
    expect(undefinedResult).toBeUndefined();
    client(createOffice).batchApplyAction;
    const clientCreateOfficeMock = vi.fn();
    void clientCreateOfficeMock([{
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100
    }], {
      $returnEdits: true
    });
  });
  it("returns validation directly on validateOnly mode", async () => {
    const result = await client(moveOffice).applyAction({
      officeId: "SEA",
      newAddress: "456 Pike Place",
      // intentionally using a string to trigger validation errors
      newCapacity: "40"
    }, {
      $validateOnly: true
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toMatchObject({
      "parameters": {
        "newCapacity": {
          "evaluatedConstraints": [],
          "required": false,
          "result": "INVALID"
        }
      },
      "result": "INVALID",
      "submissionCriteria": []
    });
  });
  it("returns validation directly on validateOnly mode, with custom entry point in URL", async () => {
    const result = await client(moveOffice).applyAction({
      officeId: "SEA",
      newAddress: "456 Pike Place",
      // intentionally using a string to trigger validation failure
      newCapacity: "40"
    }, {
      $validateOnly: true
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toMatchObject({
      "parameters": {
        "newCapacity": {
          "evaluatedConstraints": [],
          "required": false,
          "result": "INVALID"
        }
      },
      "result": "INVALID",
      "submissionCriteria": []
    });
  });
  it("throws on validation errors", async () => {
    try {
      await client(moveOffice).applyAction({
        officeId: "SEA",
        newAddress: "456 Pike Place",
        // intentionally using a string to trigger validation failure
        newCapacity: "40"
      }, {
        $returnEdits: true
      });
      expect.fail("Should not reach here");
    } catch (e) {
      expect(e).toBeInstanceOf(ActionValidationError);
      expect(e.validation).toMatchObject({
        "parameters": {
          "newCapacity": {
            "evaluatedConstraints": [],
            "required": false,
            "result": "INVALID"
          }
        },
        "result": "INVALID",
        "submissionCriteria": []
      });
    }
  });
  it("Accepts structs", async () => {
    client(createStructPerson).applyAction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(createStructPerson).applyAction({
      name: "testMan",
      address: {
        city: "NYC",
        state: "NY",
        zipcode: 12345
      }
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toBeUndefined();
  });
  it("Accepts attachments", async () => {
    client(actionTakesAttachment).applyAction;
    expectTypeOf().toMatchTypeOf();
    client(actionTakesAttachment).batchApplyAction;
    expectTypeOf().toMatchTypeOf();
    await apiServer.boundary(async () => {
      apiServer.use(MockOntologiesV2.Actions.apply(baseUrl, () => {
        return {
          validation: {
            result: "VALID",
            submissionCriteria: [],
            parameters: {}
          }
        };
      }));

      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const result = await client(actionTakesAttachment).applyAction({
        attachment: "ri.some.rid"
      });
      expectTypeOf().toEqualTypeOf();
      expect(result).toBeUndefined();
    })();
  });
  it("Accepts attachment uploads", async () => {
    client(actionTakesAttachment).applyAction;
    client(actionTakesAttachment).batchApplyAction;
    expectTypeOf().toMatchTypeOf();
    expectTypeOf().toMatchTypeOf();
    const blob = new Blob([JSON.stringify({
      name: "Hello World"
    }, null, 2)]);
    const attachment = createAttachmentUpload(blob, "file1.txt");

    // Mimics the Web file API (https://developer.mozilla.org/en-US/docs/Web/API/File). The File constructor is only available in Node 19.2.0 and above
    const fileAttachment = Object.assign(blob, {
      name: "file1.txt"
    });

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const result = await client(actionTakesAttachment).applyAction({
      attachment
    });

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const result2 = await client(actionTakesAttachment).applyAction({
      attachment: fileAttachment
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toBeUndefined();
    expectTypeOf().toEqualTypeOf();
    expect(result2).toBeUndefined();
  });
  it("Accepts media reference", async () => {
    client(actionTakesMedia).applyAction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(actionTakesMedia).applyAction({
      media_reference: stubData.actionRequestMediaUpload.parameters.media_reference
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toBeUndefined();
  });
  it("Accepts interfaces", async () => {
    client(deleteFooInterface).applyAction;
    expectTypeOf().toMatchTypeOf();
    client(deleteFooInterface).batchApplyAction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(deleteFooInterface).applyAction({
      deletedInterface: {
        $objectType: "Employee",
        $primaryKey: 50030
      }
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toBeUndefined();
  });
  it("Accepts interfaces if implementing object types unknown", async () => {
    client(deleteBarInterface).applyAction;
    expectTypeOf().toMatchTypeOf();
    client(deleteBarInterface).batchApplyAction;
    expectTypeOf().toMatchTypeOf();
  });
  it("Accepts object type refs", async () => {
    client(createFooInterface).applyAction;
    expectTypeOf().toMatchTypeOf();
    client(createFooInterface).batchApplyAction;
    expectTypeOf().toMatchTypeOf();
    const result = await client(createFooInterface).applyAction({
      createdInterface: Employee.apiName
    });
    expectTypeOf().toEqualTypeOf();
    expect(result).toBeUndefined();
  });
  it("conditionally returns edits in batch mode", async () => {
    const result = await client(moveOffice).batchApplyAction([{
      officeId: "SEA",
      newAddress: "456 Good Place",
      newCapacity: 40
    }, {
      officeId: "NYC",
      newAddress: "123 Main Street",
      newCapacity: 80
    }], {
      $returnEdits: true
    });
    expect(result).toMatchObject({
      "addedLinks": [],
      "addedObjects": [],
      "deletedLinks": [],
      "deletedLinksCount": 0,
      "deletedObjects": [],
      "deletedObjectsCount": 0,
      "editedObjectTypes": ["Office"],
      "modifiedObjects": [{
        "objectType": "Office",
        "primaryKey": "SEA"
      }, {
        "objectType": "Office",
        "primaryKey": "NYC"
      }],
      "type": "edits"
    });
  });
});
describe("ActionResponse remapping", () => {
  const actionResponse = {
    edits: {
      type: "edits",
      edits: [{
        "objectType": "Developer",
        "primaryKey": "PalantirDev",
        "type": "addObject"
      }, {
        "objectType": "Contractor",
        "primaryKey": "Contractor1",
        "type": "modifyObject"
      }, {
        "aSideObject": {
          "primaryKey": "key1",
          "objectType": "Office"
        },
        "linkTypeApiNameAtoB": "test",
        "linkTypeApiNameBtoA": "test",
        "bSideObject": {
          "primaryKey": "key2",
          "objectType": "Employee"
        },
        "type": "addLink"
      }, {
        "objectType": "Developer",
        "primaryKey": "PalantirDev",
        "type": "deleteObject"
      }, {
        "aSideObject": {
          "primaryKey": "key1",
          "objectType": "Office"
        },
        "linkTypeApiNameAtoB": "test",
        "linkTypeApiNameBtoA": "test",
        "bSideObject": {
          "primaryKey": "key2",
          "objectType": "Employee"
        },
        "type": "deleteLink"
      }],
      deletedLinksCount: 0,
      deletedObjectsCount: 1,
      addedObjectCount: 1,
      modifiedObjectsCount: 1,
      addedLinksCount: 1
    }
  };
  const batchActionResponse = {
    edits: {
      type: "edits",
      edits: [{
        "objectType": "Developer",
        "primaryKey": "PalantirDev",
        "type": "addObject"
      }, {
        "objectType": "Contractor",
        "primaryKey": "Contractor1",
        "type": "modifyObject"
      }, {
        "aSideObject": {
          "primaryKey": "key1",
          "objectType": "Office"
        },
        "linkTypeApiNameAtoB": "test",
        "linkTypeApiNameBtoA": "test",
        "bSideObject": {
          "primaryKey": "key2",
          "objectType": "Employee"
        },
        "type": "addLink"
      }],
      deletedLinksCount: 0,
      deletedObjectsCount: 0,
      addedObjectCount: 1,
      modifiedObjectsCount: 1,
      addedLinksCount: 1
    }
  };
  it("Correctly unpacks edits and editedObjectTypes", () => {
    const remappedActionResponse = remapActionResponse(actionResponse);
    const remappedBatchActionResponse = remapActionResponse(batchActionResponse);
    expect(remappedActionResponse).toMatchInlineSnapshot(`
      {
        "addedLinks": [
          {
            "aSideObject": {
              "objectType": "Office",
              "primaryKey": "key1",
            },
            "bSideObject": {
              "objectType": "Employee",
              "primaryKey": "key2",
            },
            "linkTypeApiNameAtoB": "test",
            "linkTypeApiNameBtoA": "test",
          },
        ],
        "addedObjects": [
          {
            "objectType": "Developer",
            "primaryKey": "PalantirDev",
          },
        ],
        "deletedLinks": [
          {
            "aSideObject": {
              "objectType": "Office",
              "primaryKey": "key1",
            },
            "bSideObject": {
              "objectType": "Employee",
              "primaryKey": "key2",
            },
            "linkTypeApiNameAtoB": "test",
            "linkTypeApiNameBtoA": "test",
          },
        ],
        "deletedLinksCount": 0,
        "deletedObjects": [
          {
            "objectType": "Developer",
            "primaryKey": "PalantirDev",
          },
        ],
        "deletedObjectsCount": 1,
        "editedObjectTypes": [
          "Developer",
          "Contractor",
          "Office",
          "Employee",
        ],
        "modifiedObjects": [
          {
            "objectType": "Contractor",
            "primaryKey": "Contractor1",
          },
        ],
        "type": "edits",
      }
    `);
    expect(remappedBatchActionResponse).toMatchInlineSnapshot(`
      {
        "addedLinks": [
          {
            "aSideObject": {
              "objectType": "Office",
              "primaryKey": "key1",
            },
            "bSideObject": {
              "objectType": "Employee",
              "primaryKey": "key2",
            },
            "linkTypeApiNameAtoB": "test",
            "linkTypeApiNameBtoA": "test",
          },
        ],
        "addedObjects": [
          {
            "objectType": "Developer",
            "primaryKey": "PalantirDev",
          },
        ],
        "deletedLinks": [],
        "deletedLinksCount": 0,
        "deletedObjects": [],
        "deletedObjectsCount": 0,
        "editedObjectTypes": [
          "Developer",
          "Contractor",
          "Office",
          "Employee",
        ],
        "modifiedObjects": [
          {
            "objectType": "Contractor",
            "primaryKey": "Contractor1",
          },
        ],
        "type": "edits",
      }
    `);
  });
  it("actions are enumerable", async () => {
    const actions = Object.keys($Actions);
    expect(actions).toStrictEqual(["actionTakesAttachment", "actionTakesMedia", "actionTakesObjectSet", "createFooInterface", "createOffice", "createOfficeAndEmployee", "createStructPerson", "deleteBarInterface", "deleteFooInterface", "moveOffice", "promoteEmployee", "promoteEmployeeObject"]);
  });
});
function wrapper(fn) {
  return () => fn();
}
async function example() {
  await wrapper(async () => Promise.resolve("hi"))();
}
//# sourceMappingURL=actions.test.js.map