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
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type {
  ActionError,
  ActionResponse,
  FoundryApiError,
  Result,
} from "./generated/@myapp/dev-opi";
import {
  ActionValidationResult,
  ConfidentialClientAuth,
  FoundryClient,
} from "./generated/@myapp/dev-opi";

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
});

export function assertOkOrThrow<Response, Error extends FoundryApiError>(
  result: Result<Response, Error>,
): Response {
  if (result.type === "ok") {
    return result.value;
  } else {
    throw new Error(
      `Unexpected error: ${JSON.stringify(result.error)}, Stack: ${result.error
        .stack as string}`,
    );
  }
}
