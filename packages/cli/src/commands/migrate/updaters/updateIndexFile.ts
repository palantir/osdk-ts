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

import { consola } from "consola";
import { promises as fs } from "fs";
import { JSDOM } from "jsdom";
import path from "path";
import prettier from "prettier";

const metaTags = [
  { name: "osdk-clientId", content: "%VITE_FOUNDRY_CLIENT_ID%" },
  { name: "osdk-redirectUrl", content: "%VITE_FOUNDRY_REDIRECT_URL%" },
  { name: "osdk-foundryUrl", content: "%VITE_FOUNDRY_API_URL%" },
  { name: "osdk-ontologyRid", content: "%VITE_FOUNDRY_ONTOLOGY_RID%" },
];

export async function updateIndexFile(
  indexPath: string,
): Promise<{ path: string; backupPath: string }> {
  try {
    const filePath = indexPath;
    consola.info(`Updating ${indexPath}`);

    // Create backup of original file
    const pathInfo = path.parse(filePath);
    const backupPath = path.join(
      pathInfo.dir,
      `${pathInfo.name}-old${pathInfo.ext}`,
    );
    consola.info(`Creating backup of original index file at ${backupPath}`);
    await fs.copyFile(filePath, backupPath);

    // Parse the content of the existing file
    const content = await fs.readFile(filePath, "utf-8");
    const dom = new JSDOM(content);
    const { document } = dom.window;

    let head = document.querySelector("head");
    if (!head) {
      head = document.createElement("head");
      const html = document.querySelector("html");
      if (html) {
        if (html.firstChild) {
          html.insertBefore(head, html.firstChild);
        } else {
          html.appendChild(head);
        }
      } else {
        const html = document.createElement("html");
        html.appendChild(head);
        document.appendChild(html);
      }
    }

    metaTags.forEach(({ name, content }) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (metaTag) {
        if (metaTag.getAttribute("content") !== content) {
          metaTag.setAttribute("content", content);
        }
      } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("name", name);
        metaTag.setAttribute("content", content);
        head.appendChild(metaTag);
      }
    });

    const updatedHtml = dom.serialize();
    const formattedHtml = await prettier.format(updatedHtml, {
      parser: "html",
      printWidth: 100,
      tabWidth: 2,
    });
    await fs.writeFile(filePath, formattedHtml, "utf-8");

    consola.success(`Successfully updated ${filePath}\n`);
    return {
      path: filePath,
      backupPath: backupPath,
    };
  } catch (error) {
    throw new Error(`Failed to update ${indexPath}: ${error}`);
  }
}
