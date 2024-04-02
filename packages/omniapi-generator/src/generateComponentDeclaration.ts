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

import { convertIrDataTypeToTsTypeReference } from "./convertIrDataTypeToTsTypeReference";
import { convertIrPrimitiveTypeToTsTypeReference } from "./convertIrPrimitiveTypeToTsTypeReference";
import type { Component } from "./ir";

export function generateComponentDeclaration(component: Component) {
  const isAlias = component.type.type !== "object";
  let out = "";
  out += `
  /** 
   * ${component.documentation.plainTextDescription ?? ""}
   * 
   * Log Safety: ${component.safety}
   */
  export ${isAlias ? "type" : "interface"} ${component.name} ${
    isAlias ? " = " : " {"
  }`;

  switch (component.type.type) {
    case "enum":
      out += component.type.enum.values.map(a => `| "${a}"`).join("\n");
      break;

    case "builtin":
      if (
        component.type.builtin.type === "rid"
        || component.type.builtin.type === "string"
      ) {
        out += `LooselyBrandedString<"${component.name}">`;
      } else {
        out += convertIrPrimitiveTypeToTsTypeReference(component.type.builtin);
      }
      break;

    case "object":
      out += Object.entries(component.type.object.properties).map(
        ([name, value]) => {
          return `${name} ${value.type.type === "optional" ? "?" : ""}: ${
            convertIrDataTypeToTsTypeReference(value.type, false)
          }`;
        },
      ).join("\n");
      break;

    case "list":
      out += convertIrDataTypeToTsTypeReference(component.type);
      break;

    case "union":
      let q = component.type.union.discriminator;
      out += Object.entries(component.type.union.subTypes).map(([n, type]) =>
        `{ ${q}: "${n}" } & ${type}`
      ).join("|");
      break;

    case "map":
      let { keyType, valueType } = component.type.map;
      out += `Record<${convertIrDataTypeToTsTypeReference(keyType)}, ${
        convertIrDataTypeToTsTypeReference(valueType)
      } >`;
      break;

    default:
      if (isAlias) {
        out += " undefined; //" + JSON.stringify(component);
      }
  }

  out += `${isAlias ? "" : "}"}\n\n`;
  return out;
}
