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

import type {
  ObjectMetadata,
  ObjectOrInterfaceDefinition,
  ObjectSpecifier,
  PropertySecurity,
} from "@osdk/api";
import type { FormatPropertyOptions } from "../formatting/applyPropertyFormatter.js";
import type { InterfaceHolder } from "./InterfaceHolder.js";
import type {
  PropertySecuritiesRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

/** @internal */

export interface BaseHolder {
  readonly [UnderlyingOsdkObject]: ObjectHolder;
  readonly [PropertySecuritiesRef]:
    | { [propName: string]: PropertySecurity[] }
    | undefined;

  readonly $apiName: string;
  readonly $objectType: string;
  readonly $primaryKey: string | number;
  readonly $title: string | undefined;
  readonly $rid?: string;
  readonly $objectSpecifier: ObjectSpecifier<any>;
  readonly $propertySecurities: PropertySecurity[];

  readonly "$as": (
    newDef: string | ObjectOrInterfaceDefinition,
  ) => ObjectHolder | InterfaceHolder;

  readonly "$clone": (
    newProps?: Record<string, any>,
  ) => this;

  readonly "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata": {
    readonly ObjectMetadata: ObjectMetadata;
  };

  readonly "$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue": <
    PropertyApiName extends string,
  >(
    propertyApiName: PropertyApiName,
    options?: FormatPropertyOptions,
  ) => string | undefined;

  // [key: `$$${string}`]: any;
  // Unlike SimpleOsdkProperties, all of our remaining types are unknown as the full
  // union is basically `any` when you consider the above fields.
  [key: string]: unknown;
}
