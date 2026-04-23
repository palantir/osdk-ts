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

import type {
  Augment,
  Augments,
  FetchPageArgs,
  FetchPageResult,
  InterfaceDefinition,
  NullabilityAdherence,
  ObjectOrInterfaceDefinition,
  ObjectSetArgs,
  ObjectTypeDefinition,
  PropertyKeys,
  PropertyModifierValue,
  Result,
} from "@osdk/api";
import type { PageSize, PageToken } from "@osdk/foundry.core";
import type {
  LoadObjectSetV2MultipleObjectTypesRequest,
  ObjectSet,
  OntologyObjectV2,
  SearchJsonQueryV2,
  SearchObjectsForInterfaceRequest,
  SearchOrderByV2,
} from "@osdk/foundry.ontologies";
import * as OntologyInterfaces from "@osdk/foundry.ontologies/OntologyInterface";
import * as OntologyObjectSets from "@osdk/foundry.ontologies/OntologyObjectSet";
import invariant from "tiny-invariant";
import { extractNamespace } from "../internal/conversions/extractNamespace.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { extractObjectOrInterfaceType } from "../util/extractObjectOrInterfaceType.js";
import { extractRdpDefinition } from "../util/extractRdpDefinition.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";

/**
 * Converts a PropertyModifierValue to the corresponding wire format loadLevel type.
 */
function modifierToLoadLevelType(
  modifier: PropertyModifierValue,
): "extractMainValue" | "applyReducers" | "applyReducersAndExtractMainValue" {
  switch (modifier) {
    case "applyMainValue":
      return "extractMainValue";
    case "applyReducers":
      return "applyReducers";
    case "applyReducersAndExtractMainValue":
      return "applyReducersAndExtractMainValue";
    default: {
      const _exhaustiveCheck: never = modifier;
      throw new Error(`Unknown modifier: ${_exhaustiveCheck}`);
    }
  }
}

type LoadLevelType =
  | "extractMainValue"
  | "applyReducers"
  | "applyReducersAndExtractMainValue";

interface SelectV2SimpleProperty {
  type: "property";
  apiName: string;
}

interface SelectV2PropertyWithLoadLevel {
  type: "propertyWithLoadLevel";
  propertyIdentifier: SelectV2SimpleProperty;
  loadLevel: { type: LoadLevelType };
}

type SelectV2Entry = SelectV2SimpleProperty | SelectV2PropertyWithLoadLevel;

export function buildSelectV2(
  select: readonly string[] | undefined,
  modifiers: Record<string, PropertyModifierValue> | undefined,
  allProperties: readonly string[] | undefined,
): SelectV2Entry[] {
  const modifiersMap = modifiers ?? {};
  const modifierProps = new Set(Object.keys(modifiersMap));
  const hasModifiers = modifierProps.size > 0;

  const entries: SelectV2Entry[] = [];

  if (select && select.length > 0) {
    for (const prop of select) {
      if (modifierProps.has(prop)) {
        entries.push({
          type: "propertyWithLoadLevel",
          propertyIdentifier: { type: "property", apiName: prop },
          loadLevel: { type: modifierToLoadLevelType(modifiersMap[prop]) },
        });
      } else {
        entries.push({ type: "property", apiName: prop });
      }
    }

    for (const [prop, modifier] of Object.entries(modifiersMap)) {
      if (!select.includes(prop)) {
        entries.push({
          type: "propertyWithLoadLevel",
          propertyIdentifier: { type: "property", apiName: prop },
          loadLevel: { type: modifierToLoadLevelType(modifier) },
        });
      }
    }
  } else if (hasModifiers && allProperties && allProperties.length > 0) {
    for (const prop of allProperties) {
      if (modifierProps.has(prop)) {
        entries.push({
          type: "propertyWithLoadLevel",
          propertyIdentifier: { type: "property", apiName: prop },
          loadLevel: { type: modifierToLoadLevelType(modifiersMap[prop]) },
        });
      } else {
        entries.push({ type: "property", apiName: prop });
      }
    }
  }

  return entries;
}

export function augment<
  Q extends ObjectOrInterfaceDefinition,
  T extends PropertyKeys<Q>,
>(
  type: Q,
  ...properties: T[]
): Augment<Q, T> {
  return { [type.apiName]: properties } as any;
}

