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

import { Employee } from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
} from "@osdk/shared.test";
import type { Mock } from "vitest";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Edits } from "../edits/types.js";
import { createWriteableClient } from "./createWriteableClient.js";
import { EditRequestManager } from "./EditRequestManager.js";
import type { WriteableClient } from "./WriteableClient.js";

describe("createWriteableClient", () => {
  let client: WriteableClient<Edits.Object<Employee>>;
  let apiServer: SetupServer;
  let baseUrl: string;
  let mockedRequestHandler: Mock<
    Parameters<typeof MockOntologiesV2.OntologyTransactions.postEdits>[1]
  >;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new LegacyFauxFoundry(),
      createWriteableClient.bind(null, "transaction")
    );
    ({ client, apiServer } = testSetup);
    baseUrl = testSetup.fauxFoundry.baseUrl;

    mockedRequestHandler = vi.fn<
      Parameters<typeof MockOntologiesV2.OntologyTransactions.postEdits>[1]
    >(() => ({ status: 200, body: {} }));
    apiServer.use(
      MockOntologiesV2.OntologyTransactions.postEdits(
        baseUrl,
        mockedRequestHandler
      )
    );

    return () => {
      apiServer.close();
    };
  });

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("flushes pending edits when a read is awaited", async () => {
    const flushSpy = vi.spyOn(
      EditRequestManager.prototype,
      "flushPendingEdits"
    );

    void client.create(Employee, { employeeId: 1, fullName: "John Doe" });

    expect(flushSpy).not.toHaveBeenCalled();

    // Awaiting any read must flush the buffered edit first.
    await client(Employee).fetchOne(50030);

    expect(flushSpy).toHaveBeenCalledTimes(1);
    expect(mockedRequestHandler).toHaveBeenCalledTimes(1);
    expect(await mockedRequestHandler.mock.calls[0][0].request.json())
      .toMatchInlineSnapshot(`
        {
          "edits": [
            {
              "objectType": "Employee",
              "properties": {
                "employeeId": 1,
                "fullName": "John Doe",
              },
              "type": "addObject",
            },
          ],
        }
      `);
  });
});
