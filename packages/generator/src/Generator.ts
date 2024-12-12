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

import invariant from "tiny-invariant";

export class Generator {
  constructor(public readonly packageName: string) {
  }

  createFile(relPathWithoutExt: string): CodeFile {
    return new CodeFile(relPathWithoutExt, this);
  }
}

function prefix(words: string[]) {
  if (!words[0] || words.length === 1) return words[0] || "";
  let i = 0;

  while (words[0][i] && words.every(w => w[i] === words[0][i])) {
    i++;
  }
  return words[0].slice(0, i);
}

export class CodeFile {
  imports = new Map<
    string,
    | {
      type: "namespace";
      localName: string;
      typeOnly: boolean;
      module: string;
    }
    | {
      type: "named";
      localName: string;
      theirName?: string;
      typeOnly: boolean;
      module: string;
    }
  >();

  exports = new Map<
    string,
    | {
      type: "namespace";
      localName: string;
      typeOnly: boolean;
      module: string;
    }
    | {
      type: "named";
      localName: string;
      theirName?: string;
      typeOnly: boolean;
      module: string;
    }
  >();

  dts = "";
  js = "";
  compositeDts = "";

  constructor(private path: string, private generator: Generator) {
    invariant(path.startsWith("#"), `Path must start with #`);
    this.path = path.substring(1);
  }

  addConst(name: string, type: string, value: string) {
    this.compositeDts += `export const ${name}: ${type};\n`;
    this.dts += `export const ${name}: ${type};\n`;
    this.js += `export const ${name} = ${value};\n`;
    return this;
  }

  addTypeOrInterface(code: string) {
    this.compositeDts += `export ${code};\n`;
    this.dts += `export ${code};\n`;
    return this;
  }

  #addImportExport<
    const T extends {
      name: string;
      as?: string;
      typeOnly?: boolean;
      module: string;
    },
  >(
    importOrExport: "import" | "export",
    expectedType: "namespace" | "named",
    opts: T,
  ): this {
    const localName = opts.as ?? opts.name;
    const existing = this[`${importOrExport}s`].get(localName);
    if (!existing) {
      this[`${importOrExport}s`].set(localName, {
        type: expectedType,
        localName,
        theirName: opts.name,
        typeOnly: opts.typeOnly ?? false,
        module: opts.module,
      });
      return this;
    }

    invariant(
      existing.localName === localName
        && existing.type === expectedType,
      `There is already ${importOrExport} of type  ${localName} in ${this.path} and it is ${existing.type}, not ${expectedType}.`,
    );

    if (existing.typeOnly && !opts.typeOnly) {
      existing.typeOnly = false;
    }

    return this;
  }

  addNamedImport(
    opts: {
      name: string;
      as?: string;
      typeOnly?: boolean;
      module: string;
    },
  ): this {
    return this.#addImportExport("import", "named", opts);
  }

  addNamedExport(
    opts: {
      name: string;
      as?: string;
      typeOnly?: boolean;
      module: string;
    },
  ): this {
    return this.#addImportExport("export", "named", opts);
  }

  addNamespaceExport(opts: {
    name: string;
    typeOnly?: boolean;
    module: string;
  }) {
    return this.#addImportExport("export", "namespace", opts);
  }

  addNamespaceImport(opts: {
    name: string;
    typeOnly?: boolean;
    module: string;
  }) {
    return this.#addImportExport("import", "namespace", opts);
  }

  add(
    opts:
      | {
        import: string;
        as?: string;
        from: string;
      }
      | `${
        | "import"
        | "import type"
        | "export"
        | "export type"} {${string}} from "${string}"`
      | `${
        | "import"
        | "import type"
        | "export"
        | "export type"} * as ${string} from "${string}"`,
    //   | `export {${string}} from "${string}"`,
  ) {
    if (typeof opts === "string") {
      let result =
        /^(import|export)\s+(type)?\s*{([a-zA-Z\-@ ]*?|[a-zA-Z\-@ ]*? as [a-zA-Z\-@ ]*?)} from "(.*?)";?$/
          .exec(
            opts,
          );
      if (result) {
        return this.#addImportExport(
          result[1] as any,
          "named",
          {
            typeOnly: result[2] === "type",
            name: result[3],
            module: result[4],
          },
        );
      }

      result =
        /^(import|export)\s+(type)?\s*\* as ([a-zA-Z\-@ ]*?) from "(.*?)";?$/
          .exec(
            opts,
          );
      if (result) {
        return this.#addImportExport(
          result[1] as any,
          "namespace",
          {
            typeOnly: result[2] === "type",
            name: result[3],
            module: result[4],
          },
        );
      }