/** @internal */
export function objectSetToSearchJsonV2(
  objectSet: ObjectSet,
  expectedApiName: string,
  existingWhere: SearchJsonQueryV2 | undefined = undefined,
): SearchJsonQueryV2 | undefined {
  if (objectSet.type === "base" || objectSet.type === "interfaceBase") {
    if (objectSet.type === "base" && objectSet.objectType !== expectedApiName) {
      throw new Error(
        `Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.objectType}`,
      );
    }
    if (
      objectSet.type === "interfaceBase"
      && objectSet.interfaceType !== expectedApiName
    ) {
      throw new Error(
        `Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.interfaceType}`,
      );
    }

    return existingWhere;
  }

  if (objectSet.type === "filter") {
    return objectSetToSearchJsonV2(
      objectSet.objectSet,
      expectedApiName,
      existingWhere == null ? objectSet.where : {
        type: "and",
        value: [existingWhere, objectSet.where],
      },
    );
  }

  throw new Error(`Unsupported objectSet type: ${objectSet.type}`);
}

/** @internal */
export function resolveInterfaceObjectSet(
  objectSet: ObjectSet,
  interfaceTypeApiName: string,
  args: FetchPageArgs<any, any, any, any, any, any>,
): ObjectSet {
  return args?.$includeAllBaseObjectProperties
    ? {
      type: "intersect",
      objectSets: [objectSet, {
        type: "interfaceBase",
        interfaceType: interfaceTypeApiName,
        includeAllBaseObjectProperties: true,
      }],
    }
    : objectSet;
}

/** @internal */
export async function fetchStaticRidPage<
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  rids: readonly string[],
  args: FetchPageArgs<
    ObjectOrInterfaceDefinition,
    PropertyKeys<ObjectOrInterfaceDefinition>,
    R,
    any,
    S,
    T
  >,
  useSnapshot: boolean = false,
): Promise<
  FetchPageResult<
    ObjectOrInterfaceDefinition,
    PropertyKeys<ObjectOrInterfaceDefinition>,
    R,
    S,
    T
  >
> {
  const shouldLoadPropertySecurities = args.$loadPropertySecurityMetadata
    ?? false;
  const requestBody = await applyFetchArgs(
    args,
    {
      objectSet: {
        type: "static",
        objects: rids as string[],
      },
      select: ((args?.$select as string[] | undefined) ?? []),
      excludeRid: !args?.$includeRid,
      snapshot: useSnapshot,
      loadPropertySecurities: shouldLoadPropertySecurities,
    } as LoadObjectSetV2MultipleObjectTypesRequest,
    client,
    { type: "object", apiName: "" },
  );

  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const result = await OntologyObjectSets.loadMultipleObjectTypes(
    addUserAgentAndRequestContextHeaders(client, { osdkMetadata: undefined }),
    await client.ontologyRid,
    requestBody,
    { preview: true, transactionId: client.transactionId },
  );

  return Promise.resolve({
    data: await client.objectFactory2(
      client,
      result.data,
      undefined,
      {},
      shouldLoadPropertySecurities ? result.propertySecurities : undefined,
      !args.$includeRid,
      args.$select,
      false,
      result.interfaceToObjectTypeMappings,
      result.interfaceToObjectTypeMappingsV2,
    ),
    nextPageToken: result.nextPageToken,
    totalCount: result.totalCount,
  }) as unknown as Promise<
    FetchPageResult<
      ObjectOrInterfaceDefinition,
      PropertyKeys<ObjectOrInterfaceDefinition>,
      R,
      S,
      T
    >
  >;
}

