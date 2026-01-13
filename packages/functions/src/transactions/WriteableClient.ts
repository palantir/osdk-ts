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

import type { Client } from "@osdk/client";

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
import type { EditRequestManager } from "./EditRequestManager.js";

/** @internal */
export const writeableClientContext: unique symbol = Symbol(
  "writeableClientContext",
);

export interface WriteableClientContext {
  ontologyRid: string | Promise<string>;
  transactionId: string;
  editRequestManager: EditRequestManager;
}

export interface WriteableClient<X extends AnyEdit>
  extends Client, WriteMethods<X>
{
  [writeableClientContext]: WriteableClientContext;
}

export interface WriteMethods<X extends AnyEdit> {
  link: <
    SOL extends AddLinkSources<X>,
    A extends AddLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: AddLinkTargets<X, SOL, A>,
  ) => Promise<void>;

  unlink: <
    SOL extends RemoveLinkSources<X>,
    A extends RemoveLinkApiNames<X, SOL>,
  >(
    source: SOL,
    apiName: A,
    target: RemoveLinkTargets<X, SOL, A>,
  ) => Promise<void>;

  create: <OTD extends CreatableObjectOrInterfaceTypes<X>>(
    obj: OTD,
    properties: CreatableObjectOrInterfaceTypeProperties<X, OTD>,
  ) => Promise<void>;

  delete: <OL extends DeletableObjectOrInterfaceLocators<X>>(
    obj: OL,
  ) => Promise<void>;

  update: <OL extends UpdatableObjectOrInterfaceLocators<X>>(
    obj: OL,
    properties: UpdatableObjectOrInterfaceLocatorProperties<X, OL>,
  ) => Promise<void>;
}
