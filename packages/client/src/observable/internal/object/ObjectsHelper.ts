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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { createWithPropertiesObjectSet } from "../../../derivedProperties/createWithPropertiesObjectSet.js";
import type { ObjectPayload } from "../../ObjectPayload.js";
import type { ObserveObjectOptions } from "../../ObservableClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import { type ObjectCacheKey, ObjectQuery } from "../ObjectQuery.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { Store } from "../Store.js";

export class ObjectsHelper extends AbstractHelper<
  ObjectQuery,
  ObserveObjectOptions<any>
> {
  rdpCanonicalizer: RdpCanonicalizer;

  constructor(store: Store, rdpCanonicalizer: RdpCanonicalizer) {
    super(store);
    this.rdpCanonicalizer = rdpCanonicalizer;
  }
  observe<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveObjectOptions<T>,
    subFn: Observer<ObjectPayload>,
  ): QuerySubscription<ObjectQuery> {
    return super.observe(options, subFn);
  }

  getQuery<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveObjectOptions<T>,
  ): ObjectQuery {
    const apiName = typeof options.apiName === "string"
      ? options.apiName
      : options.apiName.apiName;
    const { pk, withProperties } = options;

    let rdpMappings: Map<string, string> | undefined;
    let rdpsToFetch: Record<string, DerivedPropertyDefinition> | undefined;

    if (withProperties) {
      rdpMappings = new Map<string, string>();
      const definitionMap = new Map<any, DerivedPropertyDefinition>();
      const allRegisteredRdps = this.store.getAllRdpsForType(apiName);
      rdpsToFetch = {};

      for (const [userName, rdpCreator] of Object.entries(withProperties)) {
        const derivedPropertyDefinition = (rdpCreator as any)(
          createWithPropertiesObjectSet(
            options.apiName as any,
            { type: "methodInput" },
            definitionMap,
            true,
          ),
        );
        const definition = definitionMap.get(derivedPropertyDefinition)!;
        const canonicalId = this.rdpCanonicalizer.canonicalize(definition);
        this.store.registerRdp(apiName, canonicalId, definition);
        rdpMappings.set(userName, canonicalId);

        rdpsToFetch[canonicalId] = definition;
      }

      // Add all other registered RDPs for this type
      for (const [canonicalId, definition] of allRegisteredRdps) {
        if (!rdpsToFetch[canonicalId]) {
          rdpsToFetch[canonicalId] = definition;
        }
      }
    }

    const objectCacheKey = this.store.getCacheKey<ObjectCacheKey>(
      "object",
      apiName,
      pk,
    );

    return this.store.getQuery(objectCacheKey, () =>
      new ObjectQuery(
        this.store,
        this.store.getSubject(objectCacheKey),
        apiName,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
        rdpMappings,
        rdpsToFetch,
      ));
  }
}
