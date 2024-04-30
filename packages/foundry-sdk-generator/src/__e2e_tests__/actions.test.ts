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

import { apiServer } from "@osdk/shared.test";
import { fail } from "assert";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  ActionExecutionMode,
  ActionValidationResult,
  ConfidentialClientAuth,
  FoundryClient,
  ReturnEditsMode,
  visitError,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  ActionError,
  ActionResponse,
  Edits,
  ErrorVisitor,
  GetObjectError,
  Result,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  Employee,
  Office,
} from "../generatedNoCheck/@test-app/osdk/ontology/objects";
import { assertErrOrThrow, assertOkOrThrow } from "./resultUtils";

describe("test", () => {
  let client: FoundryClient<ConfidentialClientAuth>;
  beforeAll(async () => {
    apiServer.listen();
    client = new FoundryClient({
      url: "https://stack.palantir.com",
      auth: new ConfidentialClientAuth({
        clientId: "myClientId",
        clientSecret: "myClientSecret",
        url: "https://stack.palantir.com",
      }),
    });

    await client.auth.signInAsServiceUser();
  });

  afterAll(() => {
    apiServer.close();
  });

  it("Applies Action, and Validates", async () => {
    const result: Result<ActionResponse, ActionError> = await client.ontology
      .actions.moveOffice({
        officeId: "NYC",
        newAddress: "123 Main Street",
        newCapacity: 100,
      });

    const actionResponse = assertOkOrThrow(result);
    expect(actionResponse.validation.result).toEqual(
      ActionValidationResult.VALID,
    );
  });
  it("Applies Action, Get Results, and Validates by default", async () => {
    const result: Result<
      ActionResponse<Edits<Office, void>>,
      ActionError
    > = await client.ontology.actions.createOffice(
      {
        officeId: "NYC",
        address: "123 Main Street",
        capacity: 100,
      },
      {
        returnEdits: ReturnEditsMode.ALL,
      },
    );

    const actionResponse = assertOkOrThrow(result);
    if (actionResponse.edits.type === "edits") {
      expect(actionResponse.edits.added.length).toBe(1);
      const objectEdit = actionResponse.edits.added[0]!;
      expect(objectEdit.primaryKey).toBe("NYC");
      const officeResult: Result<Office, GetObjectError> = await objectEdit
        .get();
      const officeImpl: Office = assertOkOrThrow(officeResult);
      expect(officeImpl.__apiName).toBe("Office");
      expect(officeImpl.__primaryKey).toBe("NYC");
      expect(officeImpl.__rid).toBe(
        "ri.phonograph2-objects.main.object.c0c0c0c0-c0c0-c0c0-c0c0-c0c0c0c0c0c0",
      );
      const officeResult2: Result<Office, GetObjectError> = await objectEdit
        .fetchOneWithErrors();
      const officeImpl2: Office = assertOkOrThrow(officeResult2);
      expect(officeImpl2.__apiName).toBe("Office");
      expect(officeImpl2.__primaryKey).toBe("NYC");
      expect(officeImpl2.__rid).toBe(
        "ri.phonograph2-objects.main.object.c0c0c0c0-c0c0-c0c0-c0c0-c0c0c0c0c0c0",
      );
    }
  });

  it("Applies Action, Get Results, and Validates explicitly", async () => {
    const result: Result<
      ActionResponse<Edits<void, Office>>,
      ActionError
    > = await client.ontology.actions.moveOffice(
      {
        officeId: "NYC",
        newAddress: "123 Main Street",
        newCapacity: 100,
      },
      {
        mode: ActionExecutionMode.VALIDATE_AND_EXECUTE,
        returnEdits: ReturnEditsMode.ALL,
      },
    );

    const actionResponse = assertOkOrThrow(result);
    if (actionResponse.edits.type === "edits") {
      expect(actionResponse.edits.modified.length).toBe(1);
      const edit = actionResponse.edits.modified[0]!;
      expect(edit.primaryKey).toBe("NYC");
      const officeResult: Result<Office, GetObjectError> = await edit.get();
      const officeImpl: Office = assertOkOrThrow(officeResult);
      expect(officeImpl.__apiName).toBe("Office");
      expect(officeImpl.__primaryKey).toBe("NYC");
      expect(officeImpl.__rid).toBe(
        "ri.phonograph2-objects.main.object.c0c0c0c0-c0c0-c0c0-c0c0-c0c0c0c0c0c0",
      );
      expect(actionResponse.validation.result).toEqual(
        ActionValidationResult.VALID,
      );
    }
  });

  it("Applies Action, Get Results, and Validates on a created union type", async () => {
    const result: Result<
      ActionResponse<Edits<Office | Employee, void>>,
      ActionError
    > = await client.ontology.actions.createOfficeAndEmployee(
      {
        officeId: "NYC",
        employeeId: 50032,
      },
      {
        returnEdits: ReturnEditsMode.ALL,
      },
    );

    const actionResponse = assertOkOrThrow(result);
    const edits = actionResponse.edits;
    if (edits.type === "edits") {
      expect(edits.added.length).toBe(2);
      for (const objectEdit of edits.added) {
        const result1: Result<Office | Employee, GetObjectError> =
          await objectEdit.get();
        const impl: Office | Employee = assertOkOrThrow(result1);
        if (impl.__apiName === "Employee") {
          const employeeImpl: Employee = impl;
          expect(employeeImpl.__primaryKey).toBe(50032);
          expect(employeeImpl.__apiName).toBe("Employee");
          expect(employeeImpl.__rid).toBe(
            "ri.phonograph2-objects.main.object.b9a0b2b0-0a2b-0b8b-9e4b-a9a9b9a0b9a0",
          );
        } else if (impl.__apiName === "Office") {
          const officeImpl: Office = impl;
          expect(officeImpl.__primaryKey).toBe("NYC");
          expect(officeImpl.__apiName).toBe("Office");
          expect(officeImpl.__rid).toBe(
            "ri.phonograph2-objects.main.object.c0c0c0c0-c0c0-c0c0-c0c0-c0c0c0c0c0c0",
          );
        }
      }
    }
  });

  it("Applies Action, Get Results, and Validates on bulk edits", async () => {
    const result: Result<
      ActionResponse<Edits<void, Office>>,
      ActionError
    > = await client.ontology.actions.moveOffice(
      {
        officeId: "SEA",
        newAddress: "456 Main Street",
        newCapacity: 1000,
      },
      { returnEdits: ReturnEditsMode.ALL },
    );
    const ok = assertOkOrThrow(result);
    expect(ok.edits.type).toBe("bulkEdits");
  });

  it("Fails to apply action", async () => {
    const result: Result<ActionResponse, ActionError> = await client.ontology
      .actions.moveOffice({
        officeId: "LAX",
      });
    const err = assertErrOrThrow(result);

    const visitor: ErrorVisitor<ActionError, void> = {
      ApplyActionFailed: error => {
        expect(error).toMatchObject({
          name: "ApplyActionFailed",
          errorType: "INVALID_ARGUMENT",
          errorInstanceId: "errorInstanceId",
          statusCode: 400,
        });
      },
      default: error => {
        fail(`Unexpected error: ${error.errorName as string}`);
      },
    };

    visitError(err, visitor);
  });

  it("Validates Action", async () => {
    const result: Result<ActionResponse, ActionError> = await client.ontology
      .actions.moveOffice(
        {
          officeId: "SEA",
          newAddress: "456 Pike Place",
          newCapacity: 40,
        },
        {
          mode: ActionExecutionMode.VALIDATE_ONLY,
        },
      );

    const actionResponse = assertOkOrThrow(result);
    expect(actionResponse.validation.result).toEqual(
      ActionValidationResult.INVALID,
    );
  });

  it("Actions takes ObjectSet", async () => {
    const employees = client.ontology.objects.Employee;
    const result: Result<ActionResponse, ActionError> = await client.ontology
      .actions.actionTakesObjectSet({
        employees,
      });

    assertOkOrThrow(result);
  });
});
