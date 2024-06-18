/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  QueryDefinition,
} from "@osdk/api";
import type {
  ActionSignatureFromDef,
  AttachmentSignature,
  QuerySignatureFromDef,
} from "@osdk/client.api";
import { symbolClientContext } from "@osdk/shared.client";
import type { Logger } from "pino";
import { createActionInvoker } from "./actions/createActionInvoker.js";
import type { Client } from "./Client.js";
import { createAttachmentReader } from "./createAttachmentReader.js";
import { createMinimalClient } from "./createMinimalClient.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import type { Attachment } from "./object/Attachment.js";
import { isAttachment } from "./object/Attachment.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { MinimalObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import { createQueryInvoker } from "./queries/createQueryInvoker.js";

export function createClientInternal(
  objectSetFactory: ObjectSetFactory<any, any>, // first so i can bind
  baseUrl: string,
  ontologyRid: string,
  tokenProvider: () => Promise<string>,
  options: { logger?: Logger } | undefined = undefined,
  fetchFn: typeof globalThis.fetch = fetch,
): Client {
  const clientCtx: MinimalClient = createMinimalClient(
    { ontologyRid },
    baseUrl,
    tokenProvider,
    options,
    fetchFn,
    objectSetFactory,
  );

  function clientFn<
    T extends
      | ObjectOrInterfaceDefinition
      | ActionDefinition<any, any, any>
      | QueryDefinition<any, any>
      | Attachment,
  >(o: T): T extends ObjectTypeDefinition<any> ? ObjectSet<T>
    : T extends InterfaceDefinition<any, any> ? MinimalObjectSet<T>
    : T extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<T>
    : T extends QueryDefinition<any, any> ? QuerySignatureFromDef<T>
    : T extends Attachment ? AttachmentSignature
    : never
  {
    if (isAttachment(o)) {
      return createAttachmentReader(clientCtx, o) as any;
    }
    if (o.type === "object" || o.type === "interface") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return objectSetFactory(o, clientCtx) as any;
    } else if (o.type === "action") {
      clientCtx.ontologyProvider.maybeSeed(o);
      return createActionInvoker(clientCtx, o) as ActionSignatureFromDef<
        any
      > as any;
    } else if (o.type === "query") {
      return createQueryInvoker(clientCtx, o) as QuerySignatureFromDef<
        any
      > as any;
    } else {
      throw new Error("not implemented");
    }
  }

  const client: Client = Object.defineProperties<Client>(
    clientFn as Client,
    {
      [symbolClientContext]: {
        value: clientCtx,
      },
    } satisfies Record<keyof Client, PropertyDescriptor>,
  );

  return client;
}

export const createClient = createClientInternal.bind(
  undefined,
  createObjectSet,
);
