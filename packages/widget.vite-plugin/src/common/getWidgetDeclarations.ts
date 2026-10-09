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

import { readFile } from "node:fs/promises";
import path from "node:path";

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api";
import { parse, type DefaultTreeAdapterTypes } from "parse5";
import type { ViteDevServer } from "vite";

import { isConfigFile } from "../build-plugin/isConfigFile.js";
import { extractWidgetConfig } from "./extractWidgetConfig.js";

export interface WidgetDeclaration {
  entrypoint: string;
  config: WidgetConfig<ParameterConfig>;
}

export async function getWidgetDeclarations(
  server: ViteDevServer,
): Promise<WidgetDeclaration[]> {
  const configuredInput =
    server.config.build.rollupOptions.input ?? "index.html";
  const inputs =
    typeof configuredInput === "string"
      ? [configuredInput]
      : Object.values(configuredInput);
  const declarations: WidgetDeclaration[] = [];
  const ids = new Set<string>();
  for (const input of inputs) {
    const file = path.resolve(server.config.root, input);
    const entrypoint = path
      .relative(server.config.root, file)
      .split(path.sep)
      .join("/");
    const entrypointUrl = `${server.config.base}${entrypoint}`;
    const html = await server.transformIndexHtml(
      entrypointUrl,
      await readFile(file, "utf8"),
    );
    const configFiles = new Set<string>();
    const visited = new Set<string>();
    const visit = async (url: string): Promise<void> => {
      if (url.startsWith(server.config.base)) {
        url = `/${url.slice(server.config.base.length)}`;
      }
      if (visited.has(url)) return;
      visited.add(url);
      const module = await server.moduleGraph.getModuleByUrl(url);
      if (module?.file?.includes("/node_modules/")) return;
      if (module?.file != null && isConfigFile(module.file)) {
        configFiles.add(module.file);
        return;
      }
      if (url.includes("/@vite/") || url.includes("/@react-refresh")) return;
      await server.transformRequest(url);
      const transformed = await server.moduleGraph.getModuleByUrl(url);
      for (const dependency of transformed?.importedModules ?? []) {
        await visit(dependency.url);
      }
    };
    for (const script of moduleScripts(parse(html))) {
      const scriptUrl = new URL(script, `http://widget.local${entrypointUrl}`);
      if (scriptUrl.origin === "http://widget.local") {
        await visit(`${scriptUrl.pathname}${scriptUrl.search}`);
      }
    }
    if (configFiles.size !== 1) {
      throw new Error(
        `Expected one widget config for ${entrypoint}, found ${configFiles.size}: ${[...configFiles].join(", ")}`,
      );
    }
    const config = await extractWidgetConfig([...configFiles][0], server);
    if (ids.has(config.id)) {
      throw new Error(
        `Duplicate widget ID: ${config.id}. Each widget must have a unique ID.`,
      );
    }
    ids.add(config.id);
    declarations.push({ entrypoint, config });
  }
  return declarations;
}

function moduleScripts(node: DefaultTreeAdapterTypes.Node): string[] {
  if (
    "attrs" in node &&
    node.nodeName === "script" &&
    node.attrs.some(
      (attribute) => attribute.name === "type" && attribute.value === "module",
    )
  ) {
    const src = node.attrs.find((attribute) => attribute.name === "src");
    return src == null ? [] : [src.value];
  }
  return "childNodes" in node ? node.childNodes.flatMap(moduleScripts) : [];
}
