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

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { SourceMap, type SourceMapPayload } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { type CallSiteObject, getCallSites } from "node:util";

import ts from "typescript";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { defineObject } from "../api/defineObject.js";
import { MakerValidationError } from "../validation.js";
import { SourceValidationError } from "./diagnostics.js";
import { SourceSession } from "./runtime.js";

// Supply stack positions without evaluating authoring or installing Node loader hooks.
vi.mock("node:util", () => ({ getCallSites: vi.fn() }));

interface Fixture {
  readonly text: string;
  readonly fileName: string;
  readonly url: string;
}

let directory: string;
beforeEach(async () => {
  directory = await mkdtemp(join(tmpdir(), "maker-runtime-"));
  vi.mocked(getCallSites).mockReset();
});
afterEach(async () => {
  await rm(directory, { recursive: true, force: true });
});

async function fixture(text: string, name = "uploads.ts"): Promise<Fixture> {
  const fileName = join(directory, name);
  await writeFile(fileName, text);
  return {
    text,
    fileName,
    url: `${pathToFileURL(fileName).href}?evaluation=first`,
  };
}

function caller(source: Fixture, needle: string): CallSiteObject {
  const offset = source.text.indexOf(needle);
  if (offset === -1) throw new Error(`Missing fixture call: ${needle}`);
  const lines = source.text.slice(0, offset).split("\n");
  return {
    functionName: "authoring",
    scriptName: source.url,
    scriptId: "authoring",
    lineNumber: lines.length,
    columnNumber: lines[lines.length - 1].length + 1,
  };
}

function observe(
  session: SourceSession,
  error: MakerValidationError,
  callers: readonly CallSiteObject[],
  argumentCount = 1,
): void {
  vi.mocked(getCallSites).mockReturnValue([
    {
      functionName: defineObject.name,
      scriptName: "file:///maker/api/defineObject.js",
      scriptId: "definition",
      lineNumber: 1,
      columnNumber: 1,
    },
    ...callers,
  ]);
  session.observe(error, defineObject, argumentCount);
}

function failure(): MakerValidationError {
  return new MakerValidationError([
    {
      code: "invalid_metadata",
      path: ["properties", "id", "displayName"],
      message: "Invalid display name.",
      suggestion: "Choose another display name.",
    },
  ]);
}

async function enriched(
  session: SourceSession,
  error: MakerValidationError,
): Promise<SourceValidationError> {
  const caught: unknown = await session
    .rethrow(error)
    .catch((value: unknown) => value);
  if (!(caught instanceof SourceValidationError)) throw caught;
  return caught;
}

function highlighted(
  source: Fixture,
  error: SourceValidationError,
  index = 0,
): string {
  const { start, end } = error.diagnostics[index].source;
  return source.text.slice(start.offset, end.offset);
}

// Synthetic issues exercise source attribution independently of validation rules.
const input = `{
  apiName: "Document", displayName: "Document",
  properties: { id: { type: "string", displayName: "Invalid" } },
  implementsInterfaces: ["Unknown", "Unknown"],
}`;

it("maps every issue through a wrapped inline input at an optional call without changing the original error", async () => {
  const source = await fixture(
    `maker.defineObject?.((${input} as const) satisfies ObjectTypeDefinition);`,
  );
  const session = new SourceSession();
  session.registerScript(source.url);
  const error = new MakerValidationError([
    ...failure().issues,
    {
      code: "unknown_interface",
      path: ["implementsInterfaces", 1],
      message: "Unknown interface.",
    },
  ]);
  const stack = error.stack;
  Object.freeze(error);
  observe(session, error, [caller(source, "?.(")]);

  const result = await enriched(session, error);
  expect(result.cause).toBe(error);
  expect(result.issues).toBe(error.issues);
  expect(result.diagnostics.map(({ code, path }) => ({ code, path }))).toEqual(
    error.issues.map(({ code, path }) => ({ code, path })),
  );
  expect(
    result.diagnostics.map(({ source: location }) => location.precision),
  ).toEqual(["exact", "exact"]);
  expect(highlighted(source, result)).toBe('"Invalid"');
  expect(highlighted(source, result, 1)).toBe('"Unknown"');
  expect(error.stack).toBe(stack);
});

