/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { FileContent } from "./fileWriter.js";
import { generateFileHeader } from "./generateFileHeader.js";

/**
 * Generate a basic client.ts file for examples to import
 * This creates a simple client implementation that can be imported by example files.
 *
 * @param version The version to generate the client for
 * @returns FileContent object with the client file
 */
export function generateClientFile(version: string): FileContent {
  const clientTemplate = `${
    generateFileHeader("client", "Client setup for examples")
  }
import { createClient, type Client } from "@osdk/client";
import { $ontologyRid } from "../../../generatedNoCheck/index.js";

const getToken = () => {
  return Promise.resolve("");
};

export const client: Client = createClient(
  "https://example.com",
  $ontologyRid,
  getToken,
);

`;

  return {
    path: `typescript/${version}/client.ts`,
    content: clientTemplate,
  };
}
