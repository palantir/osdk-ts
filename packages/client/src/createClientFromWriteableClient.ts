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

import { additionalContext, type Client } from "./Client.js";
import { createClientWithTransaction } from "./createClient.js";

/**
 * Experimental helper method to create a new client instantiated with a transaction id
 * Will extract the transactionId, URL, Ontology RID, and token from the original client
 * unless overridden.
 *
 * @param writeableClient A client initiated with a transaction id, such as a WriteableClient
 * @param options A set of options to override from the provided client.
 * @returns Client instantiated on a transaction
 */
export function createClientFromWriteableClient(
  writeableClient: Client,
  options?: {
    transactionId?: string;
    baseUrl?: string;
    ontologyRid?: string | Promise<string>;
    tokenProvider?: () => Promise<string>;
  },
): Client {
  const ctx = writeableClient[additionalContext];

  if (ctx.transactionId === undefined || ctx.flushEdits === undefined) {
    throw new Error(
      "createClientFromWriteableClient: provided client has no active transaction",
    );
  }

  return createClientWithTransaction(
    options?.transactionId ?? ctx.transactionId,
    ctx.flushEdits,
    options?.baseUrl ?? ctx.baseUrl,
    options?.ontologyRid ?? ctx.ontologyRid,
    options?.tokenProvider ?? ctx.tokenProvider,
  );
}
