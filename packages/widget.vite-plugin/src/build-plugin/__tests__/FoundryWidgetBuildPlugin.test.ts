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

import {
  mkdir,
  mkdtemp,
  realpath,
  readFile,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import type { WidgetSetManifest } from "@osdk/widget.api";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api";
import { build } from "vite";
import { afterEach, expect, test, vi } from "vitest";

import FoundryWidgetPlugin from "../../index.js";
import type { FoundryWidgetPluginOptions } from "../../index.js";
import { superrepoWidgetPlugin } from "../../public/superrepo.js";

afterEach(() => vi.unstubAllEnvs());

const widgetSetRid =
  "ri.widgetregistry.main.widget-set.00000000-0000-0000-0000-000000000000";
const sdkRid =
  "ri.osdk.main.ontology-sdk-package.00000000-0000-0000-0000-000000000000";

async function fixture(ids: string[]) {
  const root = await realpath(
    await mkdtemp(path.join(tmpdir(), "widget-build-")),
  );
  await mkdir(path.join(root, "src"));
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({
      name: "widget-build-test",
      version: "1.0.0",
      type: "module",
    }),
  );
  for (const [index, id] of ids.entries()) {
    await writeFile(
      path.join(root, `${index}.html`),
      `<script type="module" src="/src/${index}.ts"></script>`,
    );
    await writeFile(
      path.join(root, `src/${index}.ts`),
      `import config from "./${index}.config"; document.title = config.name;`,
    );
    await writeFile(
      path.join(root, `src/${index}.config.ts`),
      `export default ${JSON.stringify({ id, name: id, type: "workshop", parameters: { title: { type: "string", displayName: "Title" } }, events: { changeTitle: { displayName: "Change title", parameterUpdateIds: ["title"] } } })};`,
    );
  }
  return root;
}

async function buildFixture(
  root: string,
  ids: string[],
  options: FoundryWidgetPluginOptions,
) {
  await build({
    root,
    configFile: false,
    logLevel: "silent",
    plugins: [FoundryWidgetPlugin(options)],
    build: {
      outDir: "output",
      rollupOptions: {
        input: ids.map((_, index) => path.join(root, `${index}.html`)),
      },
    },
  });
  return JSON.parse(
    await readFile(path.join(root, "output", MANIFEST_FILE_LOCATION), "utf8"),
  ) as WidgetSetManifest;
}

test("builds multiple widgets without Foundry config from a different working directory", async () => {
  const ids = ["first", "second"];
  const root = await fixture(ids);
  const manifest = await buildFixture(root, ids, {
    build: { widgetSetRid, version: "2.3.4" },
    defaults: { refreshHostDataOnAction: true },
  });
  expect(manifest.widgetSet.rid).toBe(widgetSetRid);
  expect(manifest.widgetSet.version).toBe("2.3.4");
  expect(Object.keys(manifest.widgetSet.widgets)).toEqual(ids);
  expect(manifest.widgetSet.inputSpec).toEqual({ discovered: { sdks: [] } });
  for (const widget of Object.values(manifest.widgetSet.widgets)) {
    expect(widget.parameters.title).toEqual({
      type: "string",
      displayName: "Title",
    });
    expect(widget.events.changeTitle.parameterUpdateIds).toEqual(["title"]);
    expect(widget.refreshHostDataOnAction).toBe(true);
    expect(widget.entrypointJs).toHaveLength(1);
    for (const asset of widget.entrypointJs) {
      expect(
        await readFile(path.join(root, "output", asset.path), "utf8"),
      ).toContain("document.title");
    }
  }
});

test("uses explicit SDK inputs even when package discovery would fail", async () => {
  const root = await fixture(["widget"]);
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({ dependencies: { missing: "1.0.0" } }),
  );
  const inputSpec = {
    discovered: { sdks: [{ rid: sdkRid, version: "0.1.0" }] },
  };
  const manifest = await buildFixture(root, ["widget"], {
    build: { widgetSetRid, version: "3.0.0", inputSpec },
  });
  expect(manifest.widgetSet.inputSpec).toEqual(inputSpec);
});

