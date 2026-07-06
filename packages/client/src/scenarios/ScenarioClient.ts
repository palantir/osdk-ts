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
import { createClientWithScenario } from "../createClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";

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
 * {@link EXPERIMENTAL_ScenarioClient.getEditedEntities}. To load full property values, pass the primary keys back
 * through the scenario client, e.g.
 * `scenario(MyObject).where({ $primaryKey: { $in: keys } }).fetchPage()`.
 */
export interface EditedEntitiesPage<Q extends ObjectTypeDefinition> {
  data: ObjectIdentifiers<Q>[];
  nextPageToken?: string;
}

/**
 * A page of directed link instances edited within a scenario for a given source object type and link api name.
 * Returned by {@link EXPERIMENTAL_ScenarioClient.getEditedLinks}. Source and target carry only `$primaryKey` + `$apiName`.
 */
export interface EditedLinksPage<
  Q extends ObjectOrInterfaceDefinition,
  LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
> {
  data: MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>[];
  nextPageToken?: string;
}

/**
 * A {@link Client} attached to an ontology scenario. All read and write operations performed via this client are
 * scoped to that scenario. `EXPERIMENTAL_ScenarioClient` is a superset of {@link Client}.
 *
 * @beta This is an experimental, unstable feature subject to change.
 */
export interface EXPERIMENTAL_ScenarioClient extends Client {
  /**
   * The scenario RID this client is scoped to.
   */
  getScenarioReference(): string;

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
   *   const page = await scenario.getEditedEntities(Doctor, { pageSize: 500, pageToken });
   *   keys.push(...page.data.map(o => o.$primaryKey));
   *   pageToken = page.nextPageToken;
   * } while (pageToken);
   * ```
   */
  getEditedEntities<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string }
  ): Promise<EditedEntitiesPage<Q>>;

  /**
   * Stream object identifiers for the objects edited within this scenario for the
   * given object type. Pages are fetched lazily and deduplicated by `$primaryKey` across pages (Funnel may return
   * duplicates).
   *
   * @example
   * ```ts
   * for await (const obj of scenario.editedEntitiesAsyncIter(Doctor, { pageSize: 500 })) {
   *   // obj.$primaryKey is the unique key for this edited object
   * }
   * ```
   */
  editedEntitiesAsyncIter<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number }
  ): AsyncIterableIterator<ObjectIdentifiers<Q>>;

  /**
   * List the outgoing many-to-many link API names that have been modified within this scenario for the given
   * source object type. One-to-many link edits surface as object edits on the FK-owning side and are not returned
   * here.
   */
  getEditedLinkTypes<Q extends ObjectOrInterfaceDefinition>(
    sourceObjectType: Q
  ): Promise<LinkTypeApiNamesFor<Q>[]>;

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
    options?: { pageSize?: number; pageToken?: string }
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
    options?: { pageSize?: number }
  ): AsyncIterableIterator<
    MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>
  >;
}

export function isScenarioClient(
  value: unknown
): value is EXPERIMENTAL_ScenarioClient {
  return (
    value != null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof (value as { getScenarioReference?: unknown })
      .getScenarioReference === "function"
  );
}

/**
 * Shared internal builder used by both {@link withScenario} and {@link createScenario}. Throws if the parent client
 * is already inside a scenario. If the parent client has an active transaction, the transaction is ignored (a warning
 * is logged) and the client is scoped to the scenario instead. Constructs a fresh {@link Client} via
 * `createClientWithScenario` and decorates it with {@link EXPERIMENTAL_ScenarioClient}-only methods.
 *
 * @internal
 */
export function buildScenarioClient(
  parent: Client,
  scenarioRid: string
): EXPERIMENTAL_ScenarioClient {
  const ctx: MinimalClient = parent[additionalContext];

  if (ctx.transactionId != null) {
    // eslint-disable-next-line no-console
    console.warn(
      "withScenario / createScenario: the supplied client has an active transaction. Ignoring the transaction and scoping to the scenario instead."
    );
  }
  if (ctx.scenarioRid != null) {
    throw new Error(
      "withScenario / createScenario: the supplied client already has an active scenario. Scenarios cannot be nested."
    );
  }

  const inner: Client = createClientWithScenario(
    scenarioRid,
    ctx.baseUrl,
    ctx.ontologyRid,
    ctx.tokenProvider,
    {
      logger: ctx.logger,
      UNSTABLE_DO_NOT_USE_BRANCH: ctx.branch,
    },
    ctx.fetch
  );

  const innerCtx: MinimalClient = inner[additionalContext];

  async function getEditedEntityTypes(): Promise<ScenarioEditedEntityTypes> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedEntityTypes(
      innerCtx,
      ontologyRid,
      scenarioRid,
      { preview: true }
    );
    return {
      objectTypes: response.objectTypes,
      linkTypes: response.linkTypes,
    };
  }

  async function getEditedEntities<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string }
  ): Promise<EditedEntitiesPage<Q>> {
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
      }
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

  async function* editedEntitiesAsyncIter<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number }
  ): AsyncIterableIterator<ObjectIdentifiers<Q>> {
    const seen = new Set<unknown>();
    let pageToken: string | undefined;
    do {
      const page = await getEditedEntities(objectType, {
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

  async function getEditedLinkTypes<Q extends ObjectOrInterfaceDefinition>(
    sourceObjectType: Q
  ): Promise<LinkTypeApiNamesFor<Q>[]> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedLinkTypes(
      innerCtx,
      ontologyRid,
      scenarioRid,
      sourceObjectType.apiName,
      { preview: true }
    );
    return response.data as LinkTypeApiNamesFor<Q>[];
  }

  async function getEditedLinks<
    Q extends ObjectOrInterfaceDefinition,
    LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
  >(
    sourceObjectType: Q,
    linkType: LINK_TYPE_API_NAME,
    options?: { pageSize?: number; pageToken?: string }
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
      }
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
    options?: { pageSize?: number }
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

  return Object.defineProperties(inner, {
    getScenarioReference: {
      value: () => scenarioRid,
    },
    getEditedEntityTypes: {
      value: getEditedEntityTypes,
    },
    getEditedEntities: {
      value: getEditedEntities,
    },
    editedEntitiesAsyncIter: {
      value: editedEntitiesAsyncIter,
    },
    getEditedLinkTypes: {
      value: getEditedLinkTypes,
    },
    getEditedLinks: {
      value: getEditedLinks,
    },
    editedLinksAsyncIter: {
      value: editedLinksAsyncIter,
    },
  }) as EXPERIMENTAL_ScenarioClient;
}
