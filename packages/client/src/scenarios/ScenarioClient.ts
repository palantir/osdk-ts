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
import { OntologyScenarios } from "@osdk/foundry.ontologies";
import { additionalContext, type Client } from "../Client.js";
import { createClientWithScenario } from "../createClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";

/**
 * The set of many-to-many link types modified within a scenario for one source object type. Returned as part of
 * {@link ScenarioEditedEntityTypes.linkTypes}.
 */
export interface EditedLinkTypeMapping {
  objectTypeApiName: string;
  linkTypes: string[];
}

/**
 * The object types and link types that have been modified within a scenario. Returned by
 * {@link ScenarioClient.getEditedEntityTypes}. Only many-to-many link type edits are surfaced via `linkTypes`;
 * one-to-many edits surface as object edits on the object type that owns the foreign key property.
 */
export interface ScenarioEditedEntityTypes {
  objectTypes: string[];
  linkTypes: EditedLinkTypeMapping[];
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
 * A {@link Client} attached to an ontology scenario. All read and write operations performed via this client are
 * scoped to that scenario. `ScenarioClient` is a superset of {@link Client}: it is usable anywhere a `Client` is
 * accepted (e.g. as the `scenarioReference` parameter on a scenario-merge action).
 *
 * @beta This is an experimental, unstable feature subject to change.
 */
export interface ScenarioClient extends Client {
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
}

/**
 * Shared internal builder used by both {@link withScenario} and {@link createScenario}. Validates the parent client
 * is not already inside a scenario or transaction, then constructs a fresh {@link Client} via
 * `createClientWithScenario` and decorates it with {@link ScenarioClient}-only methods.
 *
 * @internal
 */
export function buildScenarioClient(
  parent: Client,
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
      objectTypes: response.objectTypes,
      linkTypes: response.linkTypes,
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
    const data = response.data.length === 0
      ? []
      : (await innerCtx.objectFactory(
        innerCtx,
        response.data,
        undefined,
        {},
        undefined,
        true,
      )) as unknown as Osdk.Instance<Q>[];
    return {
      data,
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
  }) as ScenarioClient;
}
