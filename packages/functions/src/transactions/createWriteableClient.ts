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

import { createClientWithTransaction } from "@osdk/client/unstable-do-not-use";

import type { Client } from "@osdk/client";
import type {
  AddLinkApiNames,
  AddLinkSources,
  AddLinkTargets,
  CreatableObjectTypeProperties,
  CreatableObjectTypes,
  DeletableObjectLocators,
  RemoveLinkApiNames,
  RemoveLinkSources,
  RemoveLinkTargets,
  UpdatableObjectLocatorProperties,
  UpdatableObjectLocators,
} from "../edits/EditBatch.js";
import type { AnyEdit } from "../edits/types.js";
import type { WriteableClient, WriteMethods } from "./WriteableClient.js";

export function createWriteableClient<
  X extends AnyEdit = never,
>(
  ...args: Parameters<typeof createClientWithTransaction>
): WriteableClient<X> {
  const client = createClientWithTransaction(...args);
  // We use define properties because the client has non-enumerable properties that we want to preserve.
  const writeableClient = Object.defineProperties<Client>(
    client,
    {
      link: {
        value: async function<
          SOL extends AddLinkSources<X>,
          A extends AddLinkApiNames<X, SOL>,
        >(
          source: SOL,
          apiName: A,
          target: AddLinkTargets<X, SOL, A>,
        ): Promise<void> {
          await Promise.resolve();
          return;
        },
      },
      create: {
        value: async function<OTD extends CreatableObjectTypes<X>>(
          obj: OTD,
          properties: CreatableObjectTypeProperties<X, OTD>,
        ): Promise<void> {
          await Promise.resolve();
          return;
        },
      },
      update: {
        value: async function<
          SOL extends UpdatableObjectLocators<X>,
          OTD extends UpdatableObjectLocatorProperties<X, SOL>,
        >(
          locator: SOL,
          properties: OTD,
        ): Promise<void> {
          await Promise.resolve();
          return;
        },
      },
      delete: {
        value: async function<OL extends DeletableObjectLocators<X>>(
          obj: OL,
        ): Promise<void> {
          await Promise.resolve();
          return;
        },
      },
      unlink: {
        value: async function<
          SOL extends RemoveLinkSources<X>,
          A extends RemoveLinkApiNames<X, SOL>,
        >(
          source: SOL,
          apiName: A,
          target: RemoveLinkTargets<X, SOL, A>,
        ): Promise<void> {
          await Promise.resolve();
          return;
        },
      },
    } satisfies Record<keyof WriteMethods, PropertyDescriptor>,
  ) as WriteableClient<X>;
  return writeableClient;
}
