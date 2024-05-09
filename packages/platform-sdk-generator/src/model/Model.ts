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
import { mapObjectValues } from "../util/mapObjectValues.js";
import { BuiltinType } from "./BuiltinType.js";
import { Component } from "./Component.js";
import { EnumType } from "./EnumType.js";
import { ListType } from "./ListType.js";
import { MapType } from "./MapType.js";
import type { Namespace } from "./Namespace.js";
import { ObjectLiteralType } from "./ObjectLiteralType.js";
import { OptionalType } from "./OptionalType.js";
import { ReferenceType } from "./ReferenceType.js";
import { StaticOperation } from "./StaticOperation.js";
import type { Type } from "./Type.js";
import { UnionType } from "./UnionType.js";

export class Model {
  #typeCache = new Map<string, Type>();
  #components = new Map<string, Component>();
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
          mapObjectValues(dt.union.subTypes, st => this.getComponent(st)),
        );
      case "enum":
        return new EnumType(dt.enum.values);
      case "optional":
        return new OptionalType(this.getType(dt.optional.subType));
      case "reference":
        return new ReferenceType(this.getComponent(dt.reference));
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
      case "binary":
        throw new Error("Method not implemented.");
      default:
        const foo: never = dt;
        throw new Error("Method not implemented.");
    }
  }

  getComponent(reference: string): Component {
    const ret = this.#components.get(reference);
    if (!ret) throw new Error(`Component ${reference} not found`);
    return ret;
  }

  #namespaces = new Map<string, Namespace>();

  public static async create(ir: ir.ApiSpec, opts: {
    outputDir: string;
    packagePrefix: string;
    npmOrg: string;
  }) {
    const model = new Model(opts);
    // Special "no namespace"
    await model.#addNamespace({
      name: "",
      resources: [],
    });

    for (const ns of ir.namespaces) {
      await model.#addNamespace(ns);
    }

    for (const c of ir.components) {
      await model.#addComponent(c);
    }

    for (const ns of ir.namespaces) {
      for (const r of ns.resources) {
        await model.addResource(ns, r);
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

  get commonNamespace() {
    return this.#namespaces.get("")!;
  }

  get namespaces() {
    return this.#namespaces.values();
  }

  async #addNamespace(ns: ir.Namespace) {
    const dir = `${this.#opts.packagePrefix}${
      ns.name === ""
        ? ".core"
        : `.${ns.name.toLowerCase()}`
    }`;
    const packagePath = path.join(this.#opts.outputDir, dir);
    const packageName = `${this.#opts.npmOrg}/${dir}`;
    this.#namespaces.set(ns.name, {
      components: [],
      resources: [],
      packageName,
      paths: await ensurePackageSetup(packagePath, packageName, []),
      name: ns.name,
    });
  }

  #addComponent(c: ir.Component) {
    const ns = this.#namespaces.get(c.namespace ?? "");
    if (!ns) {
      throw new Error(`Namespace not found for ${c.namespace}`);
    }

    const component = new Component(
      this,
      ns,
      path.join(ns.paths.srcDir, `_components.ts`),
      ns.packageName,
      c,
    );

    ns.components.push(component);
    this.#components.set(c.name, component);
  }

  addResource(ns: ir.Namespace, r: ir.Resource) {
    this.#namespaces.get(ns.name)!.resources.push({
      component: this.getComponent(r.component),
      operations: r.staticOperations.map(so => new StaticOperation(so, this)),
    });
  }
}
