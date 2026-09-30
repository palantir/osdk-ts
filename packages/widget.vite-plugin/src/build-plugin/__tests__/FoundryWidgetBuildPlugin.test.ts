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

import {
  mkdir,
  mkdtemp,
  realpath,
  rename,
  readFile,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import type { WidgetSetManifest } from "@osdk/widget.api";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api";
import { build, createServer } from "vite";
import { afterEach, expect, test, vi } from "vitest";

import FoundryWidgetPlugin from "../../index.js";
import type { FoundryWidgetPluginOptions } from "../../index.js";

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
    path.join(root, "foundry.config.json"),
    JSON.stringify({
      build: "local",
      widgetSet: { directory: "output" },
    }),
  );
  await writeFile(path.join(root, "src/widget.css"), ".widget { color: red; }");
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({
      name: "widget-build-test",
      version: "9.9.9",
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
      `import config from "./${index}.config"; import "./widget.css"; document.title = config.name;`,
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
  base = "/",
) {
  await build({
    root,
    base,
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

test.each(["/", "/nested/widgets/", "./"])(
  "builds local widgets without a Foundry URL or RID from a different working directory using base %s",
  async (base) => {
    vi.stubEnv("FOUNDRY_TOKEN", undefined);
    const ids = ["first", "second"];
    const root = await fixture(ids);
    const manifest = await buildFixture(
      root,
      ids,
      {
        defaults: { refreshHostDataOnAction: true },
      },
      base,
    );
    expect(manifest.widgetSet.rid).toBe(widgetSetRid);
    expect(manifest.widgetSet.version).toBe("0.1.0");
    expect(Object.keys(manifest.widgetSet.widgets)).toEqual(ids);
    expect(manifest.widgetSet.inputSpec).toEqual({ discovered: { sdks: [] } });
    for (const [index, id] of ids.entries()) {
      const widget = manifest.widgetSet.widgets[id];
      const html = await readFile(
        path.join(root, `output/${index}.html`),
        "utf8",
      );
      expect(widget.parameters.title).toEqual({
        type: "string",
        displayName: "Title",
      });
      expect(widget.events.changeTitle.parameterUpdateIds).toEqual(["title"]);
      expect(widget.refreshHostDataOnAction).toBe(true);
      expect(widget.entrypointJs).toHaveLength(1);
      expect(widget.entrypointCss).toHaveLength(1);
      for (const asset of widget.entrypointJs) {
        expect(asset.path).toMatch(/^assets\//u);
        expect(html).toContain(`src="${base}${asset.path}"`);
        expect(
          await readFile(path.join(root, "output", asset.path), "utf8"),
        ).toContain("document.title");
      }
      for (const asset of widget.entrypointCss ?? []) {
        expect(asset.path).toMatch(/^assets\//u);
        expect(html).toContain(`href="${base}${asset.path}"`);
        expect(
          await readFile(path.join(root, "output", asset.path), "utf8"),
        ).toContain(".widget");
      }
    }
  },
);

test("discovers SDK metadata and authorizations relative to the Vite root", async () => {
  const root = await fixture(["widget"]);
  await writeFile(
    path.join(root, "package.json"),
    JSON.stringify({ dependencies: { "@ontology/sdk": "4.5.6" } }),
  );
  const sdkPath = path.join(root, "node_modules/@ontology/sdk");
  await mkdir(sdkPath, { recursive: true });
  await writeFile(
    path.join(sdkPath, "package.json"),
    JSON.stringify({
      name: "@ontology/sdk",
      version: "4.5.6",
      osdk: { packageRid: sdkRid },
    }),
  );
  await writeFile(
    path.join(root, "resources.json"),
    JSON.stringify({
      authorizations: { read: [["example-org"]] },
    }),
  );
  const manifest = await buildFixture(root, ["widget"], {});
  expect(manifest.widgetSet.inputSpec).toEqual({
    discovered: {
      sdks: [{ rid: sdkRid, version: "4.5.6" }],
      authorizations: { read: [["example-org"]] },
    },
  });
});

test("rejects duplicate widget identities in a real build", async () => {
  const ids = ["same", "same"];
  const root = await fixture(ids);
  await expect(buildFixture(root, ids, {})).rejects.toThrow(
    "Duplicate widget ID: same",
  );
});

test("requires a configuration file to select local or remote builds", async () => {
  const root = await fixture(["widget"]);
  await rename(
    path.join(root, "foundry.config.json"),
    path.join(root, "foundry.config.json.bak"),
  );
  await expect(buildFixture(root, ["widget"], {})).rejects.toThrow(
    "foundry.config.json file not found",
  );
});

test.each([undefined, "remote"])(
  "builds for an existing widget set with build %s",
  async (mode) => {
    const root = await fixture(["widget"]);
    const remoteRid =
      "ri.widgetregistry.main.widget-set.11111111-1111-1111-1111-111111111111";
    await writeFile(
      path.join(root, "foundry.config.json"),
      JSON.stringify({
        build: mode,
        foundryUrl: "https://example.com",
        widgetSet: { rid: remoteRid, directory: "output" },
      }),
    );
    const manifest = await buildFixture(root, ["widget"], {});
    expect(manifest.widgetSet.rid).toBe(remoteRid);
    expect(manifest.widgetSet.version).toBe("9.9.9");
  },
);

test("explains that local preview is unavailable before requiring a Foundry token", async () => {
  vi.stubEnv("VITEST", undefined);
  vi.stubEnv("FOUNDRY_TOKEN", undefined);
  await expect(
    createServer({
      root: await fixture(["widget"]),
      configFile: false,
      logLevel: "silent",
      plugins: [FoundryWidgetPlugin()],
      server: { middlewareMode: true, hmr: false, watch: null },
    }),
  ).rejects.toThrow("Local widget preview is not supported yet");
});
