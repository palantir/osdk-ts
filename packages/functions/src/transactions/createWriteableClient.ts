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

import type { Client, createClient } from "@osdk/client";
import type {
  AddLinkApiNames,
  AddLinkSources,
  AddLinkTargets,
  CreatableObjectOrInterfaceTypeProperties,
  CreatableObjectOrInterfaceTypes,
  DeletableObjectOrInterfaceLocators,
  RemoveLinkApiNames,
  RemoveLinkSources,
  RemoveLinkTargets,
  UpdatableObjectOrInterfaceLocatorProperties,
  UpdatableObjectOrInterfaceLocators,
} from "../edits/EditBatch.js";
import type { AnyEdit } from "../edits/types.js";
import { EditRequestManager } from "./EditRequestManager.js";
import { toPropertyDataValue } from "./toPropertyDataValue.js";
import type {
  WriteableClient,
  WriteableClientContext,
  WriteMethods,
} from "./WriteableClient.js";
import { writeableClientContext } from "./WriteableClient.js";

export function createWriteableClient<
  X extends AnyEdit = never,
>(
  transactionId: string,
  ...args: Parameters<typeof createClient>
): WriteableClient<X> {
  const ontologyRid = args[1];

  const client = createClientWithTransaction(
    transactionId,
    async () => {},
    ...args,
  ) as Client;

  const editRequestManager = new EditRequestManager(
    client as WriteableClient<any>, // This cast is safe because we create the writeable client properties below.
  );

  // We use define properties because the client has non-enumerable properties that we want to preserve.
  const writeableClient = Object.defineProperties<Client>(
    client,
    {
      link: {
        value: function<
          SOL extends AddLinkSources<X>,
          A extends AddLinkApiNames<X, SOL>,
        >(
          source: SOL,
          apiName: A,
          target: AddLinkTargets<X, SOL, A>,
        ): Promise<void> {
          if (!Array.isArray(target)) {
            return editRequestManager.postEdit({
              type: "addLink",
              objectType: source.$apiName,
              primaryKey: source.$primaryKey,
              linkType: apiName,
              linkedObjectPrimaryKey: target.$primaryKey,
            });
          }
          const promises: Promise<void>[] = [];

          for (const elem of target) {
            promises.push(
              editRequestManager.postEdit({
                type: "addLink",
                objectType: source.$apiName,
                primaryKey: source.$primaryKey,
                linkType: apiName,
                linkedObjectPrimaryKey: elem.$primaryKey,
              }),
            );
          }
          return Promise.all(promises).then(() => undefined);
        },
      },
      unlink: {
        value: function<
          SOL extends RemoveLinkSources<X>,
          A extends RemoveLinkApiNames<X, SOL>,
        >(
          source: SOL,
          apiName: A,
          target: RemoveLinkTargets<X, SOL, A>,
        ): Promise<void> {
          if (!Array.isArray(target)) {
            return editRequestManager.postEdit({
              type: "removeLink",
              objectType: source.$apiName,
              primaryKey: source.$primaryKey,
              linkType: apiName,
              linkedObjectPrimaryKey: target.$primaryKey,
            });
          }
          const promises: Promise<void>[] = [];
          for (const elem of target) {
            promises.push(editRequestManager.postEdit({
              type: "removeLink",
              objectType: source.$apiName,
              primaryKey: source.$primaryKey,
              linkType: apiName,
              linkedObjectPrimaryKey: elem.$primaryKey,
            }));
          }
          return Promise.all(promises).then(() => undefined);
        },
      },
      create: {
        value: async function<OTD extends CreatableObjectOrInterfaceTypes<X>>(
          obj: OTD,
          properties: CreatableObjectOrInterfaceTypeProperties<X, OTD>,
        ): Promise<void> {
          const propertyMap: { [propertyName: string]: unknown } = {};
          for (const [key, value] of Object.entries(properties)) {
            if (key.startsWith("$")) continue;
            propertyMap[key] = toPropertyDataValue(value);
          }
          return editRequestManager.postEdit({
            type: "addObject",
            objectType: obj.apiName,
            properties: propertyMap,
          });
        },
      },
      update: {
        value: function<
          SOL extends UpdatableObjectOrInterfaceLocators<X>,
          OTD extends UpdatableObjectOrInterfaceLocatorProperties<X, SOL>,
        >(
          locator: SOL,
          properties: OTD,
        ): Promise<void> {
          const propertyMap: { [propertyName: string]: unknown } = {};
          for (const [key, value] of Object.entries(properties)) {
            if (key.startsWith("$")) continue;
            propertyMap[key] = toPropertyDataValue(value);
          }
          return editRequestManager.postEdit({
            type: "modifyObject",
            objectType: locator.$apiName,
            primaryKey: locator.$primaryKey,
            properties: propertyMap,
          });
        },
      },
      delete: {
        value: function<OL extends DeletableObjectOrInterfaceLocators<X>>(
          obj: OL,
        ): Promise<void> {
          return editRequestManager.postEdit({
            type: "deleteObject",
            objectType: obj.$apiName,
            primaryKey: obj.$primaryKey,
          });
        },
      },
      [writeableClientContext]: {
        value: {
          ontologyRid,
          transactionId,
          editRequestManager,
        } satisfies WriteableClientContext,
      },
    } satisfies Record<
      keyof WriteMethods<any> | typeof writeableClientContext,
      PropertyDescriptor
    >,
  ) as WriteableClient<X>;

  return writeableClient;
}
