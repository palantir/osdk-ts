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

import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
import invariant from "tiny-invariant";
import * as ts from "typescript";
import type { RunnerTask } from "vitest";
import { beforeEach, describe, expect, it } from "vitest";
import { Generator, relativeTo } from "./Generator.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe(Generator, () => {
  let snapshotBasePath: string;

  expect.addSnapshotSerializer({
    serialize(val) {
      // make it so typescript `SourceFile`s to blow up snapshots
      if (ts.isSourceFile(val)) {
        return `SourceFile [${val.fileName}]`;
      }
      return val;
    },

    test(arg0) {
      return arg0 && ts.isSourceFile(arg0);
    },
  });

  beforeEach(({ task }) => {
    snapshotBasePath = "";
    let suite: RunnerTask | undefined = task;
    while (suite) {
      snapshotBasePath = `${path.sep}${suite.name}` + snapshotBasePath;
      suite = suite.suite;
    }

    snapshotBasePath = path.normalize(
      path.join(__dirname, "..", "test-snapshots", snapshotBasePath),
    );
  });

  describe("foo", () => {
    it("things", () => {});
  });

  it("Generator stuff", () => {
    const generator = new Generator("my-package");

    const file = generator
      .createFile("#my/path/to/file")
      .addNamedImport({
        name: "Foo",
        module: "my.module.foo",
      })
      .addNamedImport({
        name: "Bar",
        module: "my.module.bar",
      })
      .addNamedImport({
        name: "A",
        module: "my.module.shared",
      })
      .addNamedImport({
        name: "B",
        module: "my.module.shared",
      })
      .addNamedImport({
        name: "C",
        module: "my.module.shared",
        typeOnly: true,
      })
      .addNamedImport({
        name: "D",
        module: "my.module.shared",
        typeOnly: true,
      })
      .addNamedImport({
        name: "localA",
        module: "#my/local/path/to/a",
      });

    file.addConst("foo", "Foo", "{ bar: string }");
    file.addTypeOrInterface(`type LocalFoo = "Faux"`);
    file.addTypeOrInterface(`interface LocalBar {foo: LocalFoo } "`);

    const q = file.generateFiles();

    expect(q.compositeDts).toMatchSnapshot();
    expect(q.js).toMatchSnapshot();
  });

  it("typechecks", async () => {
    const generator = new Generator("@my/package");
    const aFile = generator
      .createFile("#a")
      .add(`import { b } from "#b"`)
      .add(`import type { B } from "#b"`)
      .add(`import * as AllOfB from "#b"`)
      .add(`import type * as AllOfBTypes from "#b"`)
      .addConst("a", "{ b: B }", "b")
      .add(`export * as ExportedB from "#b"`)
      .add(`export type {B as C} from "#b"`);

    const bFile = generator
      .createFile("#b")
      .addTypeOrInterface(`interface B { hi: string }`)
      .addConst("b", "B", "{hi: \"mom\"}");

    const files = prependBasePath({
      ...aFile.generateFiles().js,
      ...bFile.generateFiles().js,
      ...aFile.generateFiles().dts,
      ...bFile.generateFiles().dts,
      "/index.d.ts": `${aFile.generateFiles().compositeDts}
      ${bFile.generateFiles().compositeDts}`,
      "/other.js": `import { a } from "@my/package/a";`,
      "/jsconfig.json": JSON.stringify({
        compilerOptions: {
          "module": "Node16",
          checkJs: true,
          noEmit: true,
        },
      }),
    }, snapshotBasePath);

    await expectCodeFilesToMatchSnapshots(files, snapshotBasePath);

    const jsconfigPath = path.join(snapshotBasePath, "jsconfig.json");
    const jsonConfigAsString = files[jsconfigPath];

    const diag = typecheckJs(
      jsconfigPath,
      jsonConfigAsString,
      snapshotBasePath,
    );
    expect(diag).toMatchInlineSnapshot(`[]`);
    expect(diag).toHaveLength(0);
  });
});

describe(relativeTo, () => {
  it("works going up a few dirs", () => {
    expect(relativeTo("/a/b/c", "/a/c")).toEqual("../c");
  });

  it("works with simple same dir", () => {
    expect(relativeTo("/a", "/b")).toEqual("./b");
  });

  it("works with deep same dir", () => {
    expect(relativeTo("/q/w/e/r/a", "/q/w/e/r/b")).toEqual("./b");
  });

  it("doesn't get confused on common prefixes", () => {
    expect(relativeTo("/apple/fruit/cup", "/app/store/purchase")).toEqual(
      "../../app/store/purchase",
    );
  });
});

function typecheckJs(x: string, y: string, basePath: string) {
  const hrm = ts.findConfigFile(basePath, ts.sys.fileExists, "jsconfig.json");

  const configPath = path.join(basePath, "jsconfig.json");

  const { config, error } = ts.readConfigFile(configPath, ts.sys.readFile);
  expect(error).toBeUndefined();

  const { fileNames, options, errors } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
  );
  expect(errors).toMatchInlineSnapshot(`[]`);

  const program = ts.createProgram(fileNames, options);

  return ts.getPreEmitDiagnostics(program);
}

function prependBasePath(
  files: Record<string, string>,
  basePath: string,
) {
  return Object.fromEntries(
    Object.entries(files).map((
      [k, v],
    ) => [path.normalize(path.join(basePath, ".", k)), v]),
  );
}

async function expectCodeFilesToMatchSnapshots(
  filesToSave: Record<string, string>,
  baseDir: string,
) {
  invariant(
    baseDir && baseDir.length > 0,
    "baseDir must be a non-empty string",
  );

  // write the files / verify they match
  for (const [filepath, code] of Object.entries(filesToSave)) {
    const formattedCode = await prettier.format(code, {
      filepath,
    });
    await expect(formattedCode).toMatchFileSnapshot(filepath);
  }

  // remove unused files
  const dirs = [baseDir];
  while (dirs.length > 0) {
    const dir = dirs.pop()!;

    for (const filePath of await fs.readdir(dir)) {
      const fullPath = path.join(dir, filePath);
      if (filesToSave[fullPath] === undefined) {
        await fs.unlink(fullPath);
      } else if ((await fs.stat(fullPath)).isDirectory()) {
        dirs.push(fullPath);
      }
    }
  }
}
