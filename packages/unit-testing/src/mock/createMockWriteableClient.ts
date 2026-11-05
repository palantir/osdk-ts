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

import { createEditBatch, type EditBatch } from "@osdk/functions";
import {
  type AnyEdit,
  writeableClientContext,
  type WriteableClientContext,
} from "@osdk/functions/internal";

import type { MockWriteableClient } from "../api/MockWriteableClient.js";
import { createMockClient } from "./createMockClient.js";

const noop = (): Promise<void> => Promise.resolve();

export function createMockWriteableClient<
  X extends AnyEdit = never,
>(): MockWriteableClient<X> {
  const mockClient = createMockClient() as MockWriteableClient<X>;

  let batch: EditBatch<X> = createEditBatch<X>(mockClient);

  mockClient.link = (source, apiName, target) => {
    batch.link(source, apiName, target);
    return Promise.resolve();
  };
  mockClient.unlink = (source, apiName, target) => {
    batch.unlink(source, apiName, target);
    return Promise.resolve();
  };
  mockClient.create = (obj, properties) => {
    batch.create(obj, properties);
    return Promise.resolve();
  };
  mockClient.update = (obj, properties) => {
    batch.update(obj, properties);
    return Promise.resolve();
  };
  mockClient.delete = (obj) => {
    batch.delete(obj);
    return Promise.resolve();
  };
  mockClient.getEdits = () => batch.getEdits();
  mockClient.clearEdits = () => {
    batch = createEditBatch<X>(mockClient);
  };

  Object.defineProperty(mockClient, writeableClientContext, {
    value: {
      ontologyRid: "ri.ontology.main.ontology.mock",
      transactionId: "mock-transaction",
      editRequestManager: {
        flushPendingEdits: noop,
      } as unknown as WriteableClientContext["editRequestManager"],
    } satisfies WriteableClientContext,
    enumerable: false,
  });

  return mockClient;
}