it("translates emitted caller coordinates before finding the authored call", async () => {
  const source = await fixture(
    `type Label = { value: string };\n\nconst uploads = maker.defineObject(${input});`,
  );
  const emitted = ts.transpileModule(source.text, {
    fileName: source.fileName,
    compilerOptions: {
      sourceMap: true,
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
    },
  });
  const session = new SourceSession();
  session.registerScript(
    source.url,
    new SourceMap(JSON.parse(emitted.sourceMapText!) as SourceMapPayload),
  );
  const error = failure();
  observe(session, error, [
    caller({ ...source, text: emitted.outputText }, "maker.defineObject"),
  ]);

  const result = await enriched(session, error);
  expect(highlighted(source, result)).toBe('"Invalid"');
  expect(result.diagnostics[0].source).toMatchObject({
    fileName: source.fileName,
    precision: "exact",
    start: { line: 5 },
  });
});

it.each([
  { call: `defineObject(config)`, count: 1 },
  { call: `bound(${input})`, count: 2 },
  { call: `bound.call(${input})`, count: 1 },
  { call: `defineObject(...[${input}])`, count: 1 },
])(
  "uses an enclosing call when its arguments cannot reliably identify the input: $call",
  async ({ call, count }) => {
    const source = await fixture(`${call};`);
    const session = new SourceSession();
    session.registerScript(source.url);
    const error = failure();
    observe(session, error, [caller(source, "(")], count);

    const result = await enriched(session, error);
    expect(result.diagnostics[0].source.precision).toBe("enclosing");
    expect(highlighted(source, result)).toBe(call);
  },
);

it("uses an outer call only as context when an unregistered helper supplied the input", async () => {
  const source = await fixture(`declareUploads(${input});`);
  const helper = await fixture(`defineObject(config);`, "helper.ts");
  const session = new SourceSession();
  session.registerScript(source.url);
  const error = failure();
  observe(session, error, [
    caller(helper, "defineObject"),
    caller(source, "declareUploads"),
  ]);

  const result = await enriched(session, error);
  expect(result.diagnostics[0].source.precision).toBe("enclosing");
  expect(highlighted(source, result)).toBe(source.text.slice(0, -1));
});

it("keeps the first observed definition when the same error passes through an outer boundary", async () => {
  const inner = await fixture(`defineObject(${input});`, "inner.ts");
  const outer = await fixture(
    `defineObject(${input.replace('"Invalid"', '"Decoy"')});`,
    "outer.ts",
  );
  const session = new SourceSession();
  session.registerScript(inner.url);
  session.registerScript(outer.url);
  const error = failure();
  observe(session, error, [caller(inner, "defineObject")]);
  observe(session, error, [caller(outer, "defineObject")]);

  const result = await enriched(session, error);
  expect(result.diagnostics[0].source.fileName).toBe(inner.fileName);
  expect(highlighted(inner, result)).toBe('"Invalid"');
});

it("isolates observations by the full executed URL, even for the same physical file", async () => {
  const source = await fixture(`defineObject(${input});`);
  const first = new SourceSession();
  const second = new SourceSession();
  first.registerScript(source.url);
  second.registerScript(
    source.url.replace("evaluation=first", "evaluation=second"),
  );
  const error = failure();
  const sites = [caller(source, "defineObject")];
  observe(first, error, sites);
  observe(second, error, sites);

  await expect(second.rethrow(error)).rejects.toBe(error);
  expect(highlighted(source, await enriched(first, error))).toBe('"Invalid"');
});

it("does not treat an unmapped generated position as an authored position", async () => {
  const source = await fixture(`defineObject(${input});`);
  const session = new SourceSession();
  session.registerScript(
    source.url,
    new SourceMap({
      version: 3,
      file: "generated.js",
      sources: [source.fileName],
      sourcesContent: [],
      names: [],
      mappings: "",
      sourceRoot: "",
    }),
  );
  const error = failure();
  observe(session, error, [caller(source, "defineObject")]);
  await expect(session.rethrow(error)).rejects.toBe(error);
});

it("leaves unobserved validation failures and unrelated thrown values unchanged", async () => {
  const session = new SourceSession();
  for (const error of [failure(), new RangeError("authoring failed"), null]) {
    await expect(session.rethrow(error)).rejects.toBe(error);
  }
});
