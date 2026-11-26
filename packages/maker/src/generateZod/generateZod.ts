/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ApiSpec,
  Component,
  DataType,
  Locator,
  ObjectSpec,
} from "@osdk/docs-spec-platform";

const key = (locator: Locator): string =>
  `${locator.namespaceName}.${locator.localName}`;
const modelName = (locator: Locator): string =>
  `${locator.namespaceName}${locator.localName}`;

const generatedHeader = `/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

// Generated from OmniAPI IR; do not edit.
`;

/** Generate every component in the declarative IR, grouped by namespace. */
export function generateZodSchemas(
  ir: ApiSpec,
  options?: { apiGatewayVersion?: string },
): Map<string, string> {
  const index = new Map<string, Component>();
  const names = new Set<string>();
  for (const namespace of ir.namespaces) {
    if (!namespace.name) throw new Error("Namespace name is required");
    for (const component of namespace.components) {
      const name = key(component.locator);
      if (component.locator.namespaceName !== namespace.name) {
        throw new Error(
          `Component ${name} does not belong to namespace ${namespace.name}`,
        );
      }
      if (index.has(name)) throw new Error(`Duplicate component: ${name}`);
      const nameToEmit = modelName(component.locator);
      if (
        !/^[A-Za-z_$][A-Za-z0-9_$]*$/u.test(nameToEmit) ||
        names.has(nameToEmit)
      ) {
        throw new Error(
          `Invalid or colliding generated model name: ${nameToEmit}`,
        );
      }
      names.add(nameToEmit);
      index.set(name, component);
    }
  }
  function resolve(type: DataType): DataType {
    const seen = new Set<string>();
    while (type.type === "reference") {
      const name = key(type.reference.locator);
      if (seen.has(name)) throw new Error(`Cyclic component alias: ${name}`);
      seen.add(name);
      const component = index.get(name);
      if (!component) throw new Error(`Unresolved component: ${name}`);
      type = component.type;
    }
    return type;
  }
  function object(type: DataType): ObjectSpec {
    const resolved = resolve(type);
    if (resolved.type !== "object")
      throw new Error("Union variants must resolve to objects");
    return resolved.object;
  }
  function fields(spec: ObjectSpec, mode: "schema" | "type"): string {
    return Object.entries(spec.properties)
      .map(([name, field]) => {
        if (mode === "schema")
          return `${JSON.stringify(name)}: ${emit(field.type, mode)}`;
        const optional = resolve(field.type).type === "optional";
        return `${JSON.stringify(name)}${optional ? "?" : ""}: ${emit(field.type, mode)}`;
      })
      .join(mode === "schema" ? ",\n" : ";\n");
  }
  const dependencies = new Set<string>();
  let currentNamespace = "";
  function emit(type: DataType, mode: "schema" | "type"): string {
    const schema = mode === "schema";
    switch (type.type) {
      case "reference": {
        const locator = type.reference.locator;
        let prefix = "";
        if (locator.namespaceName !== currentNamespace) {
          dependencies.add(locator.namespaceName);
          prefix = `${locator.namespaceName.toLowerCase()}.`;
        }
        const name = `${prefix}${modelName(locator)}`;
        return schema ? `z.lazy(() => ${name}Schema)` : name;
      }
      case "object":
        return schema
          ? `z.strictObject({${fields(type.object, mode)}})`
          : `{${fields(type.object, mode)}}`;
      case "optional":
        return schema
          ? `${emit(type.optional.subType, mode)}.optional()`
          : `(${emit(type.optional.subType, mode)}) | undefined`;
      case "list": {
        if (!schema) return `Array<${emit(type.list.subType, mode)}>`;
        let listSchema = `z.array(${emit(type.list.subType, mode)})`;
        if (type.list.minItems !== undefined) {
          listSchema += `.min(${type.list.minItems})`;
        }
        if (type.list.maxItems !== undefined) {
          listSchema += `.max(${type.list.maxItems})`;
        }
        return listSchema;
      }
      case "map": {
        const keyType = resolve(type.map.keyType);
        const value = emit(type.map.valueType, mode);
        if (!schema) {
          const record = `Record<${emit(type.map.keyType, mode)}, ${value}>`;
          return keyType.type === "enum" ? `Partial<${record}>` : record;
        }
        // JSON object keys remain strings; validate integer keys without transforming the parsed record.
        const keySchema =
          keyType.type === "builtin" && keyType.builtin.type === "integer"
            ? "z.string().regex(/^(0|-?[1-9][0-9]*)$/).refine(value => z.int32().safeParse(Number(value)).success)"
            : emit(keyType, mode);
        const recordFn =
          keyType.type === "enum" ? "z.partialRecord" : "z.record";
        return `${recordFn}(${keySchema}, ${value})`;
      }
      case "enum":
        return schema
          ? `z.enum(${JSON.stringify(type.enum.values)})`
          : type.enum.values
              .map((value) => JSON.stringify(value))
              .join(" | ") || "never";
      case "union": {
        const variants = Object.entries(type.union.subTypes).map(
          ([tag, variant]) => {
            const spec = object(variant.type);
            if (type.union.discriminator in spec.properties) {
              throw new Error(
                `Union discriminator shadows a property: ${type.union.discriminator}`,
              );
            }
            const discriminator = `${JSON.stringify(type.union.discriminator)}: ${schema ? `z.literal(${JSON.stringify(tag)})` : JSON.stringify(tag)}`;
            return schema
              ? `z.strictObject({${discriminator}, ${fields(spec, mode)}})`
              : `{${discriminator}; ${fields(spec, mode)}}`;
          },
        );
        return schema
          ? `z.discriminatedUnion(${JSON.stringify(type.union.discriminator)}, [${variants.join(",\n")}])`
          : variants.join(" | ");
      }
      case "string":
        return schema ? "z.string()" : "string";
      case "builtin":
        switch (type.builtin.type) {
          case "any":
            return schema ? "z.unknown()" : "unknown";
          case "boolean":
            return schema ? "z.boolean()" : "boolean";
          case "integer":
            return schema ? "z.int32()" : "number";
          case "double":
            return schema ? "z.number()" : "number";
          case "string":
          case "rid":
            return schema ? "z.string()" : "string";
          case "uuid":
            return schema ? "z.uuid()" : "string";
          case "datetime":
            return schema ? "z.iso.datetime({ offset: true })" : "string";
          default:
            throw new Error(`Unsupported builtin: ${type.builtin.type}`);
        }
      default:
        throw new Error(`Unsupported type: ${type.type}`);
    }
  }
  const modules = new Map<string, string>();
  for (const namespace of ir.namespaces) {
    if (namespace.components.length === 0) continue;
    currentNamespace = namespace.name;
    dependencies.clear();
    const declarations = namespace.components.map((component) => {
      const name = modelName(component.locator);
      const schemaExpr = emit(component.type, "schema");
      const schemaBody =
        component.type.type === "reference"
          ? schemaExpr
          : `z.lazy(() => ${schemaExpr})`;
      // Explicit model types break inference cycles in recursive schemas.
      return `export type ${name} = ${emit(component.type, "type")};\n\nexport const ${name}Schema: z.ZodType<${name}> = ${schemaBody};`;
    });
    const imports = [...dependencies].map(
      (name) =>
        `import * as ${name.toLowerCase()} from "./${name.toLowerCase()}.js";`,
    );
    const filename = `${namespace.name.toLowerCase()}.ts`;
    if (modules.has(filename))
      throw new Error(`Generated namespace filename collision: ${filename}`);
    modules.set(
      filename,
      [
        generatedHeader,
        'import { z } from "zod/v4";',
        imports.join("\n"),
        ...declarations,
        "",
      ].join("\n\n"),
    );
  }
  if (options?.apiGatewayVersion) {
    if (modules.has("index.ts")) {
      throw new Error("Generated namespace filename collision: index.ts");
    }

    const exports = [...modules.keys()]
      .sort()
      .map((filename) => {
        const name = filename.slice(0, -".ts".length);
        return `export * as ${name} from "./${name}.js";`;
      })
      .join("\n");
    modules.set(
      "index.ts",
      [
        generatedHeader,
        `export const API_GATEWAY_VERSION = ${JSON.stringify(options.apiGatewayVersion)};`,
        exports,
        "",
      ].join("\n\n"),
    );
  }

  return modules;
}
