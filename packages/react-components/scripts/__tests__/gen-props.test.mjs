/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import path from "path";
import ts from "typescript";
import { fileURLToPath } from "url";
import { describe, expect, it, vi } from "vitest";
import {
  buildRows,
  collapseProse,
  collapseType,
  getAttr,
  getSourceFile,
  renderComment,
  renderDoc,
  resolveProps,
  tableSignature,
} from "../gen-props.mjs";

const PKG_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

/** Identity stand-in for the real `dprint` formatter `renderDoc` injects, so
 * the tests can assert whether the (expensive) format step ran without
 * spawning the binary. */
function fakeFormat() {
  return vi.fn((input) => input);
}

/** Parse an in-memory TS source so resolver tests don't need disk fixtures. */
function parse(code) {
  return ts.createSourceFile(
    "test.ts",
    code,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
    ts.ScriptKind.TS,
  );
}

/** Resolve `Props` from inline source down to its ordered property names. */
function propNames(code) {
  return resolveProps(parse(code), "Props").entries.map((e) => e.name);
}

describe("collapseType", () => {
  it("collapses padding inside generics and parens", () => {
    expect(collapseType("Record< string, never >")).toBe(
      "Record<string, never>",
    );
    expect(collapseType("( arg: T, ) => U")).toBe("(arg: T) => U");
  });

  it("strips inline block comments object literals carry", () => {
    expect(collapseType("{ /* a note */ x: string }")).toBe("{ x: string }");
  });
});

describe("collapseProse", () => {
  it("keeps blank lines as paragraph breaks but folds soft wraps", () => {
    expect(collapseProse("one\ntwo")).toBe("one two");
    expect(collapseProse("one\n\ntwo")).toBe("one<br /><br />two");
  });

  it("collapses whitespace runs and trims", () => {
    expect(collapseProse("  a   b  ")).toBe("a b");
  });
});

describe("getAttr", () => {
  it("reads a marker attribute", () => {
    expect(getAttr("src=foo/Bar.ts interface=BarProps ", "src")).toBe(
      "foo/Bar.ts",
    );
    expect(getAttr("src=foo/Bar.ts interface=BarProps ", "interface")).toBe(
      "BarProps",
    );
  });

  it("is anchored so it doesn't match a key as a suffix", () => {
    expect(getAttr("default-src=nope src=yes ", "src")).toBe("yes");
  });
});

describe("renderComment", () => {
  it("passes plain strings through and maps nullish to empty", () => {
    expect(renderComment("hello")).toBe("hello");
    expect(renderComment(null)).toBe("");
  });
});

describe("resolveProps", () => {
  it("merges `extends`, with the derived member overriding the base", () => {
    const code = `
      interface Base { a: string; shared: number; }
      interface Props extends Base { b?: string; shared: string; }
    `;
    expect(propNames(code)).toEqual(["a", "shared", "b"]);
    // The derived `shared: string` wins over the inherited `shared: number`.
    const rows = buildRows(resolveProps(parse(code), "Props").entries);
    expect(rows.find((r) => r.startsWith("| `shared`"))).toContain("`string`");
  });

  it("flattens intersections", () => {
    expect(propNames(`
      interface A { a: string; }
      interface B { b: number; }
      type Props = A & B;
    `)).toEqual(["a", "b"]);
  });

  it("marks a prop optional when it's optional in or absent from any union branch", () => {
    const entries = resolveProps(
      parse(`
        type Props =
          | { mode: string; value: string; onlyA: number }
          | { mode: string; value?: string; onlyB: number };
      `),
      "Props",
    ).entries;
    const byName = Object.fromEntries(entries.map((e) => [e.name, e]));
    expect(entries.map((e) => e.name)).toEqual([
      "mode",
      "value",
      "onlyA",
      "onlyB",
    ]);
    expect(byName.mode.forcedOptional).toBe(false); // required in both branches
    expect(byName.value.forcedOptional).toBe(true); // optional in one branch
    expect(byName.onlyA.forcedOptional).toBe(true); // absent from a branch
    expect(byName.onlyB.forcedOptional).toBe(true);
  });

  it("honours Pick and Omit", () => {
    const base = `interface Base { a: string; b: number; c: boolean; }`;
    expect(propNames(`${base}\ntype Props = Pick<Base, "a" | "c">;`)).toEqual([
      "a",
      "c",
    ]);
    expect(propNames(`${base}\ntype Props = Omit<Base, "b">;`)).toEqual([
      "a",
      "c",
    ]);
  });

  it("follows a named import into another file", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "gen-props-"));
    try {
      writeFileSync(
        path.join(dir, "base.ts"),
        `export interface Base { shared: string; }\n`,
      );
      writeFileSync(
        path.join(dir, "main.ts"),
        `import type { Base } from "./base.js";\n`
          + `export interface Props extends Base { own: number; }\n`,
      );
      const sf = getSourceFile(path.join(dir, "main.ts"));
      expect(resolveProps(sf, "Props").entries.map((e) => e.name)).toEqual([
        "shared",
        "own",
      ]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("logs and records an unresolvable type instead of dropping it silently", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      const names = propNames(`
        interface Props extends Unresolvable { a: string; }
      `);
      // The local member is still emitted...
      expect(names).toEqual(["a"]);
      // ...and an error is logged so the gap is visible in the output.
      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy.mock.calls[0][0]).toContain("Unresolvable");
    } finally {
      errorSpy.mockRestore();
    }
  });
});

