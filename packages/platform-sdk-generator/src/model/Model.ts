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

import * as path from "node:path";
import { ensurePackageSetup } from "../generatePlatformSdkv2.js";
import type * as ir from "../ir/index.js";
import { isIgnoredNamespace } from "../isIgnoredNamespace.js";
import { isIgnoredType } from "../isIgnoredType.js";
import { mapObjectValues } from "../util/mapObjectValues.js";
import { BinaryType } from "./BinaryType.js";
import { BuiltinType } from "./BuiltinType.js";
import { Component } from "./Component.js";
import { EnumType } from "./EnumType.js";
import { ErrorType } from "./ErrorType.js";
import { ListType } from "./ListType.js";
import { MapType } from "./MapType.js";
import type { Namespace } from "./Namespace.js";
import { ObjectLiteralType } from "./ObjectLiteralType.js";
import { Operation } from "./Operation.js";
import { OptionalType } from "./OptionalType.js";
import { ReferenceType } from "./ReferenceType.js";
import type { Type } from "./Type.js";
import { UnionType } from "./UnionType.js";

export class Model {
  #typeCache = new Map<string, Type>();
  #components = new Map<string, Component>();
  #errors = new Map<string, ErrorType>();
  #opts: { outputDir: string; packagePrefix: string; npmOrg: string };

  getType(dt: ir.DataType): Type {
    const jsonString = JSON.stringify(dt);
    if (this.#typeCache.has(jsonString)) {
      return this.#typeCache.get(jsonString)!;
    }

    const ret = this.#createType(dt);
    this.#typeCache.set(jsonString, ret);
    return ret;
  }

  #createType(dt: ir.DataType): Type {
    switch (dt.type) {
      case "list":
        return new ListType(this.getType(dt.list.subType));
      case "union":
        return new UnionType(
          dt.union.discriminator,
          mapObjectValues(
            dt.union.subTypes,
            rt => this.getComponent(rt.type.reference.locator),
          ),
        );
      case "enum":
        return new EnumType(dt.enum.values);
      case "optional":
        return new OptionalType(this.getType(dt.optional.subType));
      case "reference":
        return new ReferenceType(
          this.getComponent(dt.reference.locator),
        );
      case "builtin":
        return new BuiltinType(dt.builtin);
      case "map":
        return new MapType(
          this.getType(dt.map.keyType),
          this.getType(dt.map.valueType),
        );

      case "external":
        return this.getType({
          type: "builtin",
          builtin: { type: "any", any: {} },
        });
      case "object":
        return new ObjectLiteralType(
          mapObjectValues(dt.object.properties, p => this.getType(p.type)),
        );
      case "asyncOperation":
        return new BuiltinType({ type: "any", any: {} });
        throw new Error("Method not implemented.");
      case "binary":
        return new BinaryType();
      default:
        const foo: never = dt;
        throw new Error("Method not implemented.");
    }
  }

  getComponent(locator: ir.Locator): Component {
    const ret = this.#components.get(
      `${
        locator.namespaceName === "Ontologies" ? "Core" : locator.namespaceName
      }.${locator.localName}`,
    );
    if (!ret) {
      throw new Error(
        `Component ${locator.localName} not found in ${locator.namespaceName}`,
      );
    }
    return ret;
  }

  #namespaces = new Map<string, Namespace>();

  public static async create(ir: ir.ApiSpec, opts: {
    outputDir: string;
    packagePrefix: string;
    npmOrg: string;
  }): Promise<Model> {
    const model = new Model(opts);

    for (const ns of ir.namespaces) {
      if (isIgnoredNamespace(ns.name)) continue;

      await model.#addNamespace(ns.name === "Ontologies" ? "Core" : ns.name);

      for (const c of ns.components) {
        if (isIgnoredType(c)) continue;
        if (c.locator.namespaceName === "Ontologies") {
          c.locator.namespaceName = "Core";
        }

        model.#addComponent(c);
      }

      for (const e of ns.errors) {
        if (isIgnoredType(e)) continue;
        if (e.locator.namespaceName === "Ontologies") {
          e.locator.namespaceName = "Core";
        }
        model.#addError(e);
      }

      for (const r of ns.resources) {
        if (r.operations.length === 0) {
          continue;
        }
        model.addResource(ns, r);
      }
    }

    return model;
  }

  private constructor(
    opts: {
      outputDir: string;
      packagePrefix: string;
      npmOrg: string;
    },
  ) {
    this.#opts = opts;
  }

  get namespaces(): IterableIterator<Namespace> {
    return this.#namespaces.values();
  }

  async #addNamespace(nsName: string) {
    const dir = `${this.#opts.packagePrefix}${
      nsName === ""
        ? ".core"
        : `.${nsName.toLowerCase()}`
    }`;
    const packagePath = path.join(this.#opts.outputDir, dir);
    const packageName = `${this.#opts.npmOrg}/${dir}`;
    this.#namespaces.set(nsName, {
      components: [],
      errors: [],
      resources: [],
      packageName,
      paths: await ensurePackageSetup(packagePath, packageName, []),
      name: nsName,
    });
  }

  #addComponent(c: ir.Component) {
    const nsName = c.locator.namespaceName;

    const ns = this.#namespaces.get(nsName);
    if (!ns) {
      throw new Error(
        `Namespace not found for ${c.locator.namespaceName} in ${c.locator.localName}`,
      );
    }

    const component = new Component(
      this,
      ns,
      path.join(ns.paths.srcDir, `_components.ts`),
      ns.packageName,
      c,
    );

    ns.components.push(component);
    this.#components.set(
      `${c.locator.namespaceName}.${c.locator.localName}`,
      component,
    );
  }

  #addError(e: ir.Error) {
    const nsName = (e.locator.namespaceName == null)
      ? "Core"
      : e.locator.namespaceName;
    const ns = this.#namespaces.get(nsName);
    if (!ns) {
      throw new Error(
        `Namespace not found for ${e.locator.namespaceName} in ${e.locator.localName}`,
      );
    }

    const error = new ErrorType(
      this,
      ns,
      path.join(ns.paths.srcDir, `_errors.ts`),
      ns.packageName,
      e,
    );

    ns.errors.push(error);
    this.#errors.set(e.locator.localName, error);
  }

  addResource(ns: ir.Namespace, r: ir.Resource): void {
    this.#namespaces.get(ns.name === "Ontologies" ? "Core" : ns.name)!.resources
      .push({
        component: r.component.localName,
        namespace: r.component.namespaceName,
        operations: r.operations.map(so => new Operation(so, this)),
      });
  }
}
