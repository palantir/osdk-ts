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

import { execFile } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  realpath,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

import ts from "typescript";
import { afterEach, describe, expect, it } from "vitest";

import type { SourceDiagnostic } from "./diagnostics.js";

const execute = promisify(execFile);
const packageRoot = fileURLToPath(new URL("../../", import.meta.url));
const directories: string[] = [];

async function project(
  files: Readonly<Record<string, string>>,
): Promise<string> {
  const directory = await realpath(
    await mkdtemp(join(tmpdir(), "maker-source-")),
  );
  directories.push(directory);
  await mkdir(join(directory, "node_modules/@osdk"), { recursive: true });
  await symlink(packageRoot, join(directory, "node_modules/@osdk/maker"));
  await Promise.all(
    Object.entries({ "package.json": '{"type":"module"}', ...files }).map(
      async ([name, text]) => {
        await mkdir(dirname(join(directory, name)), { recursive: true });
        await writeFile(join(directory, name), text);
      },
    ),
  );
  return directory;
}

afterEach(async () => {
  await Promise.all(
    directories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

interface Evaluation {
  readonly exports?: Readonly<Record<string, unknown>>;
  readonly objects: Readonly<Record<string, unknown>>;
  readonly samePreloaded?: boolean;
  readonly error?: {
    readonly name: string;
    readonly message: string;
    readonly code?: string;
    readonly diagnostics?: readonly SourceDiagnostic[];
    readonly isValidationError: boolean;
    readonly isSourceValidationError: boolean;
    readonly preservesIssues: boolean;
  };
}

/** Each invocation exercises a built distribution in a fresh native Node process. */
async function evaluate(
  directory: string,
  {
    mode = "source",
    host = "esm",
    entry = "entry.ts",
    preload,
    nodeArgs = [],
  }: {
    mode?: "source" | "native";
    host?: "esm" | "cjs";
    entry?: string;
    preload?: string;
    nodeArgs?: readonly string[];
  } = {},
): Promise<Evaluation> {
  const hostPath = join(
    packageRoot,
    host === "esm" ? "build/esm/index.js" : "build/cjs/index.cjs",
  );
  const url = pathToFileURL(join(directory, entry)).href;
  const script = `
import { createRequire } from "node:module";
const maker = ${host === "esm" ? `await import(${JSON.stringify(pathToFileURL(hostPath).href)})` : `createRequire(import.meta.url)(${JSON.stringify(hostPath)})`};
maker.initializeOntologyState("com.acme.");
const preloaded = ${preload === undefined ? "undefined" : `await import(${JSON.stringify(pathToFileURL(join(directory, preload)).href)})`};
let result;
try {
  const exports = await ${mode === "source" ? `maker.loadOntologySource(${JSON.stringify(join(directory, entry))})` : `import(${JSON.stringify(url)})`};
  result = { exports, samePreloaded: preloaded === undefined ? undefined : exports.shared === preloaded.shared };
} catch (error) {
  result = { error: {
    name: error.name, message: error.message, code: error.code, diagnostics: error.diagnostics,
    isValidationError: error instanceof maker.MakerValidationError,
    isSourceValidationError: error instanceof maker.SourceValidationError,
    preservesIssues: error.cause instanceof maker.MakerValidationError && error.issues === error.cause.issues,
  } };
}
process.stdout.write(JSON.stringify({ ...result, objects: maker.getOntologyDefinition().OBJECT_TYPE }));
`;
  const { stdout } = await execute(
    process.execPath,
    [...nodeArgs, "--input-type=module", "--eval", script],
    { cwd: directory },
  );
  return JSON.parse(stdout) as Evaluation;
}

async function compatible(
  directory: string,
  options: Parameters<typeof evaluate>[1] = {},
): Promise<Evaluation> {
  const native = await evaluate(directory, { ...options, mode: "native" });
  expect(native.error).toBeUndefined();
  const source = await evaluate(directory, options);
  expect(source).toEqual(native);
  return source;
}

async function failure(
  directory: string,
  options: Parameters<typeof evaluate>[1] = {},
): Promise<NonNullable<Evaluation["error"]>> {
  const { error } = await evaluate(directory, options);
  expect(error).toMatchObject({
    name: "SourceValidationError",
    isValidationError: true,
    isSourceValidationError: true,
    preservesIssues: true,
  });
  if (error === undefined)
    throw new Error("Expected source validation to fail");
  return error;
}

function highlight(text: string, diagnostic: SourceDiagnostic): string {
  return text.slice(
    diagnostic.source.start.offset,
    diagnostic.source.end.offset,
  );
}

const input = `{
  apiName: "Document", displayName: "Document", pluralDisplayName: "Documents",
  primaryKeyPropertyApiName: "id", titlePropertyApiName: "id",
  properties: { id: { type: "string" } },
}`;
const definition = `import { defineObject } from "@osdk/maker";
export const document = defineObject(${input});`;
const invalidDefinition = definition.replace(
  'apiName: "Document"',
  'apiName: "invalid-name"',
);

const unsupported = Number(process.versions.node.split(".")[0]) < 24;

describe.skipIf(unsupported)("native source-aware authoring", () => {
  it.each(["ts", "mts", "mjs"])(
    "preserves ESM %s authoring, type erasure, and top-level await",
    async (extension) => {
      const entry = `entry.${extension}`;
      const types =
        extension === "mjs"
          ? ""
          : 'import type { Missing } from "./missing.ts";\ntype Label = string;\n';
      const text =
        types +
        'const label = await Promise.resolve("Ready");\n' +
        definition.replace('displayName: "Document"', "displayName: label");
      const directory = await project({ [entry]: text });
      const result = await compatible(directory, { entry });
      expect(result.objects["com.acme.Document"]).toMatchObject({
        displayName: "Ready",
      });
    },
  );

  it.each(["cjs", "cts"])(
    "preserves CommonJS %s authoring with the CommonJS host",
    async (extension) => {
      const entry = `entry.${extension}`;
      const types =
        extension === "cts"
          ? 'type Name = string;\nconst name: Name = "Document";\n'
          : 'const name = "Document";\n';
      const directory = await project({
        [entry]:
          types +
          `const { defineObject } = require("@osdk/maker");\nmodule.exports = defineObject(${input.replace('apiName: "Document"', "apiName: name")});`,
      });
      const result = await compatible(directory, { entry, host: "cjs" });
      expect(Object.keys(result.objects)).toEqual(["com.acme.Document"]);
    },
  );

  it("shares a definition reached through both ESM imports and a CommonJS require", async () => {
    const directory = await project({
      "entry.ts":
        'import { document } from "./document.mjs"; import indirect from "./helper.cjs"; export const same = document === indirect;',
      "helper.cjs": 'module.exports = require("./document.mjs").document;',
      "document.mjs": definition,
    });
    const result = await compatible(directory);
    expect(result.exports).toEqual({ same: true });
    expect(Object.keys(result.objects)).toEqual(["com.acme.Document"]);
  });

  it("preserves modules already loaded by the host", async () => {
    const directory = await project({
      "entry.ts": 'export { shared } from "./shared.mjs";',
      "shared.mjs": "export const shared = {};",
    });
    const result = await compatible(directory, { preload: "shared.mjs" });
    expect(result.samePreloaded).toBe(true);
  });

  it("shares a diamond dependency and preserves authored module URLs", async () => {
    const directory = await project({
      "entry.ts":
        'import { document } from "./document.ts"; import { document as other } from "./other.ts"; export const same = document === other; export const url = import.meta.url;',
      "other.ts": 'export { document } from "./document.ts";',
      "document.ts": definition,
    });
    const result = await compatible(directory);
    expect(result.exports).toEqual({
      same: true,
      url: pathToFileURL(join(directory, "entry.ts")).href,
    });
    expect(Object.keys(result.objects)).toEqual(["com.acme.Document"]);
  });

  it("uses native import/require export conditions rather than declaration files", async () => {
    const directory = await project({
      "entry.ts":
        'import label from "labels"; import other from "./helper.cjs";\n' +
        definition.replace(
          'displayName: "Document"',
          "displayName: label + other",
        ),
      "helper.cjs": 'module.exports = require("labels");',
      "node_modules/labels/package.json": JSON.stringify({
        type: "module",
        exports: {
          types: "./index.d.ts",
          import: "./import.js",
          require: "./require.cjs",
        },
      }),
      "node_modules/labels/import.js": 'export default "Import";',
      "node_modules/labels/require.cjs": 'module.exports = "Require";',
      "node_modules/labels/index.d.ts":
        "declare const label: string; export default label;",
    });
    const result = await compatible(directory);
    expect(result.objects["com.acme.Document"]).toMatchObject({
      displayName: "ImportRequire",
    });
  });

  it("keeps native JavaScript and package imports authoritative over tsconfig resolution", async () => {
    const directory = await project({
      "package.json": JSON.stringify({
        type: "module",
        imports: { "#label": "./label.js" },
      }),
      "tsconfig.json": JSON.stringify({
        compilerOptions: { baseUrl: ".", paths: { "#label": ["./label.ts"] } },
      }),
      "entry.ts":
        'const name: string = "#label"; const { default: label } = await import(name);\n' +
        definition.replace('displayName: "Document"', "displayName: label"),
      "label.js": 'export default "Native";',
      "label.ts":
        'throw new Error("TypeScript resolution replaced the native runtime entry");',
    });
    const result = await compatible(directory);
    expect(result.objects["com.acme.Document"]).toMatchObject({
      displayName: "Native",
    });
  });

  it("composes with resolver hooks configured by the host", async () => {
    const directory = await project({
      "register.mjs": `import { registerHooks } from "node:module";
registerHooks({ resolve(specifier, context, nextResolve) {
  if (specifier === "ontology-document") return { url: new URL("./document.ts", import.meta.url).href, shortCircuit: true };
  return nextResolve(specifier, context);
} });`,
      "entry.ts": 'export { document } from "ontology-document";',
      "document.ts": definition,
    });
    const result = await compatible(directory, {
      nodeArgs: ["--import", join(directory, "register.mjs")],
    });
    expect(Object.keys(result.objects)).toEqual(["com.acme.Document"]);
  });

  it("preserves import attributes for JSON dependencies", async () => {
    const directory = await project({
      "entry.ts":
        'import config from "./config.json" with { type: "json" };\n' +
        definition.replace(
          'displayName: "Document"',
          "displayName: config.label",
        ),
      "config.json": JSON.stringify({ label: "JSON" }),
    });
    const result = await compatible(directory);
    expect(result.objects["com.acme.Document"]).toMatchObject({
      displayName: "JSON",
    });
  });

  it("does not substitute a TypeScript file for an existing JavaScript import", async () => {
    const directory = await project({
      "entry.ts":
        'import label from "./label.js";\n' +
        definition.replace('displayName: "Document"', "displayName: label"),
      "label.js": 'export default "JavaScript";',
      "label.ts": 'throw new Error("Unexpected TypeScript entry");',
    });
    const result = await compatible(directory);
    expect(result.objects["com.acme.Document"]).toMatchObject({
      displayName: "JavaScript",
    });
  });

  it.each(["esm", "cjs"] as const)(
    "locates definition failures with the %s host",
    async (host) => {
      const text =
        host === "esm"
          ? invalidDefinition
              .replace("defineObject }", "defineObject as declareObject }")
              .replace("= defineObject(", "= declareObject(")
          : `const { defineObject } = require("@osdk/maker");\nmodule.exports = defineObject(${input.replace('apiName: "Document"', 'apiName: "invalid-name"')});`;
      const name = host === "esm" ? "document.ts" : "document.cjs";
      const directory = await project({
        "entry.mjs": `import "./${name}";`,
        [name]: text,
      });
      const error = await failure(directory, { entry: "entry.mjs", host });
      const diagnostic = error.diagnostics![0];
      expect(diagnostic).toMatchObject({
        code: "invalid_api_name",
        path: ["apiName"],
        source: {
          fileName: join(directory, name),
          precision: "exact",
          start: { line: 3 },
        },
      });
      expect(highlight(text, diagnostic)).toBe('"invalid-name"');
      expect(error.message).toContain("^");
    },
  );

  it("locates failures inside installed ESM authoring helpers", async () => {
    const directory = await project({
      "entry.ts": 'import "authoring-helper";',
      "node_modules/authoring-helper/package.json": JSON.stringify({
        type: "module",
        exports: "./index.js",
      }),
      "node_modules/authoring-helper/index.js": invalidDefinition,
    });
    const error = await failure(directory);
    expect(error.diagnostics![0].source.fileName).toBe(
      join(directory, "node_modules/authoring-helper/index.js"),
    );
    expect(highlight(invalidDefinition, error.diagnostics![0])).toBe(
      '"invalid-name"',
    );
  });

  it("uses source maps enabled by the host for compiled authoring", async () => {
    const text = "type Label = string;\n\n" + invalidDefinition;
    const emitted = ts.transpileModule(text, {
      fileName: "document.ts",
      compilerOptions: { module: ts.ModuleKind.ESNext, sourceMap: true },
    });
    const directory = await project({
      "entry.ts": 'import "./document.js";',
      "document.ts": text,
      "document.js": emitted.outputText,
      "document.js.map": emitted.sourceMapText!,
    });
    const error = await failure(directory, {
      nodeArgs: ["--enable-source-maps"],
    });
    expect(error.diagnostics![0].source).toMatchObject({
      fileName: join(directory, "document.ts"),
      precision: "exact",
      start: { line: 5 },
    });
    expect(highlight(text, error.diagnostics![0])).toBe('"invalid-name"');
  });

  it("does not interpret unmapped generated coordinates as authored positions", async () => {
    const directory = await project({
      "entry.ts": 'import "./document.js";',
      "document.js":
        invalidDefinition + "\n//# sourceMappingURL=document.js.map",
      "document.js.map": JSON.stringify({
        version: 3,
        sources: ["document.ts"],
        names: [],
        mappings: "",
      }),
      "document.ts": invalidDefinition,
    });
    const result = await evaluate(directory, {
      nodeArgs: ["--enable-source-maps"],
    });
    expect(result.error).toMatchObject({
      name: "MakerValidationError",
      isSourceValidationError: false,
    });
  });

  it("preserves original errors in author catches and does not typecheck", async () => {
    const directory = await project({
      "entry.ts": `import { MakerValidationError } from "@osdk/maker";
export const value: number = "runtime value";
export let caught = false;
try { await import("./document.ts"); } catch (error) { if (!(error instanceof MakerValidationError)) throw error; caught = true; }`,
      "document.ts": invalidDefinition,
    });
    const result = await compatible(directory);
    expect(result.exports).toEqual({ value: "runtime value", caught: true });
    expect(result.objects).toEqual({});
  });

  it("preserves independent issues without inventing paths for message-only checks", async () => {
    const text = invalidDefinition.replace(
      'titlePropertyApiName: "id"',
      'titlePropertyApiName: "missing"',
    );
    const directory = await project({ "entry.ts": text });
    const error = await failure(directory);
    expect(error.diagnostics!.map(({ path }) => path)).toEqual([
      ["apiName"],
      [],
    ]);
    expect(highlight(text, error.diagnostics![0])).toBe('"invalid-name"');
    expect(highlight(text, error.diagnostics![1])).toContain(
      'titlePropertyApiName: "missing"',
    );
  });

  it("locates the second duplicate definition without mutating the first registration", async () => {
    const text =
      definition + '\ndefineObject({ ...document, apiName: "Document" });';
    const directory = await project({ "entry.ts": text });
    const result = await evaluate(directory);
    expect(result.error?.diagnostics?.[0]).toMatchObject({
      code: "duplicate_definition",
      path: ["apiName"],
    });
    expect(highlight(text, result.error!.diagnostics![0])).toBe('"Document"');
    expect(Object.keys(result.objects)).toEqual(["com.acme.Document"]);
  });

  it.each([
    ["Reflect.apply(defineObject, undefined, [INPUT]);", "Reflect.apply("],
    ["const bound = defineObject.bind(undefined, INPUT); bound();", "bound("],
    [
      'const bound = defineObject.bind(undefined, INPUT); bound({ apiName: "Decoy" });',
      "bound(",
    ],
  ])(
    "uses an enclosing location for indirect inputs: %s",
    async (template, start) => {
      const text =
        'import { defineObject } from "@osdk/maker";\n' +
        template.replace(
          "INPUT",
          input.replace('apiName: "Document"', 'apiName: "invalid-name"'),
        );
      const directory = await project({ "entry.ts": text });
      const error = await failure(directory);
      expect(error.diagnostics![0].source.precision).toBe("enclosing");
      expect(highlight(text, error.diagnostics![0]).startsWith(start)).toBe(
        true,
      );
    },
  );

  it("locates namespace optional calls without depending on an author's stack formatter", async () => {
    const text = `import * as maker from "@osdk/maker";
const previous = Error.prepareStackTrace;
try {
  Error.prepareStackTrace = () => { throw new RangeError("formatter failed"); };
  maker.defineObject?.((${input.replace('apiName: "Document"', 'apiName: "invalid-name"')} as const));
} finally { Error.prepareStackTrace = previous; }`;
    const directory = await project({ "entry.ts": text });
    const error = await failure(directory);
    expect(error.diagnostics![0].source.precision).toBe("exact");
    expect(highlight(text, error.diagnostics![0])).toBe('"invalid-name"');
  });

  it.each([
    'throw new RangeError("original failure");',
    'import { MakerValidationError } from "@osdk/maker"; throw new MakerValidationError([]);',
    "const value = ;",
  ])(
    "leaves errors outside definition boundaries unchanged: %s",
    async (text) => {
      const directory = await project({ "entry.ts": text });
      const native = await evaluate(directory, { mode: "native" });
      expect(native.error).toBeDefined();
      expect(await evaluate(directory)).toEqual(native);
    },
  );
});
