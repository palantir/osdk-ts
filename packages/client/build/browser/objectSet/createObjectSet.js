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

import { createWithPropertiesObjectSet } from "../derivedProperties/createWithPropertiesObjectSet.js";
import { modernToLegacyWhereClause } from "../internal/conversions/modernToLegacyWhereClause.js";
import { aggregate } from "../object/aggregate.js";
import { fetchPageInternal, fetchPageWithErrorsInternal } from "../object/fetchPage.js";
import { fetchSingle, fetchSingleWithErrors } from "../object/fetchSingle.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";
import { isWireObjectSet } from "../util/WireObjectSet.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";
function isObjectTypeDefinition(def) {
  return def.type === "object";
}

/* @internal */
export function isObjectSet(o) {
  return o != null && typeof o === "object" && isWireObjectSet(objectSetDefinitions.get(o));
}

/** @internal */
export function getWireObjectSet(objectSet) {
  return objectSetDefinitions.get(objectSet);
}
const objectSetDefinitions = new WeakMap();

/** @internal */
export function createObjectSet(objectType, clientCtx, objectSet = resolveBaseObjectSetType(objectType)) {
  const base = {
    aggregate: aggregate.bind(globalThis, augmentRequestContext(clientCtx, () => ({
      finalMethodCall: "aggregate"
    })), objectType, objectSet),
    fetchPage: fetchPageInternal.bind(globalThis, augmentRequestContext(clientCtx, () => ({
      finalMethodCall: "fetchPage"
    })), objectType, objectSet),
    fetchPageWithErrors: fetchPageWithErrorsInternal.bind(globalThis, augmentRequestContext(clientCtx, () => ({
      finalMethodCall: "fetchPageWithErrors"
    })), objectType, objectSet),
    where: clause => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "filter",
        objectSet: objectSet,
        where: modernToLegacyWhereClause(clause, objectType)
      });
    },
    pivotTo: function (type) {
      return createSearchAround(type)();
    },
    union: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "union",
        objectSets: [objectSet, ...objectSets.map(os => objectSetDefinitions.get(os))]
      });
    },
    intersect: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "intersect",
        objectSets: [objectSet, ...objectSets.map(os => objectSetDefinitions.get(os))]
      });
    },
    subtract: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "subtract",
        objectSets: [objectSet, ...objectSets.map(os => objectSetDefinitions.get(os))]
      });
    },
    asyncIter: async function* (args) {
      let $nextPageToken = undefined;
      do {
        const result = await fetchPageInternal(augmentRequestContext(clientCtx, () => ({
          finalMethodCall: "asyncIter"
        })), objectType, objectSet, {
          ...args,
          $nextPageToken
        });
        $nextPageToken = result.nextPageToken;
        for (const obj of result.data) {
          yield obj;
        }
      } while ($nextPageToken != null);
    },
    fetchOne: isObjectTypeDefinition(objectType) ? async (primaryKey, options) => {
      return await fetchSingle(augmentRequestContext(clientCtx, () => ({
        finalMethodCall: "fetchOne"
      })), objectType, options, await createWithPk(clientCtx, objectType, objectSet, primaryKey));
    } : undefined,
    fetchOneWithErrors: isObjectTypeDefinition(objectType) ? async (primaryKey, options) => {
      return await fetchSingleWithErrors(augmentRequestContext(clientCtx, () => ({
        finalMethodCall: "fetchOneWithErrors"
      })), objectType, options, await createWithPk(clientCtx, objectType, objectSet, primaryKey));
    } : undefined,
    subscribe: (listener, opts) => {
      const pendingSubscribe = ObjectSetListenerWebsocket.getInstance(clientCtx).subscribe(objectType, objectSet, listener, opts?.properties);
      return {
        unsubscribe: async () => (await pendingSubscribe)()
      };
    },
    withProperties: clause => {
      const definitionMap = new Map();
      const derivedProperties = {};
      for (const key of Object.keys(clause)) {
        const derivedPropertyDefinition = clause[key](createWithPropertiesObjectSet(objectType, {
          type: "methodInput"
        }, definitionMap));
        derivedProperties[key] = definitionMap.get(derivedPropertyDefinition);
      }
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "withProperties",
        derivedProperties: derivedProperties,
        objectSet: objectSet
      });
    },
    $objectSetInternals: {
      def: objectType
    }
  };
  function createSearchAround(link) {
    return () => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "searchAround",
        objectSet,
        link
      });
    };
  }
  objectSetDefinitions.set(base, objectSet);

  // we are using a type assertion because the marker symbol defined in BaseObjectSet isn't actually used
  // at runtime.
  return base;
}
async function createWithPk(clientCtx, objectType, objectSet, primaryKey) {
  const objDef = await clientCtx.ontologyProvider.getObjectDefinition(objectType.apiName);
  const withPk = {
    type: "filter",
    objectSet: objectSet,
    where: {
      type: "eq",
      field: objDef.primaryKeyApiName,
      value: primaryKey
    }
  };
  return withPk;
}
//# sourceMappingURL=createObjectSet.js.map