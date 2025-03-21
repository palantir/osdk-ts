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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { additionalContext } from "../Client.js";
/**
 * Helper function to create an attachment type from a rid
 * @param client -  An OSDK client.
 * @param rid - The rid of attachment in Foundry.
 * @returns An OSDK attachment object
 */
export function hydrateAttachmentFromRid(client, rid) {
  return hydrateAttachmentFromRidInternal(client[additionalContext], rid);
}

/** @internal */
export function hydrateAttachmentFromRidInternal(client, rid) {
  return {
    rid,
    async fetchContents() {
      return OntologiesV2.Attachments.read(client, rid);
    },
    async fetchMetadata() {
      const r = await OntologiesV2.Attachments.get(client, rid);
      return {
        ...r,
        sizeBytes: Number(r.sizeBytes)
      };
    }
  };
}
//# sourceMappingURL=hydrateAttachmentFromRid.js.map