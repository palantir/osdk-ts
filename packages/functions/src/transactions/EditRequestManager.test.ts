/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { TransactionEdit } from "@osdk/foundry.ontologies";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
} from "@osdk/shared.test";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import type { Mock } from "vitest";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { createWriteableClient } from "./createWriteableClient.js";
import { EditRequestManager } from "./EditRequestManager.js";
import type { WriteableClient } from "./WriteableClient.js";

describe("EditRequestManager", () => {
  let client: WriteableClient<any>;
  let apiServer: SetupServer;
  let baseUrl: string;
  let maybeDeferServer: DeferredPromise<void> | undefined;
  let mockedRequestHandler: Mock<
    Parameters<typeof MockOntologiesV2.OntologyTransactions.postEdits>[1]
  >;
  let editRequestManager: EditRequestManager;

  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new LegacyFauxFoundry(),
      createWriteableClient.bind(null, "transaction"),
    );
    ({ client, apiServer } = testSetup);
    baseUrl = testSetup.fauxFoundry.baseUrl;

    mockedRequestHandler = vi.fn<
      Parameters<typeof MockOntologiesV2.OntologyTransactions.postEdits>[1]
    >(async () => {
      if (maybeDeferServer) {
        await maybeDeferServer.promise;
      }
      return {
        status: 200,
        body: {},
      };
    });
    apiServer.use(
      MockOntologiesV2.OntologyTransactions.postEdits(
        baseUrl,
        mockedRequestHandler,
      ),
    );

    return () => {
      apiServer.close();
    };
  });

  beforeEach(() => {
    editRequestManager = new EditRequestManager(client);
    vi.restoreAllMocks();
  });

  const addLinkEdit: TransactionEdit = {
    type: "addLink",
    primaryKey: "test-primary-key",
    linkedObjectPrimaryKey: "test-linked-object-primary-key",
    linkType: "test-link-type",
    objectType: "test-object-type",
  };

  const addObjectEdit: TransactionEdit = {
    type: "addObject",
    objectType: "test-object-type",
    properties: {},
  };

  it("will stage single edits in a row", async () => {
    await editRequestManager.postEdit(addLinkEdit);

    expect(mockedRequestHandler).toHaveBeenCalledTimes(1);
    expect(await mockedRequestHandler.mock.calls[0][0].request.json())
      .toMatchInlineSnapshot(
        `
        {
          "edits": [
            {
              "linkType": "test-link-type",
              "linkedObjectPrimaryKey": "test-linked-object-primary-key",
              "objectType": "test-object-type",
              "primaryKey": "test-primary-key",
              "type": "addLink",
            },
          ],
        }
      `,
      );

    await editRequestManager.postEdit(addObjectEdit);

    expect(mockedRequestHandler).toHaveBeenCalledTimes(2);
    expect(await mockedRequestHandler.mock.calls[1][0].request.json())
      .toMatchInlineSnapshot(
        `
        {
          "edits": [
            {
              "objectType": "test-object-type",
              "properties": {},
              "type": "addObject",
            },
          ],
        }
      `,
      );
  });

  it("stages multiple edits from the same tick in one request in order", async () => {
    void editRequestManager.postEdit(addLinkEdit);
    void editRequestManager.postEdit(addObjectEdit);
    await editRequestManager.postEdit(addObjectEdit);

    expect(mockedRequestHandler).toHaveBeenCalledTimes(1);
    expect(await mockedRequestHandler.mock.calls[0][0].request.json())
      .toMatchInlineSnapshot(
        `
        {
          "edits": [
            {
              "linkType": "test-link-type",
              "linkedObjectPrimaryKey": "test-linked-object-primary-key",
              "objectType": "test-object-type",
              "primaryKey": "test-primary-key",
              "type": "addLink",
            },
            {
              "objectType": "test-object-type",
              "properties": {},
              "type": "addObject",
            },
            {
              "objectType": "test-object-type",
              "properties": {},
              "type": "addObject",
            },
          ],
        }
      `,
      );

    await editRequestManager.postEdit(addLinkEdit);
    expect(mockedRequestHandler).toHaveBeenCalledTimes(2);
    expect(await mockedRequestHandler.mock.calls[1][0].request.json())
      .toMatchInlineSnapshot(`
        {
          "edits": [
            {
              "linkType": "test-link-type",
              "linkedObjectPrimaryKey": "test-linked-object-primary-key",
              "objectType": "test-object-type",
              "primaryKey": "test-primary-key",
              "type": "addLink",
            },
          ],
        }
      `);
  });

  it("handles edits posted while a request is in flight", async () => {
    maybeDeferServer = pDefer();
    void editRequestManager.postEdit(
      addLinkEdit,
    );
    await new Promise(resolve => setTimeout(resolve, 0)); // Ensure the initial request is in flight
    const secondPromise: Promise<void> = editRequestManager.postEdit(
      addObjectEdit,
    );
    void editRequestManager.postEdit(addObjectEdit);
    maybeDeferServer.resolve();

    await secondPromise; // Awaiting the second edit should ensure the first resolves first and should also resolve the third since it was dispatched in the same tick

    expect(mockedRequestHandler).toHaveBeenCalledTimes(2);
    expect(await mockedRequestHandler.mock.calls[0][0].request.json())
      .toMatchInlineSnapshot(
        `
        {
          "edits": [
            {
              "linkType": "test-link-type",
              "linkedObjectPrimaryKey": "test-linked-object-primary-key",
              "objectType": "test-object-type",
              "primaryKey": "test-primary-key",
              "type": "addLink",
            },
          ],
        }
      `,
      );
    expect(await mockedRequestHandler.mock.calls[1][0].request.json())
      .toMatchInlineSnapshot(`
        {
          "edits": [
            {
              "objectType": "test-object-type",
              "properties": {},
              "type": "addObject",
            },
            {
              "objectType": "test-object-type",
              "properties": {},
              "type": "addObject",
            },
          ],
        }
      `);
  });

  describe("flushPendingEdits", () => {
    it("immediately dispatches pending edits without timeout", async () => {
      void editRequestManager.postEdit(addLinkEdit);
      void editRequestManager.postEdit(addObjectEdit);

      expect(mockedRequestHandler).toHaveBeenCalledTimes(0);

      await editRequestManager.flushPendingEdits();

      expect(mockedRequestHandler).toHaveBeenCalledTimes(1);
      expect(await mockedRequestHandler.mock.calls[0][0].request.json())
        .toMatchInlineSnapshot(`
          {
            "edits": [
              {
                "linkType": "test-link-type",
                "linkedObjectPrimaryKey": "test-linked-object-primary-key",
                "objectType": "test-object-type",
                "primaryKey": "test-primary-key",
                "type": "addLink",
              },
              {
                "objectType": "test-object-type",
                "properties": {},
                "type": "addObject",
              },
            ],
          }
        `);
    });

    it("waits for in-flight and queued requests to complete", async () => {
      maybeDeferServer = pDefer();
      const firstEdit = editRequestManager.postEdit(addLinkEdit);
      await new Promise(resolve => setTimeout(resolve, 0));

      const secondEdit = editRequestManager.postEdit(addObjectEdit);

      const flushPromise = editRequestManager.flushPendingEdits();

      expect(mockedRequestHandler).toHaveBeenCalledTimes(1);

      maybeDeferServer.resolve();
      await Promise.all([firstEdit, secondEdit, flushPromise]);

      expect(mockedRequestHandler).toHaveBeenCalledTimes(2);
      expect(await mockedRequestHandler.mock.calls[0][0].request.json())
        .toMatchInlineSnapshot(`
          {
            "edits": [
              {
                "linkType": "test-link-type",
                "linkedObjectPrimaryKey": "test-linked-object-primary-key",
                "objectType": "test-object-type",
                "primaryKey": "test-primary-key",
                "type": "addLink",
              },
            ],
          }
        `);
      expect(await mockedRequestHandler.mock.calls[1][0].request.json())
        .toMatchInlineSnapshot(`
          {
            "edits": [
              {
                "objectType": "test-object-type",
                "properties": {},
                "type": "addObject",
              },
            ],
          }
        `);
    });

    it("does nothing when there are no pending edits", async () => {
      await editRequestManager.flushPendingEdits();

      expect(mockedRequestHandler).not.toHaveBeenCalled();
    });

    it("cancels timeout and immediately dispatches edits", async () => {
      const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");

      void editRequestManager.postEdit(addLinkEdit);

      await editRequestManager.flushPendingEdits();

      expect(clearTimeoutSpy).toHaveBeenCalled();
      expect(mockedRequestHandler).toHaveBeenCalledTimes(1);
      expect(await mockedRequestHandler.mock.calls[0][0].request.json())
        .toMatchInlineSnapshot(`
          {
            "edits": [
              {
                "linkType": "test-link-type",
                "linkedObjectPrimaryKey": "test-linked-object-primary-key",
                "objectType": "test-object-type",
                "primaryKey": "test-primary-key",
                "type": "addLink",
              },
            ],
          }
        `);

      clearTimeoutSpy.mockRestore();
    });

    it("ensures all requests complete when multiple edits are queued", async () => {
      maybeDeferServer = pDefer();
      const firstEdit = editRequestManager.postEdit(addLinkEdit);
      await new Promise(resolve => setTimeout(resolve, 0));

      const secondEdit = editRequestManager.postEdit(addObjectEdit);
      await new Promise(resolve => setTimeout(resolve, 0));

      const thirdEdit = editRequestManager.postEdit(addLinkEdit);

      const flushPromise = editRequestManager.flushPendingEdits();

      maybeDeferServer.resolve();
      await Promise.all([firstEdit, secondEdit, thirdEdit, flushPromise]);

      expect(mockedRequestHandler).toHaveBeenCalledTimes(2);
      expect(await mockedRequestHandler.mock.calls[0][0].request.json())
        .toMatchInlineSnapshot(`
          {
            "edits": [
              {
                "linkType": "test-link-type",
                "linkedObjectPrimaryKey": "test-linked-object-primary-key",
                "objectType": "test-object-type",
                "primaryKey": "test-primary-key",
                "type": "addLink",
              },
            ],
          }
        `);
      expect(await mockedRequestHandler.mock.calls[1][0].request.json())
        .toMatchInlineSnapshot(`
          {
            "edits": [
              {
                "linkType": "test-link-type",
                "linkedObjectPrimaryKey": "test-linked-object-primary-key",
                "objectType": "test-object-type",
                "primaryKey": "test-primary-key",
                "type": "addLink",
              },
              {
                "objectType": "test-object-type",
                "properties": {},
                "type": "addObject",
              },
            ],
          }
        `);
    });
  });
});
