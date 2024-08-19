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

import type { Attachment } from "@osdk/client.api";
import { Ontologies } from "@osdk/internal.foundry";
import type { MinimalClient } from "./MinimalClientContext.js";

/**
 * Helper function to create an attachment type from a rid
 * @param client - minimal client
 * @param rid - rid of attachment in Foundry
 * @returns
 */
export function createAttachmentFromRid(
  client: MinimalClient,
  rid: string,
): Attachment {
  return {
    rid,
    async fetchContents() {
      return Ontologies.Attachments.getAttachmentContent(
        client,
        rid,
      ) as Promise<Blob>;
    },
    async fetchMetadata() {
      return Ontologies.Attachments.getAttachment(client, rid);
    },
  };
}
