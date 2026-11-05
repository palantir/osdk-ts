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

import type {
  ActionDefinition,
  ActionEditResponse,
  ActionReturnTypeForOptions,
  ActionReturnValueResponse,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from "@osdk/api";
import type { ActionTypeV2, QueryDataType } from "@osdk/foundry.ontologies";
import { FauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";

import type { SyncApplyActionResponseWithReturnValue } from "../actions/SyncApplyActionResponseWithReturnValue.js";
import { createClient } from "../createClient.js";
import type { ObservableClient } from "./ObservableClient.js";
import { createObservableClient } from "./ObservableClient.js";

interface ReturnsNameSignatures {
  applyAction<OP extends ApplyActionOptions>(
    args: { name: string },
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP, string>>;

  batchApplyAction<OP extends ApplyBatchActionOptions>(
    args: ReadonlyArray<{ name: string }>,
    options?: OP,
  ): Promise<ActionReturnTypeForOptions<OP>>;
}

const returnsName: ActionDefinition<ReturnsNameSignatures> = {
  type: "action",
  apiName: "returnsName",
};

describe("ObservableClient action return values", () => {
  let observableClient: ObservableClient;

  beforeAll(() => {
    const { client, apiServer, fauxFoundry } = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    const def: ActionTypeV2 & { returnType: QueryDataType } = {
      apiName: "returnsName",
      parameters: {
        name: {
          dataType: { type: "string" },
          required: true,
          displayName: "Name",
          typeClasses: [],
        },
      },
      rid: "ri.actions.main.action-type.returnsName",
      status: "ACTIVE",
      operations: [],
      returnType: { type: "string" },
    };
    fauxFoundry.getDefaultOntology().registerActionType(
      def,
      (_batch, payload): SyncApplyActionResponseWithReturnValue => ({
        validation: { parameters: {}, result: "VALID", submissionCriteria: [] },
        edits: {
          type: "edits",
          edits: [],
          addedObjectCount: 0,
          modifiedObjectsCount: 0,
          deletedObjectsCount: 0,
          addedLinksCount: 0,
          deletedLinksCount: 0,
        },
        returnValue: `Hello ${payload.parameters.name}`,
      }),
    );
    observableClient = createObservableClient(client);

    return () => {
      apiServer.close();
    };
  });

  it("includes the return value alongside the edits", async () => {
    const result = await observableClient.applyAction(returnsName, {
      name: "Anna",
    });

    expectTypeOf(result).toEqualTypeOf<
      ActionEditResponse & ActionReturnValueResponse<string>
    >();
    expect(result).toMatchObject({ type: "edits", returnValue: "Hello Anna" });
  });

  it("does not type a return value for batches", () => {
    const applyBatch = () =>
      observableClient.applyAction(returnsName, [{ name: "Anna" }]);

    expectTypeOf(
      applyBatch,
    ).returns.resolves.toEqualTypeOf<ActionEditResponse>();
  });
});
