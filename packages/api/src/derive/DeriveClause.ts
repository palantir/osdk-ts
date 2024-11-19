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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type {
  CompileTimeMetadata,
  ObjectMetadata,
} from "../ontology/ObjectTypeDefinition.js";
import type { LinkedType, LinkNames } from "../util/LinkUtils.js";

// TODO: Store derived properties

type Just<Z extends keyof V, V> =
  & {
    [k in Z]: V[k];
  }
  & {
    [k in keyof V as k extends Z ? never : k]?: never;
  };

type SingleKeyMap<T extends string, R> =
  & {
    [K in T]: R;
  }
  & { [K in string]: K extends T ? R : never };

type NativePropertyDef<T extends ObjectOrInterfaceDefinition> = PropertyKeys<T>;

// TODO: Numeric PKeys only

type NumericOperationArgs<T extends ObjectOrInterfaceDefinition> =
  | number
  | PropertyKeys<T>
  | CalculatedProperty<T>;
interface NumericOperations<T extends ObjectOrInterfaceDefinition> {
  $add: Array<NumericOperationArgs<T>>;
  $subtract: Array<NumericOperationArgs<T>>;
  $multiply: Array<NumericOperationArgs<T>>;
  $divide: Array<NumericOperationArgs<T>>;
  $negate: NumericOperationArgs<T>;
  $abs: NumericOperationArgs<T>;
}

namespace CalculatedProperty {
  export interface $add<T extends ObjectOrInterfaceDefinition>
    extends Just<"$add", NumericOperations<T>>
  {}
  export interface $subtract<T extends ObjectOrInterfaceDefinition>
    extends Just<"$subtract", NumericOperations<T>>
  {}
  export interface $multiply<T extends ObjectOrInterfaceDefinition>
    extends Just<"$multiply", NumericOperations<T>>
  {}
  export interface $divide<T extends ObjectOrInterfaceDefinition>
    extends Just<"$divide", NumericOperations<T>>
  {}
  export interface $negate<T extends ObjectOrInterfaceDefinition>
    extends Just<"$negate", NumericOperations<T>>
  {}

  export interface $abs<T extends ObjectOrInterfaceDefinition>
    extends Just<"$abs", NumericOperations<T>>
  {}
}

type CalculatedProperty<T extends ObjectOrInterfaceDefinition> =
  | CalculatedProperty.$add<T>
  | CalculatedProperty.$subtract<T>
  | CalculatedProperty.$multiply<T>
  | CalculatedProperty.$divide<T>
  | CalculatedProperty.$negate<T>
  | CalculatedProperty.$abs<T>;

type SelectedProperty<
  T extends ObjectOrInterfaceDefinition,
> = {
  [
    K in LinkNames<T> as CompileTimeMetadata<T>["links"][K] extends
      ObjectMetadata.Link<infer _, infer M> ? (
        M extends false ? K : never
      )
      : never
  ]: PropertyKeys<LinkedType<T, K>> | never;
};

type AggregateOperations<T extends ObjectOrInterfaceDefinition> = {
  $count: LinkNames<T>;
  $sum: SelectedProperty<T>;
  $min: SelectedProperty<T>;
  $max: SelectedProperty<T>;
  $avg: SelectedProperty<T>;
  $approximateDistinct: SelectedProperty<T>;
  $exactDistinct: SelectedProperty<T>;
  $approximatePercentile: SelectedProperty<T>;
  $collectToSet: SelectedProperty<T>; // Alternative syntax: .derive({"rdpName": {$collectToSet: "linkName", limit?: 100},)
  $collectToList: SelectedProperty<T>;
};

namespace AggregatedProperty {
  export interface $count<T extends ObjectOrInterfaceDefinition>
    extends Just<"$count", AggregateOperations<T>>
  {}
  export interface $sum<T extends ObjectOrInterfaceDefinition>
    extends Just<"$sum", AggregateOperations<T>>
  {}
  export interface $min<T extends ObjectOrInterfaceDefinition>
    extends Just<"$min", AggregateOperations<T>>
  {}
  export interface $max<T extends ObjectOrInterfaceDefinition>
    extends Just<"$max", AggregateOperations<T>>
  {}
  export interface $avg<T extends ObjectOrInterfaceDefinition>
    extends Just<"$avg", AggregateOperations<T>>
  {}
  export interface $approximateDistinct<T extends ObjectOrInterfaceDefinition>
    extends Just<"$approximateDistinct", AggregateOperations<T>>
  {}
  export interface $exactDistinct<T extends ObjectOrInterfaceDefinition>
    extends Just<"$exactDistinct", AggregateOperations<T>>
  {}
  export interface $approximatePercentile<T extends ObjectOrInterfaceDefinition>
    extends Just<"$approximatePercentile", AggregateOperations<T>>
  {}
  export interface $collectToSet<T extends ObjectOrInterfaceDefinition>
    extends Just<"$collectToSet", AggregateOperations<T>>
  {}
  export interface $collectToList<T extends ObjectOrInterfaceDefinition>
    extends Just<"$collectToList", AggregateOperations<T>>
  {
  }
}

type AggregatedProperty<T extends ObjectOrInterfaceDefinition> =
  | AggregatedProperty.$count<T>
  | AggregatedProperty.$sum<T>
  | AggregatedProperty.$min<T>
  | AggregatedProperty.$max<T>
  | AggregatedProperty.$avg<T>
  | AggregatedProperty.$approximateDistinct<T>
  | AggregatedProperty.$exactDistinct<T>;

type ValidDerivedPropertyKeys<T extends ObjectOrInterfaceDefinition> = string;

export type DeriveClause<T extends ObjectOrInterfaceDefinition> = {
  [key: ValidDerivedPropertyKeys<T>]:
    | NativePropertyDef<T> // .derive({"rdpName": "nativePropName"})
    | CalculatedProperty<T> // .derive({"rdpName": {$add: [1, "nativePropName"]}})
    | SelectedProperty<T> // .derive({"rdpName": {"linkName": "linkPropertyName"}})
    | AggregatedProperty<T>; // .derive({"rdpName": {$count: "linkName"}}) .derive({"rdpName": {$sum: {"linkName": "linkPropertyName"}})})
};
