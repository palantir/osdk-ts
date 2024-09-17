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
  CompileTimeMetadata,
  MinInterfaceDef,
  MinObjectDef,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type { MinimalObjectSet, ObjectSet, Osdk } from "@osdk/client.api";
import type { Client } from "../Client.js";
import type { BulkLinkResult } from "./createBulkLinksAsyncIterFactory.js";

export interface UnstableClient extends Client {
  <Q extends (MinInterfaceDef<any, any>)>(
    o: Q,
  ): unknown extends CompileTimeMetadata<Q>["objectSet"] ? MinimalObjectSet<Q>
    : CompileTimeMetadata<Q>["objectSet"];

  <Q extends (MinObjectDef<any, any>)>(
    o: Q,
  ): ObjectSet<Q>;

  __UNSTABLE_preexistingObjectSet<T extends ObjectOrInterfaceDefinition>(
    type: T,
    rid: string,
  ): ObjectSet<T>;

  __UNSTABLE_getBulkLinks<T extends ObjectOrInterfaceDefinition>(
    objs: Osdk<T>[],
    links: string[],
  ): AsyncGenerator<BulkLinkResult, void, undefined>;
}