describe("buildRows", () => {
  it("flags required props and renders @default", () => {
    const entries = resolveProps(
      parse(`
        interface Props {
          /** The id. @default undefined */ id?: string;
          name: string;
        }
      `),
      "Props",
    ).entries;
    const rows = buildRows(entries);
    const idRow = rows.find((r) => r.startsWith("| `id`"));
    const nameRow = rows.find((r) => r.startsWith("| `name`"));
    expect(idRow).toContain("The id.");
    expect(idRow).toContain("Defaults to `undefined`.");
    expect(nameRow).toContain("**Required.**");
  });
});

describe("renderDoc — only does work when it's meant to", () => {
  /** Write a self-contained source + doc into a temp dir and return paths. The
   * marker's `src` is expressed relative to PKG_ROOT, matching how the script
   * resolves it. */
  function scaffold(blockBody) {
    const dir = mkdtempSync(path.join(tmpdir(), "gen-props-"));
    const srcPath = path.join(dir, "Api.ts");
    writeFileSync(
      srcPath,
      `export interface Props { a: string; b?: number; }\n`,
    );
    const srcAttr = path.relative(PKG_ROOT, srcPath);
    const docPath = path.join(dir, "Doc.md");
    const marker =
      `<!-- AUTOGEN:props START src=${srcAttr} interface=Props -->\n`
      + `${blockBody}<!-- AUTOGEN:props END -->\n`;
    writeFileSync(docPath, `# Doc\n\n${marker}`);
    return { dir, docPath };
  }

  it("skips a doc that has no AUTOGEN:props marker (no regeneration, no dprint)", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "gen-props-"));
    try {
      const docPath = path.join(dir, "Plain.md");
      writeFileSync(docPath, "# Title\n\nNothing to generate here.\n");
      const format = fakeFormat();
      expect(renderDoc(docPath, format)).toBeNull();
      expect(format).not.toHaveBeenCalled();
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("runs dprint when the table is stale, then skips it once the doc is up to date", () => {
    const { dir, docPath } = scaffold("");
    try {
      // Stale (empty) block → regenerate and run the doc through dprint once.
      const format = fakeFormat();
      const stale = renderDoc(docPath, format);
      expect(format).toHaveBeenCalledTimes(1);
      expect(stale.formatted).not.toBe(stale.original);
      expect(stale.formatted).toContain("`a`");
      expect(stale.formatted).toContain("`b`");

      // Persist the regenerated doc, then re-run: nothing changed, so the
      // expensive dprint step is skipped entirely.
      writeFileSync(docPath, stale.formatted);
      const format2 = fakeFormat();
      const fresh = renderDoc(docPath, format2);
      expect(format2).not.toHaveBeenCalled();
      expect(fresh.formatted).toBe(fresh.original);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("tableSignature", () => {
  it("ignores column-alignment whitespace and separator dash-runs", () => {
    const aligned = "| `a` | `bbbb` |\n| --- | ------ |\n| `x` | `y`    |";
    const tight = "| `a` | `bbbb` |\n| - | - |\n| `x` | `y` |";
    expect(tableSignature(aligned)).toBe(tableSignature(tight));
  });

  it("still distinguishes genuinely different content", () => {
    expect(tableSignature("| `a` |")).not.toBe(tableSignature("| `b` |"));
  });
});
