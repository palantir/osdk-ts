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

import { createFetchHeaderMutator } from "@osdk/shared.net.fetch";
import type { MinimalClient } from "../MinimalClientContext.js";

/** Attribution header the gateway reads to attribute a call to the calling app. */
export const ATTRIBUTION_RID_HEADER = "X-Foundry-Attribution-Rid";

/**
 * Returns a client whose fetch sends the attribution header, preferring
 * `applicationRid` and falling back to the ontology rid. Omitted when neither
 * is set.
 */
export function addAttributionHeader(client: MinimalClient): MinimalClient {
  return {
    ...client,
    fetch: createFetchHeaderMutator(client.fetch, async (headers) => {
      const attributionRid = await resolveAttributionRid(client);
      if (attributionRid != null && attributionRid.length > 0) {
        headers.set(ATTRIBUTION_RID_HEADER, attributionRid);
      }
      return headers;
    }),
  };
}

async function resolveAttributionRid(
  client: {
    applicationRid?: string;
    ontologyRid: string | Promise<string>;
  },
): Promise<string | undefined> {
  if (client.applicationRid != null && client.applicationRid.length > 0) {
    return client.applicationRid;
  }
  return client.ontologyRid;
}
