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
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import type {
  LinkTypeApiName,
  ObjectTypeApiName,
  ObjectTypeLinkTypeApiNameMapping,
  OntologyObjectV2,
} from "@osdk/foundry.ontologies";
import { OntologyScenarios } from "@osdk/foundry.ontologies";
import { additionalContext, type Client } from "../Client.js";
import { createClientWithScenario } from "../createClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";

declare const scenarioBrand: unique symbol;

/**
 * The object types and link types that have been modified within a scenario. Returned by
 * {@link ScenarioClient.getEditedEntityTypes}. Only many-to-many link type edits are surfaced via `linkTypes`;
 * one-to-many edits surface as object edits on the object type that owns the foreign key property.
 */
export interface ScenarioEditedEntityTypes {
  objectTypes: ObjectTypeApiName[];
  linkTypes: ObjectTypeLinkTypeApiNameMapping[];
}

/**
 * A page of objects edited within a scenario for a given object type. Returned by
 * {@link ScenarioClient.getEditedEntities}. The instances are sparse: only `$primaryKey` and `$apiName` are
 * populated. Use {@link Client.call} (e.g. `scenario(MyObject).where({ $primaryKey: { $in: keys } }).fetchPage()`)
 * to load full objects under the scenario context.
 */
export interface EditedEntitiesPage<Q extends ObjectTypeDefinition> {
  data: Osdk.Instance<Q>[];
  nextPageToken?: string;
}

/**
 * A page of directed link instances edited within a scenario for a given source object type and link api name.
 * Returned by {@link ScenarioClient.getEditedLinks}. Source and target carry only `$primaryKey` + `$apiName`.
 *
 * `pageSize` is honored on the backend per *source object*. The flattened representation here may therefore
 * contain more items than `pageSize` would suggest. The associated `nextPageToken` still maps to the backend's
 * source-object page boundary.
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
 * scoped to that scenario. `ScenarioClient` is a superset of {@link Client}: it is usable anywhere a `Client` is
 * accepted (e.g. as the `scenarioReference` parameter on a scenario-merge action).
 *
 * @beta This is an experimental, unstable feature subject to change.
 */
export interface ScenarioClient extends Client {
  /** @internal */
  readonly [scenarioBrand]: true;

  /**
   * Returns the scenario reference for this client. Pass directly to an action whose parameter is typed as
   * `scenarioReference`, or use to inspect the underlying scenario RID.
   */
  getScenarioReference(): { scenarioRid: string };

  /**
   * List the object types and many-to-many link types that have been modified within this scenario. Useful as a
   * pre-step before paginating individual edited objects per type.
   */
  getEditedEntityTypes(): Promise<ScenarioEditedEntityTypes>;

  /**
   * Get a page of objects that have been edited within this scenario for a given object type. Each instance only
   * carries `$primaryKey` and `$apiName`; load full objects via the scenario client itself.
   *
   * @example
   * ```ts
   * let pageToken: string | undefined;
   * const keys: string[] = [];
   * do {
   *   const page = await scenario.getEditedEntities(Doctor, { pageSize: 500, pageToken });
   *   keys.push(...page.data.map(o => o.$primaryKey as string));
   *   pageToken = page.nextPageToken;
   * } while (pageToken);
   * ```
   */
  getEditedEntities<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedEntitiesPage<Q>>;

