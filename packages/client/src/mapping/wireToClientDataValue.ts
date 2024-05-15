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
  QueryDataTypeDefinition,
} from "@osdk/api";
import type { DataValue } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { Attachment } from "../object/Attachment.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import type { ClientDataValue } from "./ClientDataValue.js";

export function wireToClientDataValue<
  T extends keyof ClientDataValue,
  K extends string = string,
>(
  wire: DataValue,
  dataType: QueryDataTypeDefinition<K>,
  clientCtx: ClientContext<any>,
  definitions: Map<string, ObjectOrInterfaceDefinition>,
): ClientDataValue[T] {
  if (!requiresConversion(dataType)) {
    return wire as ClientDataValue[T];
  }

  // convert multiplicity return values in place if necessary
  if (dataType.multiplicity !== false) {
    const withoutMultiplicity = { ...dataType, multiplicity: false };
    for (let i = 0; i < wire.length; i++) {
      wire[i] = wireToClientDataValue(
        wire[i],
        withoutMultiplicity,
        clientCtx,
        definitions,
      );
    }
    return wire as ClientDataValue[T];
  }

  switch (dataType.type) {
    case "union":
      throw new Error("Union return types are not supported");

    case "set":
      for (let i = 0; i < wire.length; i++) {
        wire[i] = wireToClientDataValue(
          wire[i],
          dataType.set,
          clientCtx,
          definitions,
        );
      }

      return wire as ClientDataValue[T];

    case "attachment":
      return new Attachment(wire) as ClientDataValue[T];

    case "objectSet":
      const def = definitions.get(dataType.objectSet);
      if (!def) {
        throw new Error(`Missing definition for ${dataType.objectSet}`);
      }
      if (typeof wire === "string") {
        return createObjectSet(def, clientCtx, {
          type: "intersect",
          objectSets: [
            { type: "base", objectType: dataType.objectSet },
            { type: "reference", reference: wire },
          ],
        }) as ClientDataValue[T];
      }

      return createObjectSet(def, clientCtx, wire) as ClientDataValue[T];

    case "struct":
      // figure out what keys need to be fixed up
      for (const [key, subtype] of Object.entries(dataType.struct)) {
        if (requiresConversion(subtype)) {
          wire[key] = wireToClientDataValue(
            wire[key],
            subtype,
            clientCtx,
            definitions,
          );
        }
      }

      return wire as ClientDataValue[T];

    case "twoDimensionalAggregation": {
      const result: Record<any, any> = {};
      for (const { key, value } of wire.groups) {
        result[key] = value;
      }
      return result as ClientDataValue[T];
    }

    case "threeDimensionalAggregation": {
      const result: Record<any, Record<any, any>> = {};
      for (const { key, groups } of wire.groups) {
        const subresult: Record<any, any> = {};
        result[key] = subresult;
        for (const { key: subkey, value } of groups) {
          subresult[subkey] = value;
        }
      }
      return result as ClientDataValue[T];
    }
  }

  return wire as ClientDataValue[T];
}

export function getRequiredDefinitions(
  dataType: QueryDataTypeDefinition<any>,
): Set<string> {
  const result = new Set<string>();
  switch (dataType.type) {
    case "objectSet":
      result.add(dataType.objectSet);
      break;

    case "set":
      for (const s of getRequiredDefinitions(dataType.set)) {
        result.add(s);
      }
      break;

    case "struct":
      for (const value of Object.values(dataType.struct)) {
        for (const s of getRequiredDefinitions(value)) {
          result.add(s);
        }
      }
      break;

    case "attachment":
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "object":
    case "string":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
    case "union":
      break;

    default:
      const _: never = dataType;
      break;
  }

  return result;
}

function requiresConversion(dataType: QueryDataTypeDefinition<any>) {
  switch (dataType.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "object": // JSON encoded primary key
    case "string":
    case "timestamp":
      return false;

    case "union":
      return true;

    case "struct":
      return Object.values(dataType.struct).some(requiresConversion);

    case "set":
      return requiresConversion(dataType.set);

    case "attachment":
    case "objectSet":
    case "twoDimensionalAggregation":
    case "threeDimensionalAggregation":
      return true;

    default:
      const _: never = dataType;
      return false;
  }
}