      //   let b = /^export const ${}
      throw new Error("Bad: " + opts);
    }
    return this.addNamedImport({
      name: opts.import,
      as: opts.as,
      module: opts.from,
    });
  }

  generateFiles() {
    const organizedImports = organizeImportsExports(this.imports);
    const organizedExports = organizeImportsExports(this.exports);

    const createImportOrExportString = (
      outputType: "compositeDts" | "dts" | "js",
      importOrExport: "import" | "export" = "import",
    ) => {
      const types = outputType === "dts" || outputType === "compositeDts"
        ? ["general", "typed"] as const
        : ["general"] as const;
      return Object.entries(
        importOrExport === "import" ? organizedImports : organizedExports,
      ).map(([modId, v]) => {
        let moduleSpec;

        if (modId.startsWith("#")) {
          moduleSpec = relativeTo(this.path, modId.substring(1));
          if (outputType === "js" || outputType === "dts") {
            moduleSpec += ".js";
          }
        } else {
          moduleSpec = modId;
        }

        return types.map(typed => {
          const { named, namespace } = v[typed];
          const prefix = typed === "typed"
            ? `${importOrExport} type`
            : importOrExport;
          const innerModuleSpec =
            outputType === "compositeDts" && moduleSpec.startsWith(".")
              ? `${this.generator.packageName}/${modId.substring(1)}`
              : moduleSpec;

          let ret = "";
          if (named.length > 0) {
            ret += `${prefix} { ${
              named.join(", ")
            } } from "${innerModuleSpec}";\n`;
          }

          ret += namespace.map(x =>
            `${prefix} * as ${x} from "${innerModuleSpec}";`
          )
            .join("\n");

          return ret;
        }).join("");
      }).join("");
    };

    const finalCompositeDts =
      `declare module "${this.generator.packageName}/${this.path}" {
${createImportOrExportString("compositeDts", "import")}
${createImportOrExportString("compositeDts", "export")}
      

          ${this.compositeDts}
    }`;

    const finalJs = `
    ${createImportOrExportString("js", "import")}
    ${createImportOrExportString("js", "export")}
    ${this.js}
    `;

    const finalDts = `
        ${createImportOrExportString("dts", "import")}
        ${createImportOrExportString("dts", "export")}
              
        
                  ${this.dts}
            `;

    return {
      compositeDts: finalCompositeDts,
      js: { [`${this.path}.js`]: finalJs },
      dts: { [`${this.path}.d.ts`]: finalDts },
    };
  }
}

/** Helper function */
function organizeImportsExports(
  x: Map<
    string,
    {
      type: "named" | "namespace";
      localName: string;
      theirName?: string;
      typeOnly: boolean;
      module: string;
    }
  >,
) {
  return [...x.values()].reduce<
    Record</* moduleName */ string, {
      typed: {
        named: string[];
        namespace: string[];
      };
      general: {
        named: string[];
        namespace: string[];
      };
    }>
  >((out, x) => {
    out[x.module] ??= {
      typed: {
        named: [],
        namespace: [],
      },
      general: {
        named: [],
        namespace: [],
      },
    };

    const base = out[x.module][x.typeOnly ? "typed" : "general"];

    if (x.type === "named") {
      base.named.push(
        x.localName === x.theirName
          ? x.localName
          : `${x.theirName} as ${x.localName}`,
      );
    } else {
      base.namespace.push(x.localName);
    }

    return out;
  }, {});
}

/** relativeTo that does not depend on nodejs */
export function relativeTo(from: string, to: string) {
  let commonPrefix = prefix([from, to]);
  if (commonPrefix.length) {
    commonPrefix = commonPrefix.substring(0, commonPrefix.lastIndexOf("/") + 1);
  }

  const dirsUp = from.substring(commonPrefix.length).split("/").length - 1;
  const restOfTo = to.substring(commonPrefix.length);
  if (dirsUp === 0) {
    return `./${restOfTo}`;
  }

  return `${"../".repeat(dirsUp)}${restOfTo}`;
}