  /**
   * Stream the objects edited within this scenario for a given object type. Pages are fetched lazily and
   * deduplicated by `$primaryKey` across pages (Funnel may return duplicates).
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
    options?: { pageSize?: number },
  ): AsyncIterableIterator<Osdk.Instance<Q>>;

  /**
   * List the outgoing many-to-many link API names that have been modified within this scenario for the given
   * source object type. One-to-many link edits surface as object edits on the FK-owning side and are not returned
   * here.
   */
  getEditedLinkTypes<Q extends ObjectOrInterfaceDefinition>(
    sourceObjectType: Q,
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
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedLinksPage<Q, LINK_TYPE_API_NAME>>;

  /**
   * Stream directed link instances edited within this scenario for a given source object type and link api name.
   * Pages are fetched lazily; items are deduplicated by `(source.$primaryKey, target.$primaryKey)` across pages.
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
}

/**
 * The set of clients that may be passed to {@link withScenario} or {@link createScenario}. Excludes already-branded
 * {@link ScenarioClient} instances at compile time to prevent nested-scenario anti-patterns.
 */
export type NonScenarioClient = Client & {
  readonly [scenarioBrand]?: never;
};

async function convertSparseEditedObjects<Q extends ObjectTypeDefinition>(
  innerCtx: MinimalClient,
  data: OntologyObjectV2[],
): Promise<Osdk.Instance<Q>[]> {
  if (data.length === 0) return [];
  const converted = await innerCtx.objectFactory(
    innerCtx,
    data,
    undefined,
    {},
    undefined,
    true,
  );
  return converted as unknown as Osdk.Instance<Q>[];
}

/**
 * Shared internal builder used by both {@link withScenario} and {@link createScenario}. Validates the parent client
 * is not already inside a scenario or transaction, then constructs a fresh {@link Client} via
 * `createClientWithScenario` and decorates it with {@link ScenarioClient}-only methods.
 *
 * @internal
 */
export function buildScenarioClient(
  parent: NonScenarioClient,
  scenarioRid: string,
): ScenarioClient {
  const ctx: MinimalClient = parent[additionalContext];

  if (ctx.transactionId != null) {
    throw new Error(
      "withScenario / createScenario: the supplied client already has an active transaction. Scenarios cannot be nested on transactions.",
    );
  }
  if (ctx.scenarioRid != null) {
    throw new Error(
      "withScenario / createScenario: the supplied client already has an active scenario. Scenarios cannot be nested.",
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
    ctx.fetch,
  );

  const innerCtx: MinimalClient = inner[additionalContext];

  async function getEditedEntityTypes(): Promise<ScenarioEditedEntityTypes> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedEntityTypes(
      innerCtx,
      ontologyRid,
      scenarioRid,
    );
    return {
      objectTypes: response.objectTypes as ObjectTypeApiName[],
      linkTypes: response.linkTypes as ObjectTypeLinkTypeApiNameMapping[],
    };
  }

  async function getEditedEntities<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number; pageToken?: string },
  ): Promise<EditedEntitiesPage<Q>> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedObjects(
      innerCtx,
      ontologyRid,
      scenarioRid,
      objectType.apiName,
      { pageSize: options?.pageSize, pageToken: options?.pageToken },
    );
    return {
      data: await convertSparseEditedObjects<Q>(innerCtx, response.data),
      nextPageToken: response.nextPageToken,
    };
  }

  async function* editedEntitiesAsyncIter<Q extends ObjectTypeDefinition>(
    objectType: Q,
    options?: { pageSize?: number },
  ): AsyncIterableIterator<Osdk.Instance<Q>> {
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
    sourceObjectType: Q,
  ): Promise<LinkTypeApiNamesFor<Q>[]> {
    const ontologyRid = await innerCtx.ontologyRid;
    const response = await OntologyScenarios.listScenarioEditedLinkTypes(
      innerCtx,
      ontologyRid,
      scenarioRid,
      sourceObjectType.apiName,
    );
    return response.data as unknown as LinkTypeApiNamesFor<Q>[];
  }

  function readObjectLocator(
    raw: OntologyObjectV2 | undefined,
  ): { $apiName: string; $primaryKey: unknown } | undefined {
    if (raw == null) return undefined;
    const wire = raw as unknown as {
      __apiName?: string;
      __primaryKey?: unknown;
    };
    if (wire.__apiName == null || wire.__primaryKey == null) return undefined;
    return { $apiName: wire.__apiName, $primaryKey: wire.__primaryKey };
  }

  function flattenLinksFromObject<
    Q extends ObjectOrInterfaceDefinition,
    LINK_TYPE_API_NAME extends LinkTypeApiNamesFor<Q>,
  >(
    response: {
      data: {
        sourceObject?: OntologyObjectV2;
        linkedObjects: Array<
          { targetObject?: OntologyObjectV2; linkType?: LinkTypeApiName }
        >;
      }[];
    },
    fallbackLinkType: LINK_TYPE_API_NAME,
  ): MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>[] {
    const out: MinimalDirectedObjectLinkInstance<Q, LINK_TYPE_API_NAME>[] = [];
    for (const entry of response.data) {
      const source = readObjectLocator(entry.sourceObject);
      if (source == null) continue;
      for (const linked of entry.linkedObjects) {
        const target = readObjectLocator(linked.targetObject);
        if (target == null) continue;
        out.push({
          source: source as unknown as MinimalDirectedObjectLinkInstance<
            Q,
            LINK_TYPE_API_NAME
          >["source"],
          target: target as unknown as MinimalDirectedObjectLinkInstance<
            Q,
            LINK_TYPE_API_NAME
          >["target"],
          linkType: (linked.linkType ?? fallbackLinkType) as LINK_TYPE_API_NAME,
        });
      }
    }
    return out;
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
      linkType as unknown as LinkTypeApiName,
      { pageSize: options?.pageSize, pageToken: options?.pageToken },
    );
    return {
      data: flattenLinksFromObject<Q, LINK_TYPE_API_NAME>(response, linkType),
      nextPageToken: response.nextPageToken,
    };
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
    const seen = new Set<string>();
    let pageToken: string | undefined;
    do {
      const page = await getEditedLinks(sourceObjectType, linkType, {
        pageSize: options?.pageSize,
        pageToken,
      });
      for (const link of page.data) {
        const dedupKey = `${String(link.source.$primaryKey)}|${
          String(link.target.$primaryKey)
        }|${link.linkType as string}`;
        if (seen.has(dedupKey)) continue;
        seen.add(dedupKey);
        yield link;
      }
      pageToken = page.nextPageToken;
    } while (pageToken != null);
  }

  return Object.defineProperties(inner, {
    getScenarioReference: {
      value: () => ({ scenarioRid }),
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
  }) as ScenarioClient;
}