async function fetchInterfacePage<
  Q extends InterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  interfaceType: Q,
  args: FetchPageArgs<Q, L, R, any, S, T>,
  objectSet: ObjectSet,
  useSnapshot: boolean = false,
): Promise<FetchPageResult<Q, L, R, S, T>> {
  if (args.$__UNSTABLE_useOldInterfaceApis) {
    invariant(
      args.$loadPropertySecurityMetadata === false
        || args.$loadPropertySecurityMetadata === undefined,
      "`$loadPropertySecurityMetadata` is not supported with old interface APIs",
    );
    const baseRequestBody: SearchObjectsForInterfaceRequest = {
      augmentedProperties: {},
      augmentedSharedPropertyTypes: {},
      augmentedInterfacePropertyTypes: {},
      otherInterfaceTypes: [],
      selectedObjectTypes: [],
      selectedSharedPropertyTypes: args.$select ? [...args.$select] : [],
      selectedInterfacePropertyTypes: [],
      where: objectSetToSearchJsonV2(objectSet, interfaceType.apiName),
    };

    const requestBody = await applyFetchArgs(
      args,
      baseRequestBody,
      client,
      interfaceType,
    );

    if (requestBody.selectedSharedPropertyTypes.length > 0) {
      const remapped = remapPropertyNames(
        interfaceType,
        requestBody.selectedSharedPropertyTypes,
      );
      requestBody.selectedSharedPropertyTypes = Array.from(remapped);
    }

    if (client.flushEdits != null) {
      await client.flushEdits();
    }

    const result = await OntologyInterfaces
      .search(
        addUserAgentAndRequestContextHeaders(client, interfaceType),
        await client.ontologyRid,
        interfaceType.apiName,
        requestBody,
        { preview: true },
      );

    result.data = await client.objectFactory(
      client,
      result.data as OntologyObjectV2[], // drop readonly
      interfaceType.apiName,
      !args.$includeRid,
      await extractRdpDefinition(client, objectSet),
      undefined,
    );
    return result as any;
  }

  const extractedInterfaceTypeApiName = (await extractObjectOrInterfaceType(
    client,
    objectSet,
  ))?.apiName ?? interfaceType.apiName;
  const resolvedInterfaceObjectSet = resolveInterfaceObjectSet(
    objectSet,
    extractedInterfaceTypeApiName,
    args,
  );
  const shouldLoadPropertySecurities = args.$loadPropertySecurityMetadata
    ?? false;

  const modifiers =
    (args as { $applyModifiers?: Record<string, PropertyModifierValue> })
      .$applyModifiers;
  const hasModifiers = modifiers && Object.keys(modifiers).length > 0;
  const hasSelect = args?.$select && args.$select.length > 0;

  let allProperties: string[] | undefined;
  if (!hasSelect && hasModifiers) {
    const ifaceDef = await client.ontologyProvider.getInterfaceDefinition(
      interfaceType.apiName,
    );
    allProperties = ifaceDef ? Object.keys(ifaceDef.properties) : undefined;
  }

  const selectV2 = buildSelectV2(
    args?.$select ? [...args.$select] : undefined,
    modifiers,
    allProperties,
  );

  const requestBody = await buildAndRemapRequestBody(
    args,
    {
      objectSet: resolvedInterfaceObjectSet,
      select: [],
      selectV2,
      loadPropertySecurities: shouldLoadPropertySecurities,
      excludeRid: !args?.$includeRid,
      snapshot: useSnapshot,
    },
    client,
    interfaceType,
  );

  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const result = await OntologyObjectSets.loadMultipleObjectTypes(
    addUserAgentAndRequestContextHeaders(client, interfaceType),
    await client.ontologyRid,
    requestBody,
    {
      preview: true,
      branch: client.branch,
      transactionId: client.transactionId,
    },
  );

  return Promise.resolve({
    data: await client.objectFactory2(
      client,
      result.data,
      extractedInterfaceTypeApiName,
      {},
      shouldLoadPropertySecurities ? result.propertySecurities : undefined,
      !args.$includeRid,
      args.$select,
      false,
      result.interfaceToObjectTypeMappings,
      result.interfaceToObjectTypeMappingsV2,
    ),
    nextPageToken: result.nextPageToken,
    totalCount: result.totalCount,
  }) as unknown as Promise<FetchPageResult<Q, L, R, S, T>>;
}

/** @internal */
export async function fetchPageInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
  T extends boolean,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<L>,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R, A, S, T, never, ORDER_BY_OPTIONS> = {},
  useSnapshot: boolean = false,
): Promise<FetchPageResult<Q, L, R, S, T, ORDER_BY_OPTIONS>> {
  if (objectType.type === "interface") {
    return await fetchInterfacePage(
      client,
      objectType,
      args as FetchPageArgs<
        InterfaceDefinition,
        L,
        R,
        A,
        S,
        T,
        never,
        ORDER_BY_OPTIONS
      >,
      objectSet,
      useSnapshot,
    ) as any; // fixme
  } else {
    return await fetchObjectPage(
      client,
      objectType,
      args as FetchPageArgs<
        ObjectTypeDefinition,
        L,
        R,
        A,
        S,
        T,
        never,
        ORDER_BY_OPTIONS
      >,
      objectSet,
      useSnapshot,
    ) as any; // fixme
  }
}

