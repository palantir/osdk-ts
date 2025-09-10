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

import type { Logger } from "@osdk/api";
import invariant from "tiny-invariant";
import type { BatchContext } from "./BatchContext.js";
import { type Changes } from "./Changes.js";
import { createInitEntry } from "./createInitEntry.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Entry } from "./Layer.js";
import { Layer } from "./Layer.js";
import type { OptimisticId } from "./OptimisticId.js";
import { Subjects } from "./Subjects.js";
import { tombstone } from "./tombstone.js";

export class Layers {
  #truthLayer: Layer = new Layer(undefined, undefined);
  #topLayer: Layer;
  #onRevalidate: (
    changes: Changes,
    optimisticId?: OptimisticId,
  ) => Promise<void>;

  logger?: Logger;

  readonly subjects: Subjects;

  constructor(
    { logger, onRevalidate }: {
      logger?: Logger;
      onRevalidate: (
        changes: Changes,
        optimisticId?: OptimisticId,
      ) => Promise<void>;
    },
  ) {
    this.logger = logger;
    this.#topLayer = this.#truthLayer;
    this.subjects = new Subjects({ logger, layers: this });
    this.#onRevalidate = onRevalidate;
  }

  get top(): Layer {
    return this.#topLayer;
  }

  get truth(): Layer {
    return this.#truthLayer;
  }

  remove(layerId: OptimisticId): void {
    invariant(
      layerId != null,
      "undefined is the reserved layerId for the truth layer",
    );
    // 1. collect all cache keys for a given layerId
    let currentLayer: Layer | undefined = this.#topLayer;
    const cacheKeys = new Map<KnownCacheKey, Entry<any>>();
    while (currentLayer != null && currentLayer.parentLayer != null) {
      if (currentLayer.layerId === layerId) {
        for (const [k, v] of currentLayer.entries()) {
          if (cacheKeys.has(k)) continue;
          cacheKeys.set(k, v);
        }
      }

      currentLayer = currentLayer.parentLayer;
    }

    // 2. remove the layers from the chain
    this.#topLayer = this.#topLayer.removeLayer(layerId);

    // 3. check each cache key to see if it is different in the new chain
    for (const [k, oldEntry] of cacheKeys) {
      const currentEntry = this.#topLayer.get(k);

      // 4. if different, update the subject
      if (oldEntry !== currentEntry) {
        const newEntry = currentEntry ?? createInitEntry(k);
        // We are going to be pretty lazy here and just re-emit the value.
        // In the future it may benefit us to deep equal check her but I think
        // the subjects are effectively doing this anyway.
        this.subjects.peek(k)?.next(
          {
            ...newEntry,
            isOptimistic:
              currentEntry?.value !== this.#truthLayer.get(k)?.value,
          },
        );
      }
    }
  }

  public batch<X>(
    { optimisticId, changes }: {
      optimisticId?: OptimisticId;
      changes: Changes;
    },
    batchFn: (batchContext: BatchContext) => X,
  ): {
    batchResult: BatchContext;
    retVal: X;
    changes: Changes;
  } {
    invariant(
      optimisticId === undefined || !!optimisticId,
      "optimistic must be undefined or not falsy",
    );

    const batchContext: BatchContext = this.#createBatchContext({
      optimisticId,
      changes,
    });

    const retVal = batchFn(batchContext);

    this.#onRevalidate(changes, optimisticId).catch(e => {
      // we don't want batch() to return a promise,
      // so we settle for logging an error here instead of
      // dropping it on the floor.
      if (this.logger) {
        this.logger.error("Unhandled error in batch", e);
      } else {
        // eslint-disable-next-line no-console
        console.error("Unhandled error in batch", e);
        throw e;
      }
    });

    return {
      batchResult: batchContext,
      retVal: retVal,
      changes: batchContext.changes,
    };
  }

  #createBatchContext(
    { optimisticId, changes }: {
      optimisticId?: OptimisticId;
      changes: Changes;
    },
  ): BatchContext {
    let needsLayer = optimisticId !== undefined;

    const batchContext: BatchContext = {
      changes,
      createLayerIfNeeded: () => {
        if (needsLayer) {
          this.#topLayer = this.#topLayer.addLayer(optimisticId);
          needsLayer = false;
        }
      },
      optimisticWrite: !!optimisticId,
      write: (cacheKey, value, status) => {
        const oldTopValue = this.#topLayer.get(cacheKey);

        if (optimisticId) batchContext.createLayerIfNeeded();

        const writeLayer = optimisticId
          ? this.#topLayer
          : this.#truthLayer;
        const newValue: Entry<typeof cacheKey> = {
          cacheKey,
          value,
          lastUpdated: Date.now(),
          status,
        };

        writeLayer.set(cacheKey, newValue);

        const newTopValue = this.#topLayer.get(cacheKey);

        if (oldTopValue !== newTopValue) {
          this.subjects.get(cacheKey)?.next({
            ...newValue,
            isOptimistic:
              newTopValue?.value !== this.#truthLayer.get(cacheKey)?.value,
          });
        }

        return newValue;
      },
      delete: (cacheKey, status) => {
        return batchContext.write(cacheKey, tombstone, status);
      },
      read: (cacheKey) => {
        return optimisticId
          ? this.#topLayer.get(cacheKey)
          : this.#truthLayer.get(cacheKey);
      },
    };

    return batchContext;
  }
}
