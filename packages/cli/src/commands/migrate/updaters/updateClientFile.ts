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
import path from "path";

const clientFileContent = `
import { createClient, type Client } from "@osdk/client";
import { createPublicOauthClient, type PublicOauthClient } from "@osdk/oauth";

function getMetaTagContent(tagName: string): string {
  const elements = document.querySelectorAll(\`meta[name="\${tagName}"]\`);
  const element = elements.item(elements.length - 1);
  const value = element ? element.getAttribute("content") : null;
  if (value == null) {
    throw new Error(\`Meta tag \${tagName} not found\`);
  }
  return value;
}

const foundryUrl = getMetaTagContent("osdk-foundryUrl");
const clientId = getMetaTagContent("osdk-clientId");
const redirectUrl = getMetaTagContent("osdk-redirectUrl");
const ontologyRid = getMetaTagContent("osdk-ontologyRid");
const scopes: string[] = [/* TODO: Add scopes here */];

export const auth: PublicOauthClient = createPublicOauthClient(
  clientId,
  foundryUrl,
  redirectUrl,
  {scopes}
);

const client: Client = createClient(foundryUrl, ontologyRid, auth);

export default client;
`;

export async function updateClientFile(
  clientPath: string,
): Promise<{ path: string; backupPath: string }> {
  try {
    consola.info(`Updating ${clientPath}`);

    // Backup file
    consola.info(`Creating backup of original client file at ${clientPath}`);
    const pathInfo = path.parse(clientPath);
    const backupPath = path.join(
      pathInfo.dir,
      `${pathInfo.name}-old${pathInfo.ext}`,
    );
    await fs.copyFile(clientPath, backupPath);

    // Update file content
    await fs.writeFile(clientPath, clientFileContent, "utf-8");
    consola.success(`Successfully updated ${clientPath}\n`);

    return {
      path: clientPath,
      backupPath: backupPath,
    };
  } catch (error) {
    throw new Error(`Failed to update ${clientPath}: ${error}`);
  }
}