/** @internal */
export async function fetchPageWithErrorsInternal<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  objectSet: ObjectSet,
  args: FetchPageArgs<Q, L, R, A, S, T> = {},
): Promise<Result<FetchPageResult<Q, L, R, S, T>>> {
  try {
    const result = await fetchPageInternal(client, objectType, objectSet, args);
    return { value: result };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e };
    }
    return { error: e as Error };
  }
}

/**
 * @param client
 * @param objectType
 * @param args
 * @param objectSet
 * @returns
 * @internal
 */
export async function fetchPage<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, any, S, T>,
  objectSet: ObjectSet = resolveBaseObjectSetType(objectType),
): Promise<FetchPageResult<Q, L, R, S, T>> {
  return fetchPageInternal(client, objectType, objectSet, args);
}

/** @internal */
export async function fetchPageWithErrors<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, any, S, T>,
  objectSet: ObjectSet = resolveBaseObjectSetType(objectType),
): Promise<Result<FetchPageResult<Q, L, R, S, T>>> {
  return fetchPageWithErrorsInternal(client, objectType, objectSet, args);
}

async function buildAndRemapRequestBody<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
  T extends boolean,
  RequestBody extends {
    orderBy?: SearchOrderByV2;
    pageToken?: PageToken;
    pageSize?: PageSize;
    selectV2?: SelectV2Entry[];
    selectedSharedPropertyTypes?: readonly string[];
    loadPropertySecurity?: boolean;
  },
>(
  args: FetchPageArgs<Q, L, R, A, S, T>,
  baseBody: RequestBody,
  client: MinimalClient,
  objectType: Q,
): Promise<RequestBody> {
  const requestBody = await applyFetchArgs(
    args,
    baseBody,
    client,
    objectType,
  );

  if (requestBody.selectV2 != null && requestBody.selectV2.length > 0) {
    const remapped = remapSelectV2(objectType, requestBody.selectV2);
    return { ...requestBody, selectV2: remapped };
  }

  return requestBody;
}

function remapSelectV2(
  objectOrInterface: ObjectOrInterfaceDefinition | undefined,
  selectV2: SelectV2Entry[],
): SelectV2Entry[] {
  if (objectOrInterface == null) {
    return selectV2;
  }

  if (objectOrInterface.type !== "interface") {
    return selectV2;
  }

  const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
  if (objApiNamespace == null) {
    return selectV2;
  }

  return selectV2.map((entry): SelectV2Entry => {
    if (entry.type === "property") {
      const [fieldApiNamespace, fieldShortName] = extractNamespace(
        entry.apiName,
      );
      if (fieldApiNamespace == null) {
        return {
          type: "property",
          apiName: `${objApiNamespace}.${fieldShortName}`,
        };
      }
      return entry;
    } else {
      const [fieldApiNamespace, fieldShortName] = extractNamespace(
        entry.propertyIdentifier.apiName,
      );
      if (fieldApiNamespace == null) {
        return {
          ...entry,
          propertyIdentifier: {
            type: "property",
            apiName: `${objApiNamespace}.${fieldShortName}`,
          },
        };
      }
      return entry;
    }
  });
}

/** @internal */
export function remapPropertyNames(
  objectOrInterface: ObjectOrInterfaceDefinition | undefined,
  propertyNames: readonly string[],
): readonly string[] {
  if (objectOrInterface == null) {
    return propertyNames;
  }

  if (objectOrInterface.type === "interface") {
    const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
    return propertyNames.map(name => {
      const [fieldApiNamespace, fieldShortName] = extractNamespace(name);
      return (fieldApiNamespace == null && objApiNamespace != null)
        ? `${objApiNamespace}.${fieldShortName}`
        : name;
    });
  }

  return propertyNames;
}