test("discovers SDK metadata and authorizations relative to the Vite root", async () => {
  const root = await fixture(["widget"]);
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({
      name: "generated-sdk",
      version: "4.5.6",
      osdk: { packageRid: sdkRid },
    }),
  );
  await writeFile(
    path.join(root, "resources.json"),
    JSON.stringify({
      authorizations: { read: ["ri.test.main.resource.example"] },
    }),
  );
  const manifest = await buildFixture(root, ["widget"], {
    build: { widgetSetRid, version: "3.0.0" },
  });
  expect(manifest.widgetSet.inputSpec).toEqual({
    discovered: {
      sdks: [{ rid: sdkRid, version: "4.5.6" }],
      authorizations: { read: ["ri.test.main.resource.example"] },
    },
  });
});

test("rejects duplicate widget identities in a real build", async () => {
  const ids = ["same", "same"];
  const root = await fixture(ids);
  await expect(
    buildFixture(root, ids, { build: { widgetSetRid, version: "1.0.0" } }),
  ).rejects.toThrow("Duplicate widget ID: same");
});

test("still requires Foundry configuration when build context is omitted", async () => {
  const root = await fixture(["widget"]);
  await expect(buildFixture(root, ["widget"], {})).rejects.toThrow(
    "foundry.config.json file not found",
  );
});

test("keeps the existing Foundry config and package version build path", async () => {
  const root = await fixture(["widget"]);
  await writeFile(
    path.join(root, "foundry.config.json"),
    JSON.stringify({
      foundryUrl: "https://example.com",
      widgetSet: { rid: widgetSetRid, directory: "output" },
    }),
  );
  const cwd = process.cwd();
  try {
    process.chdir(root);
    const manifest = await buildFixture(root, ["widget"], {});
    expect(manifest.widgetSet.rid).toBe(widgetSetRid);
    expect(manifest.widgetSet.version).toBe("1.0.0");
  } finally {
    process.chdir(cwd);
  }
});

test("builds SuperRepo widgets with CLI version and SDK inputs", async () => {
  const root = await fixture(["widget"]);
  const inputSpec = {
    discovered: { sdks: [{ rid: sdkRid, version: "0.1.0" }] },
  };
  vi.stubEnv(
    "FOUNDRY_WIDGET_BUILD_CONTEXT",
    JSON.stringify({ widgetSetRid, version: "4.0.0", inputSpec }),
  );
  await build({
    root,
    configFile: false,
    logLevel: "silent",
    plugins: [superrepoWidgetPlugin()],
    build: { rollupOptions: { input: path.join(root, "0.html") } },
  });
  const manifest = JSON.parse(
    await readFile(path.join(root, "dist", MANIFEST_FILE_LOCATION), "utf8"),
  ) as WidgetSetManifest;
  expect(manifest.widgetSet.version).toBe("4.0.0");
  expect(manifest.widgetSet.inputSpec).toEqual(inputSpec);
  expect(manifest.widgetSet.widgets.widget.entrypointJs).toHaveLength(1);
});

test("explains the SuperRepo build command when the CLI context is missing", async () => {
  vi.stubEnv("FOUNDRY_WIDGET_BUILD_CONTEXT", undefined);
  await expect(
    build({
      root: await fixture(["widget"]),
      configFile: false,
      logLevel: "silent",
      plugins: [superrepoWidgetPlugin()],
    }),
  ).rejects.toThrow("foundry build custom-widget");
});

test.each([
  null,
  {},
  {
    widgetSetRid,
    version: "1.0.0",
    inputSpec: { discovered: { sdks: [null] } },
  },
])("rejects malformed CLI context %j", (context) => {
  vi.stubEnv("FOUNDRY_WIDGET_BUILD_CONTEXT", JSON.stringify(context));
  expect(() => superrepoWidgetPlugin()).toThrow(
    "Invalid FOUNDRY_WIDGET_BUILD_CONTEXT",
  );
});
