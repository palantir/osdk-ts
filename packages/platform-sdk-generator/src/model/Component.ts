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

import type * as ir from "../ir/index.js";
import type { Model } from "./Model.js";
import type { Namespace } from "./Namespace.js";
import { Type } from "./Type.js";

export class Component extends Type {
  isComponent = true;
  namespace: Namespace;
  packageLocalFilePath: string;
  externalImportSpecifier: string;
  component: ir.Component;
  model: Model;
  name: string;

  constructor(
    model: Model,
    namespace: Namespace,
    packageLocalFilePath: string,
    externalImportSpecifier: string,
    component: ir.Component,
  ) {
    super();
    this.namespace = namespace;
    this.packageLocalFilePath = packageLocalFilePath;
    this.externalImportSpecifier = externalImportSpecifier;
    this.component = component;
    this.model = model;
    this.name = component.locator.localName;
  }

  get referencedTypes(): Set<Type> {
    return this.model.getType(this.component.type).referencedTypes;
  }

  get tsReferenceString(): string {
    return this.component.locator.localName;
  }

  get declaration(): string {
    const component = this.component;
    const dt = this.component.type;
    const isAlias = dt.type !== "object";
    let out = "";
    out += `
  /** 
   * ${component.documentation.plainTextDescription ?? ""}
   * 
   * Log Safety: ${component.safety}
   */
  export ${isAlias ? "type" : "interface"} ${component.locator.localName} ${
      isAlias ? " = " : ""
    }`;

    const ourType = this.model.getType(dt);

    switch (dt.type) {
      case "enum":
      case "list":
      case "map":
      case "union":
      case "object":
      case "reference":
        out += ourType.tsReferenceString;
        break;

      case "builtin":
        // need to special case this since we use a branded type
        if (dt.builtin.type === "rid" || dt.builtin.type === "string") {
          out += `LooselyBrandedString<"${component.locator.localName}">`;
        } else {
          out += ourType.declaration;
        }
        break;

      default:
        if (isAlias) {
          out += " undefined; //" + JSON.stringify(component);
        }
    }

    out += `\n\n`;
    return out;
  }
}
