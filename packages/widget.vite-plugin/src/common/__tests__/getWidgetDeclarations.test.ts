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

import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  realpath,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import {
  MANIFEST_FILE_LOCATION,
  type WidgetSetManifest,
} from "@osdk/widget.api";
import { build, type InlineConfig } from "vite";
import { expect, test } from "vitest";

import { buildWidgetManifestConfig } from "../../build-plugin/buildWidgetSetManifest.js";
import FoundryWidgetPlugin from "../../index.js";
import { extractWidgetDeclarations } from "../../public/extractWidgetDeclarations.js";
import { extractWidgetManifest } from "../../public/extractWidgetManifest.js";

async function fixture(
  ids = ["first", "second"],
): Promise<InlineConfig & { root: string }> {
  const root = await realpath(
    await mkdtemp(path.join(tmpdir(), "widget-declarations-")),
  );
  await mkdir(path.join(root, "src"));
  for (const [index, id] of ids.entries()) {
    await writeFile(
      path.join(root, `${index}.html`),
      `<script type="module" src="./src/${index}.ts"></script>`,
    );
    await writeFile(
      path.join(root, `src/${index}.ts`),
      `import config from "@configs/${index}.config"; document.title = config.name;`,
    );
    await writeFile(
      path.join(root, `src/${index}.config.ts`),
      `export default ${JSON.stringify({ id, name: id, type: "workshop", parameters: { title: { type: "string", displayName: "Title" } }, events: { changeTitle: { displayName: "Change title", parameterUpdateIds: ["title"] } } })};`,
    );
  }
  return {
    root,
    configFile: false,
    logLevel: "silent",
    base: "/nested/widgets/",
    resolve: { alias: { "@configs": path.join(root, "src") } },
    plugins: [
      FoundryWidgetPlugin({
        build: {
          widgetSetRid:
            "ri.widgetregistry.main.widget-set.00000000-0000-0000-0000-000000000000",
          version: "1.0.0",
          inputSpec: { discovered: { sdks: [] } },
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: ids.map((_, index) => path.join(root, `${index}.html`)),
      },
    },
  };
}

test("extracts multiple aliased declarations without evaluating UI or producing assets", async () => {
  const config = await fixture();
  const declarations = await extractWidgetDeclarations(config);
  expect(
    declarations.map(({ entrypoint, config: widgetConfig }) => [
      entrypoint,
      widgetConfig.id,
    ]),
  ).toEqual([
    ["0.html", "first"],
    ["1.html", "second"],
  ]);
  expect(declarations[0].config.events.changeTitle.parameterUpdateIds).toEqual([
    "title",
  ]);
  await expect(access(path.join(config.root, "dist"))).rejects.toThrow();
});

test.each(["/", "/nested/widgets/", "./"])(
  "declarations agree with production manifests using base %s",
  async (base) => {
    const config = await fixture();
    const declarations = await extractWidgetDeclarations(config);
    await build({ ...config, base });
    const manifest = JSON.parse(
      await readFile(
        path.join(config.root, "dist", MANIFEST_FILE_LOCATION),
        "utf8",
      ),
    ) as WidgetSetManifest;
    const html = await readFile(path.join(config.root, "dist/0.html"), "utf8");
    expect(html).not.toContain("osdk-widget-preview");
    expect(html).not.toContain("__PALANTIR_WIDGET_API__");
    for (const declaration of declarations) {
      const widget = manifest.widgetSet.widgets[declaration.config.id];
      expect(
        buildWidgetManifestConfig(
          declaration.config,
          widget.entrypointJs,
          widget.entrypointCss ?? [],
        ),
      ).toEqual(widget);
    }
  },
);

test("reports the HTML entrypoint when no declaration exists", async () => {
  const config = await fixture(["first"]);
  await writeFile(
    path.join(config.root, "src/0.ts"),
    "document.title = 'No config';",
  );
  await expect(extractWidgetDeclarations(config)).rejects.toThrow(
    "Expected one widget config for 0.html, found 0",
  );
});

test("rejects duplicate widget IDs before building assets", async () => {
  await expect(
    extractWidgetDeclarations(await fixture(["same", "same"])),
  ).rejects.toThrow("Duplicate widget ID: same");
});

test("finds declarations through shared source imports", async () => {
  const config = await fixture(["first"]);
  await writeFile(
    path.join(config.root, "src/0.ts"),
    "import './shared'; document.title = 'Widget';",
  );
  await writeFile(
    path.join(config.root, "src/shared.ts"),
    "import config from './0.config'; document.title = config.name;",
  );
  expect((await extractWidgetDeclarations(config))[0].config.id).toBe("first");
});

test("extracts configure manifests without assets using the production metadata format", async () => {
  const config = await fixture();
  const buildContext = {
    widgetSetRid:
      "ri.widgetregistry.main.widget-set.00000000-0000-0000-0000-000000000000",
    version: "1.0.0",
    inputSpec: { discovered: { sdks: [] } },
  };
  const extracted = await extractWidgetManifest(
    { build: buildContext },
    config,
  );
  await expect(access(path.join(config.root, "dist"))).rejects.toThrow();
  await build(config);
  const manifest = JSON.parse(
    await readFile(
      path.join(config.root, "dist", MANIFEST_FILE_LOCATION),
      "utf8",
    ),
  ) as WidgetSetManifest;
  for (const widget of Object.values(manifest.widgetSet.widgets)) {
    widget.entrypointJs = [];
    widget.entrypointCss = [];
  }
  expect(extracted).toEqual(manifest);
});
