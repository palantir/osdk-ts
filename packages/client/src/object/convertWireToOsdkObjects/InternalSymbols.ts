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

import type { ObjectOrInterfaceDefinition, OsdkBase } from "@osdk/api";

export const UnderlyingOsdkObject = Symbol(
  process.env.MODE !== "production" ? "Underlying Object" : undefined,
);

export const ObjectDefRef = Symbol(
  process.env.MODE !== "production" ? "ObjectDefinition" : undefined,
);

export const InterfaceDefRef = Symbol(
  process.env.MODE !== "production" ? "InterfaceDefinition" : undefined,
);

/** A symbol for getting the raw data object off of the holder an osdk object proxy points to */
export const RawObject = Symbol(
  process.env.MODE !== "production" ? "RawObject" : undefined,
);

export const ClientRef = Symbol(
  process.env.MODE !== "production" ? "ClientRef" : undefined,
);

export const CachedPropertiesRef = Symbol(
  process.env.MODE !== "production" ? "CachedProperties" : undefined,
);

export interface HolderBase<T extends ObjectOrInterfaceDefinition> {
  [UnderlyingOsdkObject]: OsdkBase<any>;
  [ObjectDefRef]?: T;
  [InterfaceDefRef]?: T;
}
