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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type {
  ObjectTypeApiName,
  ObjectTypeLinkTypeApiNameMapping,
  OntologyObjectV2,
} from "@osdk/foundry.ontologies";
import { OntologyScenarios } from "@osdk/foundry.ontologies";
import { additionalContext, type Client } from "../Client.js";
import { createClientWithScenario } from "../createClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";

/**
 * The object types and link types that have been modified within a scenario. Returned by
 * {@link EXPERIMENTAL_ScenarioClient.getEditedEntityTypes}. Only many-to-many link type edits are surfaced via
 * `linkTypes`; one-to-many edits surface as object edits on the object type that owns the foreign key property.
 */
export interface ScenarioEditedEntityTypes {
  objectTypes: ObjectTypeApiName[];
  linkTypes: ObjectTypeLinkTypeApiNameMapping[];
}

/**
 * A page of objects edited within a scenario for a given object type. Returned by
 * {@link EXPERIMENTAL_ScenarioClient.getEditedEntities}. The instances are sparse: only `$primaryKey` and `$apiName`
 * are populated. Use {@link Client.call} (e.g. `scenario(MyObject).where({ $primaryKey: { $in: keys } }).fetchPage()`)
 * to load full objects under the scenario context.
 */
export interface EditedEntitiesPage<Q extends ObjectTypeDefinition> {
  data: Osdk.Instance<Q>[];
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
}

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
 * `createClientWithScenario` and decorates it with {@link EXPERIMENTAL_ScenarioClient}-only methods.
 *
 * @internal
 */
export function buildScenarioClient(
  parent: Client,
  scenarioRid: string,
): EXPERIMENTAL_ScenarioClient {
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
  }) as EXPERIMENTAL_ScenarioClient;
}