async function applyFetchArgs<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  A extends Augments,
  S extends NullabilityAdherence,
  T extends boolean,
  X extends {
    orderBy?: SearchOrderByV2;
    pageToken?: PageToken;
    pageSize?: PageSize;
    loadPropertySecurities?: boolean;
  },
>(
  args: FetchPageArgs<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    ObjectSetArgs.OrderByOptions<any>
  >,
  body: X,
  _client: MinimalClient,
  objectType: Q,
): Promise<X> {
  if (args?.$nextPageToken) {
    body.pageToken = args.$nextPageToken;
  }

  if (args?.$pageSize != null) {
    body.pageSize = args.$pageSize;
  }

  if (args?.$loadPropertySecurityMetadata) {
    body.loadPropertySecurities = true;
  }

  const orderBy = args?.$orderBy;
  if (orderBy) {
    if (orderBy === "relevance") {
      body.orderBy = { orderType: "relevance", fields: [] };
    } else {
      const orderByEntries = Object.entries(orderBy);
      const fieldNames = orderByEntries.map(([field]) => field);
      const remappedFields = remapPropertyNames(
        objectType,
        fieldNames,
      );

      body.orderBy = {
        fields: orderByEntries.map(([, direction], index) => ({
          field: remappedFields[index],
          direction,
        })),
      };
    }
  }

  return body;
}

/** @internal */
export async function fetchObjectPage<
  Q extends ObjectTypeDefinition,
  L extends PropertyKeys<Q>,
  R extends boolean,
  S extends NullabilityAdherence,
  T extends boolean,
  ORDER_BY_OPTIONS extends ObjectSetArgs.OrderByOptions<L>,
>(
  client: MinimalClient,
  objectType: Q,
  args: FetchPageArgs<Q, L, R, Augments, S, T, never, ORDER_BY_OPTIONS>,
  objectSet: ObjectSet,
  useSnapshot: boolean = false,
): Promise<FetchPageResult<Q, L, R, S, T, ORDER_BY_OPTIONS>> {
  // For simple object fetches, since we know the object type up front
  // we can parallelize network requests for loading metadata and loading the actual objects
  // In our object factory we await and block on loading the metadata, which if this call finishes, should already be cached on the client
  const modifiers =
    (args as { $applyModifiers?: Record<string, PropertyModifierValue> })
      .$applyModifiers;
  const hasModifiers = modifiers && Object.keys(modifiers).length > 0;
  const hasSelect = args?.$select && args.$select.length > 0;

  let allProperties: string[] | undefined;
  if (!hasSelect && hasModifiers) {
    const objDef = await client.ontologyProvider.getObjectDefinition(
      objectType.apiName,
    );
    allProperties = objDef ? Object.keys(objDef.properties) : undefined;
  } else {
    // We have an empty catch here so that if this call errors before we await later, we won't have an unhandled promise rejection that would crash the process
    // Swallowing the error is ok because we await the metadata load in the objectFactory later anyways which eventually bubbles up the error to the user
    void client.ontologyProvider.getObjectDefinition(objectType.apiName).catch(
      () => {},
    );
  }

  const shouldLoadPropertySecurities = args.$loadPropertySecurityMetadata
    ?? false;

  const selectV2 = buildSelectV2(
    args?.$select ? [...args.$select] : undefined,
    modifiers,
    allProperties,
  );

  const requestBody = await buildAndRemapRequestBody(
    args,
    {
      objectSet,
      select: [],
      selectV2,
      loadPropertySecurities: shouldLoadPropertySecurities,
      excludeRid: !args?.$includeRid,
      snapshot: useSnapshot,
    },
    client,
    objectType,
  );

  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const r = await OntologyObjectSets.load(
    addUserAgentAndRequestContextHeaders(client, objectType),
    await client.ontologyRid,
    requestBody,
    { branch: client.branch, transactionId: client.transactionId },
  );

  return Promise.resolve({
    data: await client.objectFactory(
      client,
      r.data as OntologyObjectV2[],
      undefined,
      undefined,
      await extractRdpDefinition(client, objectSet),
      shouldLoadPropertySecurities ? r.propertySecurities : undefined,
      args.$select,
      false,
    ),
    nextPageToken: r.nextPageToken,
    totalCount: r.totalCount,
  }) as unknown as Promise<FetchPageResult<Q, L, R, S, T, ORDER_BY_OPTIONS>>;
}
