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

import { mkdir, mkdtemp, realpath, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { defineObject } from "../api/defineObject.js";
import {
  initializeOntologyState,
  ontologyDefinition,
} from "../api/defineOntology.js";
import { loadOntologySource } from "../cli/loadOntologySource.js";
import { MakerValidationError } from "../validation.js";
import { SourceValidationError } from "./diagnostics.js";

beforeEach(() => initializeOntologyState("com.acme."));

const directories: string[] = [];
async function project(
  files: Readonly<Record<string, string>>,
): Promise<string> {
  const directory = await realpath(
    await mkdtemp(join(tmpdir(), "maker-source-")),
  );
  directories.push(directory);
  await Promise.all(
    Object.entries(files).map(async ([name, text]) => {
      await mkdir(dirname(join(directory, name)), { recursive: true });
      await writeFile(join(directory, name), text);
    }),
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

const definition = `import { defineObject } from "@osdk/maker";
export const document = defineObject({
  apiName: "invalid-name", displayName: "Document", pluralDisplayName: "Documents",
  primaryKeyPropertyApiName: "id", titlePropertyApiName: "id",
  properties: { id: { type: "string" } },
});`;
const validDefinition = definition.replace('"invalid-name"', '"Document"');

async function failure(entry: string): Promise<SourceValidationError> {
  try {
    await loadOntologySource(entry);
  } catch (error) {
    if (error instanceof SourceValidationError) return error;
    throw error;
  }
  throw new Error("Expected source validation to fail");
}

function highlight(
  text: string,
  error: SourceValidationError,
  index = 0,
): string {
  const { start, end } = error.diagnostics[index].source;
  return text.slice(start.offset, end.offset);
}

const unsupported = Number(process.versions.node.split(".")[0]) < 24;

describe.skipIf(unsupported)("source-aware authoring", () => {
  it("locates an aliased definition in its original file through a re-export", async () => {
    const text = definition
      .replace("defineObject }", "defineObject as declareObject }")
      .replace("document = defineObject(", "document = declareObject(");
    const directory = await project({
      "entry.ts": 'export { document } from "./document.js";',
      "document.ts": text,
    });
    const error = await failure(join(directory, "entry.ts"));
    expect(error).toBeInstanceOf(MakerValidationError);
    expect(error.cause).toBeInstanceOf(MakerValidationError);
    expect(error.issues).toBe(error.cause.issues);
    expect(error.diagnostics[0]).toMatchObject({
      code: "invalid_api_name",
      path: ["apiName"],
      source: {
        fileName: join(directory, "document.ts"),
        precision: "exact",
        start: { line: 3 },
      },
    });
    expect(highlight(text, error)).toBe('"invalid-name"');
    expect(error.message).toContain(`${join(directory, "document.ts")}:3:`);
    expect(error.message).toContain('apiName: "invalid-name"');
    expect(error.message).toContain("^");
    expect(ontologyDefinition.OBJECT_TYPE).toEqual({});
  });

  it("locates duplicate declarations at the second definition input", async () => {
    const text =
      validDefinition + '\ndefineObject({ ...document, apiName: "Document" });';
    const directory = await project({ "entry.ts": text });
    const error = await failure(join(directory, "entry.ts"));
    expect(error.diagnostics[0]).toMatchObject({
      code: "duplicate_definition",
      path: ["apiName"],
      source: { precision: "exact", start: { line: 7 } },
    });
    expect(highlight(text, error)).toBe('"Document"');
    expect(Object.keys(ontologyDefinition.OBJECT_TYPE)).toEqual([
      "com.acme.Document",
    ]);
  });

  it("preserves independent issues without inventing paths for message-only checks", async () => {
    const text = definition.replace(
      'titlePropertyApiName: "id"',
      'titlePropertyApiName: "missing"',
    );
    const directory = await project({ "entry.ts": text });
    const error = await failure(join(directory, "entry.ts"));
    expect(error.diagnostics.map(({ path }) => path)).toEqual([
      ["apiName"],
      [],
    ]);
    expect(highlight(text, error)).toBe('"invalid-name"');
    expect(highlight(text, error, 1)).toContain(
      'titlePropertyApiName: "missing"',
    );
  });

  it("preserves host error identity in user catches and leaves unrelated exceptions unchanged", async () => {
    const directory = await project({
      "entry.ts": `import { MakerValidationError } from "@osdk/maker";
export let caught = false;
try { await import("./document.js"); } catch (error) { if (!(error instanceof MakerValidationError)) throw error; caught = true; }`,
      "document.ts": definition,
    });
    expect((await loadOntologySource(join(directory, "entry.ts"))).caught).toBe(
      true,
    );
    await writeFile(
      join(directory, "entry.ts"),
      'throw new RangeError("original failure"); export {};',
    );
    await expect(
      loadOntologySource(join(directory, "entry.ts")),
    ).rejects.toThrow(RangeError);
  });

  it("shares modules within a graph and reloads edited TypeScript across evaluations", async () => {
    const directory = await project({
      "entry.ts":
        'export { document } from "./document.js"; export { document as same } from "./other.js";',
      "other.ts": 'export { document } from "./document.js";',
      "document.ts": validDefinition,
    });
    const entry = join(directory, "entry.ts");
    const first = await loadOntologySource(entry);
    expect(first.same).toBe(first.document);
    expect(ontologyDefinition.OBJECT_TYPE["com.acme.Document"]).toMatchObject({
      displayName: "Document",
    });
    await writeFile(
      join(directory, "document.ts"),
      validDefinition.replace(
        'displayName: "Document"',
        'displayName: "Edited"',
      ),
    );
    initializeOntologyState("com.acme.");
    const second = await loadOntologySource(entry);
    expect(second.document).not.toBe(first.document);
    expect(ontologyDefinition.OBJECT_TYPE["com.acme.Document"]).toMatchObject({
      displayName: "Edited",
    });
    expect(first.document).toMatchObject({ displayName: "Document" });
  });

  it("supports erased type imports, defaults, top-level await, and wrapped inputs", async () => {
    const text = `import type { Missing } from "./missing.js";
import displayName from "./label.js";
${validDefinition.replace('displayName: "Document"', "displayName").replace("defineObject({", "defineObject(({ ").replace("});", "} as const));")}`;
    const directory = await project({
      "entry.ts": text,
      "label.ts": 'export default await Promise.resolve("Ready");',
    });
    const exports = await loadOntologySource(join(directory, "entry.ts"));
    expect(exports.document).toMatchObject({
      apiName: "com.acme.Document",
      displayName: "Ready",
    });
    expect(ontologyDefinition.OBJECT_TYPE["com.acme.Document"]).toMatchObject({
      displayName: "Ready",
    });
  });

  it("isolates concurrent evaluations and removes its bridge on success and failure", async () => {
    const directory = await project({ "entry.ts": "export const value = {};" });
    const entry = join(directory, "entry.ts");
    const bridges = () =>
      Object.getOwnPropertyNames(globalThis).filter((key) =>
        key.startsWith("__makerSource_"),
      );
    const before = bridges();
    const [first, second] = await Promise.all([
      loadOntologySource(entry),
      loadOntologySource(entry),
    ]);
    expect(first.value).not.toBe(second.value);
    expect(bridges()).toEqual(before);
    await writeFile(entry, definition);
    await failure(entry);
    expect(bridges()).toEqual(before);
  });

  it("uses the host runtime and original source inside an installed TypeScript helper", async () => {
    const directory = await project({
      "entry.ts": 'import "authoring-helper";',
      "node_modules/authoring-helper/package.json": JSON.stringify({
        type: "module",
        exports: "./index.ts",
      }),
      "node_modules/authoring-helper/index.ts": definition,
    });
    const error = await failure(join(directory, "entry.ts"));
    expect(error.cause).toBeInstanceOf(MakerValidationError);
    expect(error.diagnostics[0].source.fileName).toBe(
      join(directory, "node_modules/authoring-helper/index.ts"),
    );
    expect(highlight(definition, error)).toBe('"invalid-name"');
  });

  it("honors inherited path aliases and awaited computed imports", async () => {
    const directory = await project({
      "entry.ts": `const name: string = "document"; await import(\`@definitions/\${name}\`);`,
      "tsconfig.json": JSON.stringify({ extends: "./tsconfig.base.json" }),
      "tsconfig.base.json": JSON.stringify({
        compilerOptions: {
          baseUrl: ".",
          paths: { "@definitions/*": ["./definitions/*"] },
        },
      }),
      "definitions/document.ts": definition,
    });
    const error = await failure(join(directory, "entry.ts"));
    expect(error.diagnostics[0].source.fileName).toBe(
      join(directory, "definitions/document.ts"),
    );
    expect(highlight(definition, error)).toBe('"invalid-name"');
  });

  it("locates namespace and optional calls without changing execution", async () => {
    const text = definition
      .replace("import { defineObject }", "import * as maker")
      .replace("defineObject({", "maker.defineObject?.({");
    const directory = await project({ "entry.ts": text });
    const error = await failure(join(directory, "entry.ts"));
    expect(error.diagnostics[0].source.precision).toBe("exact");
    expect(highlight(text, error)).toBe('"invalid-name"');
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
      const input = definition.slice(
        definition.indexOf("defineObject({") + "defineObject(".length,
        definition.lastIndexOf(");"),
      );
      const text =
        'import { defineObject } from "@osdk/maker";\n' +
        template.replace("INPUT", input);
      const directory = await project({ "entry.ts": text });
      const error = await failure(join(directory, "entry.ts"));
      expect(error.diagnostics[0].source.precision).toBe("enclosing");
      expect(highlight(text, error).startsWith(start)).toBe(true);
    },
  );

  it("uses an enclosing call for helpers outside the authoring graph", async () => {
    const key = "__makerExternalHelper";
    Object.defineProperty(globalThis, key, {
      configurable: true,
      value: () =>
        defineObject({
          apiName: "invalid-name",
          displayName: "Document",
          pluralDisplayName: "Documents",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
        }),
    });
    const text = `globalThis[${JSON.stringify(key)}]({ apiName: "Decoy" });`;
    try {
      const directory = await project({ "entry.ts": text });
      const error = await failure(join(directory, "entry.ts"));
      expect(error.diagnostics[0].source.precision).toBe("enclosing");
      expect(highlight(text, error)).toBe(text.slice(0, -1));
    } finally {
      Reflect.deleteProperty(globalThis, key);
    }
  });

  it("does not depend on an author's stack formatter", async () => {
    const text = `import { defineObject } from "@osdk/maker";
const previous = Error.prepareStackTrace;
try {
  Error.prepareStackTrace = () => { throw new RangeError("formatter failed"); };
  ${definition.replace('import { defineObject } from "@osdk/maker";', "").replace("export const document", "const document")}
} finally { Error.prepareStackTrace = previous; }`;
    const directory = await project({ "entry.ts": text });
    const error = await failure(join(directory, "entry.ts"));
    expect(error.cause).toBeInstanceOf(MakerValidationError);
    expect(highlight(text, error)).toBe('"invalid-name"');
  });

  it("does not attribute validation errors thrown outside definition boundaries", async () => {
    const directory = await project({
      "entry.ts":
        'import { MakerValidationError } from "@osdk/maker"; throw new MakerValidationError([]);',
    });
    const error: unknown = await loadOntologySource(
      join(directory, "entry.ts"),
    ).catch((caught: unknown) => caught);
    expect(error).toBeInstanceOf(MakerValidationError);
    expect(error).not.toBeInstanceOf(SourceValidationError);
  });

  it("rejects syntax errors but does not perform semantic typechecking", async () => {
    const directory = await project({
      "bad.ts": "const value = ;",
      "good.ts": 'export const value: number = "runtime value";',
    });
    await expect(loadOntologySource(join(directory, "bad.ts"))).rejects.toThrow(
      SyntaxError,
    );
    expect((await loadOntologySource(join(directory, "good.ts"))).value).toBe(
      "runtime value",
    );
  });

  it("rejects loading new modules after evaluation has ended", async () => {
    const directory = await project({
      "entry.ts": 'export const later = () => import("./document.js");',
      "document.ts": definition,
    });
    const exports = await loadOntologySource(join(directory, "entry.ts"));
    const later = exports.later as () => Promise<unknown>;
    await expect(later()).rejects.toThrow(
      "deferred module loading is not supported",
    );
  });
});
