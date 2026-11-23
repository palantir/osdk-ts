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

import type {
  LinkTypeApiNamesFor,
  MinimalDirectedObjectLinkInstance,
  ObjectIdentifiers,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";
import { OntologyScenarios } from "@osdk/foundry.ontologies";

import { additionalContext, type Client } from "../Client.js";
import { createClientFromContext } from "../createClient.js";
import type { ClientCacheKey, MinimalClient } from "../MinimalClientContext.js";
import { createStandardOntologyProviderFactory } from "../ontology/StandardOntologyProvider.js";

/**
 * The set of many-to-many link types modified within a scenario for one source object type. Returned as part of
 * {@link ScenarioEditedEntityTypes.linkTypes}.
 */
export interface EditedLinksForObjectType {
  objectTypeApiName: string;
  linkTypes: string[];
}

/**
 * The object types and link types that have been modified within a scenario. Only many-to-many link type edits are
 * surfaced via `linkTypes`; one-to-many edits surface as object edits on the object type that owns the foreign key
 * property.
 */
export interface ScenarioEditedEntityTypes {
  objectTypes: string[];
  linkTypes: EditedLinksForObjectType[];
}

/**
 * A page of edited object identifiers within a scenario for a given object type. Returned by
 * {@link ScenarioClient.getEditedObjects}. To load full property values, pass the primary keys back
 * through the scenario client, e.g.
 * `scenario(MyObject).where({ $primaryKey: { $in: keys } }).fetchPage()`.
 */
export interface EditedObjectsPage<Q extends ObjectTypeDefinition> {
  data: ObjectIdentifiers<Q>[];
  nextPageToken?: string;
}

/**
 * A page of directed link instances edited within a scenario for a given source object type and link api name.
 * Returned by {@link ScenarioClient.getEditedLinks}. Source and target carry only `$primaryKey` + `$apiName`.
 */
export interface EditedLinksPage<
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
> {
  data: MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>[];
  nextPageToken?: string;
}

/**
 * A page of object identifiers whose edits within a scenario conflict with edits to the scenario's base. Returned by
 * {@link ScenarioClient.EXPERIMENTAL_DO_NOT_USE_getConflictingObjects}. Results contain only `$primaryKey` + `$apiName`.
 *
 * @beta This is an experimental feature subject to change.
 */
export interface EXPERIMENTAL_DO_NOT_USE_ConflictingObjectsPage<
  Q extends ObjectTypeDefinition,
> {
  data: ObjectIdentifiers<Q>[];
  nextPageToken?: string;
}

/**
 * A {@link Client} attached to an ontology scenario. All read and write operations performed via this client are
 * scoped to that scenario. `ScenarioClient` is a superset of {@link Client}.
 */
export interface ScenarioClient extends Client {
  /**
   * The scenario RID this client is scoped to.
   */
  getScenarioReference(): string;

  /**
   * Rebase this scenario onto the latest data from its base
   *
   * @beta This is an experimental feature subject to change.
   */
  EXPERIMENTAL_DO_NOT_USE_rebase(): Promise<void>;

  /**
   * List the object types and many-to-many link types that have been modified within this scenario. Useful as a
   * pre-step before paginating individual edited objects per type.
   */
  getEditedEntityTypes(): Promise<ScenarioEditedEntityTypes>;

  /**
   * Get a page of object identifiers that have been
   * edited within this scenario for the given object type. Use the scenario client to fetch full property values
   * if needed.
   *
   * @example
   * ```ts
   * let pageToken: string | undefined;
   * const keys: string[] = [];
   * do {
   *   const page = await scenario.getEditedObjects(Doctor, { pageSize: 500, pageToken });
   *   keys.push(...page.data.map(o => o.$primaryKey));
   *   pageToken = page.nextPageToken;
   * } while (pageToken);
   * ```
   */
  getEditedObjects<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedObjectsPage<Q>>;

  /**
   * Stream object identifiers for the objects edited within this scenario for the
   * given object type. Pages are fetched lazily and deduplicated by `$primaryKey` across pages (Funnel may return
   * duplicates).
   *
   * @example
   * ```ts
   * for await (const obj of scenario.editedObjectsAsyncIter(Doctor, { pageSize: 500 })) {
   *   // obj.$primaryKey is the unique key for this edited object
   * }
   * ```
   */
  editedObjectsAsyncIter<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<ObjectIdentifiers<Q>>;

  /**
   * Get a page of directed link instances edited within this scenario for a given source object type and link
   * api name. The page form returns a flattened array of `{ source, target, linkType }` triples.
   */
  getEditedLinks<
    Q extends ObjectOrInterfaceDefinition,
    LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
  >(
    sourceObjectType: Q,
    linkType: LINK_TYPE_API_NAME,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedLinksPage<Q, LINK_TYPE_API_NAME>>;

  /**
   * Stream directed link instances edited within this scenario for a given source object type and link api name.
   * Pages are fetched lazily.
   *
   * @example
   * ```ts
   * for await (
   *   const { source, target, linkType } of scenario.editedLinksAsyncIter(Doctor, "treats")
   * ) {
   *   graph.addEdge(source, target, linkType);
   * }
   * ```
   */
  editedLinksAsyncIter<
    Q extends ObjectOrInterfaceDefinition,
    LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
  >(
    sourceObjectType: Q,
    linkType: LINK_TYPE_API_NAME,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<
    MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>
  >;

  /**
   * Get a page of object identifiers whose scenario edits conflict with edits to the scenario's base for the given
   * object type. Conflict detection may report false positives when object versions change without user-visible data
   * changes. Results are a point-in-time check, and include only objects the caller may view and the backend can resolve,
   * and may become stale before merge. Use the base client and scenario client to load both object states for review.
   *
   * `pageSize` bounds the number of objects examined, not the number of conflicts returned, so a page may contain fewer
   * results than requested while still returning `nextPageToken`.
   *
   * @beta This is an experimental feature subject to change.
   */
  EXPERIMENTAL_DO_NOT_USE_getConflictingObjects<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EXPERIMENTAL_DO_NOT_USE_ConflictingObjectsPage<Q>>;

  /**
   * Stream object identifiers for the objects whose scenario edits conflict with edits to the scenario's base for the
   * given object type. Pages are fetched lazily.
   *
   * @beta This is an experimental feature subject to change.
   *
   * @example
   * ```ts
   * for await (const obj of scenario.EXPERIMENTAL_DO_NOT_USE_conflictingObjectsAsyncIter(Doctor, { pageSize: 500 })) {
   *   // obj.$primaryKey identifies an object with a conflicting scenario edit
   * }
   * ```
   */
  EXPERIMENTAL_DO_NOT_USE_conflictingObjectsAsyncIter<
    Q extends ObjectTypeDefinition,
  >(
    objectType: Q,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<ObjectIdentifiers<Q>>;
}

export function isScenarioClient(value: unknown): value is ScenarioClient {
  return (
    value != null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof (value as { getScenarioReference?: unknown })
      .getScenarioReference === "function"
  );
}

/**
 * Shared internal builder used by both {@link withScenario} and {@link createScenario}.
 * Replaces the parent's transaction, scenario, and branch scope without changing the parent.
 * Derives a {@link Client} via `createClientFromContext` and adds {@link ScenarioClient} methods.
 *
 * @internal
 */
export function buildScenarioClient(
  parent: Client,
  scenarioRid: string,
): ScenarioClient {
  const ctx: MinimalClient = parent[additionalContext];

  const scenarioCtx: MinimalClient = {
    ...ctx,
    branch: undefined,
    transactionId: undefined,
    flushEdits: undefined,
    scenarioRid,
    clientCacheKey: {} as ClientCacheKey,
  };
  if (ctx.branch != null) {
    scenarioCtx.ontologyProvider = createStandardOntologyProviderFactory({})(
      scenarioCtx,
    );
    scenarioCtx.narrowTypeInterfaceOrObjectMapping = {};
  }
  const inner: Client = createClientFromContext(scenarioCtx);

  const innerCtx: MinimalClient = inner[additionalContext];

  async function rebase(): Promise<void> {
    const ontologyRid = await innerCtx.ontologyRid;
    await OntologyScenarios.rebaseScenario(innerCtx, ontologyRid, scenarioRid, {
      preview: true,
    });
  }

  async function getEditedEntityTypes(): Promise<ScenarioEditedEntityTypes> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedEntityTypes(
      innerCtx,
      ontologyRid,
      scenarioRid,
      { preview: true },
    );
    return {
      objectTypes: response.objectTypes,
      linkTypes: response.linkTypes,
    };
  }

  async function getEditedObjects<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedObjectsPage<Q>> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedObjects(
      innerCtx,
      ontologyRid,
      scenarioRid,
      objectType.apiName,
      {
        pageSize: options?.pageSize,
        pageToken: options?.pageToken,
        preview: true,
      },
    );
    const data: ObjectIdentifiers<Q>[] = response.data.map((entry) => {
      const wire = entry as { __apiName?: unknown; __primaryKey?: unknown };
      return {
        $apiName: wire.__apiName as Q["apiName"],
        $primaryKey: wire.__primaryKey as PrimaryKeyType<Q>,
      };
    });
    return {
      data,
      nextPageToken: response.nextPageToken,
    };
  }

  async function* editedObjectsAsyncIter<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<ObjectIdentifiers<Q>> {
    const seen = new Set<unknown>();
    let pageToken: string | undefined;
    do {
      const page = await getEditedObjects(objectType, {
        pageSize: options?.pageSize,
        pageToken,
      });
      for (const obj of page.data) {
        const key = obj.$primaryKey;
        if (seen.has(key)) continue;
        seen.add(key);
        yield obj;
      }
      pageToken = page.nextPageToken;
    } while (pageToken != null);
  }

  async function getEditedLinks<
    Q extends ObjectOrInterfaceDefinition,
    LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
  >(
    sourceObjectType: Q,
    linkType: LINK_TYPE_API_NAME,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedLinksPage<Q, LINK_TYPE_API_NAME>> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedLinks(
      innerCtx,
      ontologyRid,
      scenarioRid,
      sourceObjectType.apiName,
      linkType as string,
      {
        pageSize: options?.pageSize,
        pageToken: options?.pageToken,
        preview: true,
      },
    );

    const data: MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>[] = [];
    for (const entry of response.data) {
      const sourceWire = entry.sourceObject as
        | { __apiName?: unknown; __primaryKey?: unknown }
        | undefined;
      if (sourceWire?.__apiName == null || sourceWire.__primaryKey == null) {
        continue;
      }
      const source = {
        $apiName: sourceWire.__apiName,
        $primaryKey: sourceWire.__primaryKey,
      } as MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>["source"];

      for (const linked of entry.linkedObjects) {
        const targetWire = linked.targetObject as
          | { __apiName?: unknown; __primaryKey?: unknown }
          | undefined;
        if (targetWire?.__apiName == null || targetWire.__primaryKey == null) {
          continue;
        }
        const target = {
          $apiName: targetWire.__apiName,
          $primaryKey: targetWire.__primaryKey,
        } as MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>["target"];

        data.push({
          source,
          target,
          linkType: ((linked.linkType as string | undefined) ??
            linkType) as LINK_TYPE_API_NAME,
        });
      }
    }

    return { data, nextPageToken: response.nextPageToken };
  }

  async function* editedLinksAsyncIter<
    Q extends ObjectOrInterfaceDefinition,
    LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
  >(
    sourceObjectType: Q,
    linkType: LINK_TYPE_API_NAME,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<
    MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>
  > {
    let pageToken: string | undefined;
    do {
      const page = await getEditedLinks(sourceObjectType, linkType, {
        pageSize: options?.pageSize,
        pageToken,
      });
      for (const link of page.data) {
        yield link;
      }
      pageToken = page.nextPageToken;
    } while (pageToken != null);
  }

  async function getConflictingObjects<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EXPERIMENTAL_DO_NOT_USE_ConflictingObjectsPage<Q>> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioConflictingObjects(
      innerCtx,
      ontologyRid,
      scenarioRid,
      objectType.apiName,
      {
        pageSize: options?.pageSize,
        pageToken: options?.pageToken,
        preview: true,
      },
    );
    const data: ObjectIdentifiers<Q>[] = response.data.map((entry) => ({
      $apiName: entry.objectTypeApiName as Q["apiName"],
      $primaryKey: entry.primaryKeyValue as PrimaryKeyType<Q>,
    }));
    return {
      data,
      nextPageToken: response.nextPageToken,
    };
  }

  async function* conflictingObjectsAsyncIter<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<ObjectIdentifiers<Q>> {
    let pageToken: string | undefined;
    do {
      const page = await getConflictingObjects(objectType, {
        pageSize: options?.pageSize,
        pageToken,
      });
      for (const object of page.data) {
        yield object;
      }
      pageToken = page.nextPageToken;
    } while (pageToken != null);
  }

  return Object.defineProperties(inner, {
    getScenarioReference: {
      value: () => scenarioRid,
    },
    EXPERIMENTAL_DO_NOT_USE_rebase: {
      value: rebase,
    },
    getEditedEntityTypes: {
      value: getEditedEntityTypes,
    },
    getEditedObjects: {
      value: getEditedObjects,
    },
    editedObjectsAsyncIter: {
      value: editedObjectsAsyncIter,
    },
    getEditedLinks: {
      value: getEditedLinks,
    },
    editedLinksAsyncIter: {
      value: editedLinksAsyncIter,
    },
    EXPERIMENTAL_DO_NOT_USE_getConflictingObjects: {
      value: getConflictingObjects,
    },
    EXPERIMENTAL_DO_NOT_USE_conflictingObjectsAsyncIter: {
      value: conflictingObjectsAsyncIter,
    },
  }) as ScenarioClient;
}
