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

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference, __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid, __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid, __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks } from "@osdk/api/unstable";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { symbolClientContext as oldSymbolClientContext } from "@osdk/shared.client";
import { createBulkLinksAsyncIterFactory } from "./__unstable/createBulkLinksAsyncIterFactory.js";
import { applyAction } from "./actions/applyAction.js";
import { additionalContext } from "./Client.js";
import { createMinimalClient } from "./createMinimalClient.js";
import { fetchMetadataInternal } from "./fetchMetadata.js";
import { MinimalLogger } from "./logger/MinimalLogger.js";
import { fetchPage } from "./object/fetchPage.js";
import { fetchSingle } from "./object/fetchSingle.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import { applyQuery } from "./queries/applyQuery.js";

// We import it this way to keep compatible with CJS. If we referenced the
// value of `symbolClientContext` directly, then we would have to a dynamic import
// in `createClientInternal` which would make it async and a break.
// Since this is just a string in `@osdk/shared.client2` instead of a symbol,
// we can safely perform this trick.

class ActionInvoker {
  constructor(clientCtx, actionDef) {
    // We type the property as a generic function as binding `applyAction`
    // doesn't return a type thats all that useful anyway
    // The implements covers us for the most part here as this exact type doesn't
    // escape this file
    this.applyAction = applyAction.bind(undefined, clientCtx, actionDef);
    this.batchApplyAction = applyAction.bind(undefined, clientCtx, actionDef);
  }
}
class QueryInvoker {
  constructor(clientCtx, queryDef) {
    this.executeFunction = applyQuery.bind(undefined, clientCtx, queryDef);
  }
}

/** @internal */
export function createClientInternal(objectSetFactory,
// first so i can bind
baseUrl, ontologyRid, tokenProvider, options = undefined, fetchFn = fetch) {
  if (typeof ontologyRid === "string") {
    if (!ontologyRid.startsWith("ri.")) {
      throw new Error("Invalid ontology RID");
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    ontologyRid.then(ontologyRid => {
      if (!ontologyRid.startsWith("ri.")) {
        // FIXME this promise is not await so this just shows up as an unhandled promise rejection
        throw new Error("Invalid ontology RID");
      }
    });
  }
  const clientCtx = createMinimalClient({
    ontologyRid
  }, baseUrl, tokenProvider, {
    ...options,
    logger: options?.logger ?? new MinimalLogger()
  }, fetchFn, objectSetFactory);
  const fetchMetadata = fetchMetadataInternal.bind(undefined, clientCtx);
  const client = Object.defineProperties(function (o) {
    if (o.type === "object" || o.type === "interface") {
      return objectSetFactory(o, clientCtx);
    } else if (o.type === "action") {
      return new ActionInvoker(clientCtx, o); // then as any for dealing with the conditional return value
    } else if (o.type === "query") {
      return new QueryInvoker(clientCtx, o);
    } else if (o.type === "experiment") {
      switch (o.name) {
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks.name:
          return {
            getBulkLinks: createBulkLinksAsyncIterFactory(clientCtx)
          };
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid.name:
          return {
            fetchOneByRid: async (objectType, rid, options) => {
              return await fetchSingle(clientCtx, objectType, options, createWithRid([rid]));
            }
          };
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference.name:
          return {
            createMediaReference: async args => {
              const {
                data,
                fileName,
                objectType,
                propertyType
              } = args;
              return await OntologiesV2.MediaReferenceProperties.upload(clientCtx, await clientCtx.ontologyRid, objectType.apiName, propertyType, data, {
                mediaItemPath: fileName,
                preview: true
              });
            }
          };
        case __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid.name:
          return {
            fetchPageByRid: async (objectOrInterfaceType, rids, options = {}) => {
              return await fetchPage(clientCtx, objectOrInterfaceType, options, createWithRid(rids));
            }
          };
      }
      throw new Error("not implemented");
    } else {
      throw new Error("not implemented");
    }
  }, {
    [oldSymbolClientContext]: {
      value: clientCtx
    },
    ["__osdkClientContext"]: {
      value: clientCtx
    },
    [additionalContext]: {
      value: clientCtx
    },
    fetchMetadata: {
      value: fetchMetadata
    }
  });
  return client;
}
export const createClient = createClientInternal.bind(undefined, createObjectSet);
function createWithRid(rids) {
  return {
    type: "static",
    "objects": rids
  };
}
//# sourceMappingURL=createClient.js.map