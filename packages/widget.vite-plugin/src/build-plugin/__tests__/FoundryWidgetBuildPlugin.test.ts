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
  readFile,
  realpath,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import type { WidgetSetManifest } from "@osdk/widget.api";
import { MANIFEST_FILE_LOCATION } from "@osdk/widget.api";
import { build } from "vite";
import { afterEach, expect, test } from "vitest";

import FoundryWidgetPlugin from "../../index.js";

let root: string;

afterEach(async () => {
  await rm(root, { recursive: true, force: true });
});

test.each(["/", "/nested/widgets/", "./"])(
  "builds from a Vite root outside the working directory with base %s",
  async (base) => {
    root = await realpath(await mkdtemp(path.join(tmpdir(), "widget-build-")));
    await mkdir(path.join(root, "src"));
    await writeFile(
      path.join(root, "foundry.config.json"),
      JSON.stringify({
        foundryUrl: "https://example.com",
        widgetSet: { rid: "ri.widget-set", directory: "output" },
      }),
    );
    await writeFile(
      path.join(root, "package.json"),
      JSON.stringify({ version: "9.9.9", type: "module" }),
    );
    await writeFile(
      path.join(root, "resources.json"),
      JSON.stringify({ authorizations: { read: [["example-org"]] } }),
    );
    await writeFile(
      path.join(root, "index.html"),
      `<script type="module" src="/src/widget.ts"></script>`,
    );
    await writeFile(
      path.join(root, "src/widget.ts"),
      `import config from "./widget.config"; import "./widget.css"; document.title = config.name;`,
    );
    await writeFile(
      path.join(root, "src/widget.config.ts"),
      `export default { id: "widget", name: "widget", type: "workshop", parameters: {}, events: {} };`,
    );
    await writeFile(
      path.join(root, "src/widget.css"),
      ".widget { color: red; }",
    );

    await build({
      root,
      base,
      configFile: false,
      logLevel: "silent",
      plugins: [FoundryWidgetPlugin()],
      build: { outDir: "output" },
    });

    const manifest = JSON.parse(
      await readFile(path.join(root, "output", MANIFEST_FILE_LOCATION), "utf8"),
    ) as WidgetSetManifest;
    expect(manifest.widgetSet.rid).toBe("ri.widget-set");
    expect(manifest.widgetSet.version).toBe("9.9.9");
    expect(manifest.widgetSet.inputSpec).toEqual({
      discovered: { sdks: [], authorizations: { read: [["example-org"]] } },
    });
    const widget = manifest.widgetSet.widgets.widget;
    const html = await readFile(path.join(root, "output/index.html"), "utf8");
    expect(widget.entrypointJs).toHaveLength(1);
    expect(html).toContain(`src="${base}${widget.entrypointJs[0].path}"`);
    expect(widget.entrypointCss).toHaveLength(1);
    expect(html).toContain(`href="${base}${widget.entrypointCss?.[0].path}"`);
  },
);
