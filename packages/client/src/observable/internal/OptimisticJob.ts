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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import { MultiMap } from "mnemonist";
import { additionalContext } from "../../Client.js";
import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import type { ChangedObjects } from "./ChangedObjects.js";
import { createOptimisticId, type OptimisticId } from "./OptimisticId.js";
import type { Store } from "./Store.js";

export class OptimisticJob {
  context: OptimisticBuilder;
  getResult: () => Promise<ChangedObjects>;
  #result!: Promise<ChangedObjects>;

  constructor(store: Store, optimisticId: OptimisticId) {
    const updatedObjects: Array<
      Osdk.Instance<ObjectTypeDefinition>
    > = [];

    const addedObjects: Array<
      Promise<Osdk.Instance<ObjectTypeDefinition>>
    > = [];

    // todo memoize this
    this.getResult = () => {
      return this.#result ??= (async () => {
        const changes: ChangedObjects = {
          addedObjects: new MultiMap(),
          modifiedObjects: new MultiMap(),
        };

        const settled = await Promise.allSettled(addedObjects);
        for (const added of settled) {
          if (added.status === "fulfilled") {
            changes.addedObjects.set(added.value.$objectType, added.value);
          } else {
            // TODO FIXME
            throw added;
          }
        }

        for (const modified of updatedObjects) {
          changes.modifiedObjects.set(modified.$apiName, modified);
        }
        store.batch({ optimisticId }, (batch) => {
          for (const a of ["addedObjects", "modifiedObjects"] as const) {
            for (const b of changes[a].values()) {
              store.getObjectQuery(b.$objectType, b.$primaryKey).writeToStore(
                b,
                "loading",
                batch,
              );
            }
          }
        });

        return changes;
      })();
    };

    this.context = {
      updateObject(value: Osdk.Instance<ObjectTypeDefinition>) {
        updatedObjects.push(value);
        return this;
      },
      createObject(type, pk, properties) {
        const create = store.client[additionalContext].objectFactory2(
          store.client[additionalContext],
          [{
            $primaryKey: pk,
            $apiName: type.apiName,
            $objectType: type.apiName,
            ...properties,
          }],
          undefined,
        ).then(x => x[0]);

        addedObjects.push(create);
        return this;
      },
    };
  }
}

export function runOptimisticJob(
  store: Store,
  optimisticUpdate: undefined | ((ctx: OptimisticBuilder) => void),
): () => Promise<void> {
  if (!optimisticUpdate) {
    return () => Promise.resolve();
  }

  const optimisticId = createOptimisticId();
  const job = new OptimisticJob(store, optimisticId);
  optimisticUpdate(job.context);
  const optimisticApplicationDone = job.getResult().then((result) => {
    store.maybeUpdateLists(result, optimisticId);
  });

  return () => {
    return optimisticApplicationDone.finally(() => {
      store.removeLayer(optimisticId);
    });
  };
}
