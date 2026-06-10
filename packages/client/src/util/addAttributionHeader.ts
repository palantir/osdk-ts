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

// cspell:ignore callerrid

/**
 * Single-rid attribution header sent on function, query, and action calls.
 *
 * SEAM: the exact header name and value format are owned by the upstream API
 * Gateway `gw-w3-callerrid` contract. The Gateway resolves the calling app rid
 * as `callerRid` only when this header is present and carries a single resource
 * rid; confirm this name and value format match the gateway's expected
 * attribution header before relying on end-to-end attribution.
 */
export const ATTRIBUTION_RID_HEADER = "X-Foundry-Attribution-Rid";

/**
 * Returns a client whose fetch sends the single-rid attribution header so the
 * Gateway can attribute the call to the calling app. Prefers the client's
 * `applicationRid` (OSDK-2) when present and otherwise falls back to the
 * resource rid the call acts on. The header is only sent when an attribution
 * rid is available.
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
