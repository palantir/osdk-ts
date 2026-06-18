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

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import transform from "../experimental-to-ga.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturesDir = join(__dirname, "..", "__testfixtures__");

const _require = createRequire(import.meta.url);

function applyTransform(source: string): string {
  // jscodeshift is CJS; load it via require from our ESM test
  const jscodeshift = (_require("jscodeshift") as any).withParser("tsx");

  const reports: string[] = [];
  const result = transform(
    { source, path: "test.tsx" },
    {
      jscodeshift,
      j: jscodeshift,
      stats: () => {},
      report: (msg: string) => {
        reports.push(msg);
      },
    },
    {},
  );

  return (result ?? source).trim();
}

function applyTransformWithReports(source: string): {
  output: string;
  reports: string[];
} {
  const jscodeshift = (_require("jscodeshift") as any).withParser("tsx");
  const reports: string[] = [];

  const result = transform(
    { source, path: "test.tsx" },
    {
      jscodeshift,
      j: jscodeshift,
      stats: () => {},
      report: (msg: string) => {
        reports.push(msg);
      },
    },
    {},
  );

  return { output: (result ?? source).trim(), reports };
}

function readFixture(name: string): string {
  return readFileSync(join(fixturesDir, name), "utf8");
}

describe("react/experimental-to-ga", () => {
  it("rewrites basic @osdk/react/experimental and /admin specifiers", () => {
    const input = readFixture("basic-specifiers.input.tsx");
    const expected = readFixture("basic-specifiers.output.tsx").trim();
    expect(applyTransform(input)).toBe(expected);
  });

  it("renames OsdkProvider2 and useOsdkClient2 in imports and body", () => {
    const input = readFixture("rename-provider.input.tsx");
    const expected = readFixture("rename-provider.output.tsx").trim();
    expect(applyTransform(input)).toBe(expected);
  });

  it("applies cheap fix for aliased imports (body untouched)", () => {
    const input = readFixture("aliased-import.input.tsx");
    const expected = readFixture("aliased-import.output.tsx").trim();
    expect(applyTransform(input)).toBe(expected);
  });

  it("rewrites re-exports alias-preserving", () => {
    const input = readFixture("reexport.input.tsx");
    const expected = readFixture("reexport.output.tsx").trim();
    expect(applyTransform(input)).toBe(expected);
  });

  it("splits @osdk/client/unstable-do-not-use between old and /observable", () => {
    const input = readFixture("observable-split.input.tsx");
    const expected = readFixture("observable-split.output.tsx").trim();
    expect(applyTransform(input)).toBe(expected);
  });

  it("rewrites jest.mock / vi.mock string literals", () => {
    const input = readFixture("mock-rewrites.input.tsx");
    const expected = readFixture("mock-rewrites.output.tsx").trim();
    expect(applyTransform(input)).toBe(expected);
  });

  it("does not touch files with no matching imports", () => {
    const source =
      `import { useState } from 'react';\nexport default function Foo() { return null; }`;
    // When transform returns file.source unchanged the output equals input
    expect(applyTransform(source)).toBe(source.trim());
  });

  it("reports observableClient prop usage", () => {
    const source = `
import { OsdkProvider } from '@osdk/react';
export function App({ client, obs }: any) {
  return <OsdkProvider client={client} observableClient={obs} />;
}`;
    const { reports } = applyTransformWithReports(source);
    expect(reports.some((r) => r.includes("observableClient"))).toBe(true);
  });

  it("reports and skips body rename on name collision", () => {
    const source = `
import { OsdkProvider2 } from '@osdk/react/experimental';
const OsdkProvider = 'taken';
export function App({ c }: any) {
  return <OsdkProvider2 client={c} />;
}`;
    const { output, reports } = applyTransformWithReports(source);
    expect(reports.some((r) => r.includes("name collision"))).toBe(true);
    // The old name must still appear in the output (rename skipped)
    expect(output).toContain("OsdkProvider2");
  });
});
