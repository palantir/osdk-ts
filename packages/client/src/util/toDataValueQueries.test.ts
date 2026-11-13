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

import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createAttachmentUpload } from "../object/AttachmentUpload.js";
import { toDataValueQueries } from "./toDataValueQueries.js";

describe(toDataValueQueries, () => {
  let clientCtx: MinimalClient;

  const attachmentRid = /^ri\.attachments\.main\.attachment\.[a-z0-9-]+$/iu;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);

    clientCtx = createMinimalClient(
      { ontologyRid: testSetup.fauxFoundry.defaultOntologyRid },
      testSetup.fauxFoundry.baseUrl,
      testSetup.auth,
      {},
    );

    return () => {
      testSetup.apiServer.close();
    };
  });

  it("uploads a single attachment upload", async () => {
    const converted = await toDataValueQueries(
      createAttachmentUpload(new Blob(["hello"]), "file1.txt"),
      clientCtx,
      { type: "attachment" },
    );

    expect(converted).toMatch(attachmentRid);
  });

  it("uploads attachment uploads inside an array", async () => {
    const file = Object.assign(new Blob(["world"]), { name: "file2.txt" });

    const converted = await toDataValueQueries(
      [createAttachmentUpload(new Blob(["hello"]), "file1.txt"), file],
      clientCtx,
      { type: "array", array: { type: "attachment" } },
    );

    expect(converted).toEqual([
      expect.stringMatching(attachmentRid),
      expect.stringMatching(attachmentRid),
    ]);
  });
});
