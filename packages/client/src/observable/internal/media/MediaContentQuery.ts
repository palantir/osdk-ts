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

import type {
  Attachment,
  Media,
  MediaMetadata,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";
import {
  BehaviorSubject,
  type Connectable,
  connectable,
  map,
  type Observable,
  type Subject,
} from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { Status } from "../../ObservableClient/common.js";
import type {
  MediaContentObserveOptions,
  MediaContentPayload,
} from "../../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import type { BatchContext } from "../BatchContext.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import type { OptimisticId } from "../OptimisticId.js";
import { Query } from "../Query.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import type {
  MediaContentCacheKey,
  MediaContentStoreMarker,
} from "./MediaContentCacheKey.js";
import type { MediaContentObservable } from "./MediaContentObservable.js";
import { createMediaContentObservable } from "./MediaContentObservable.js";

const INIT_PAYLOAD: MediaContentPayload = {
  metadata: undefined,
  content: undefined,
  url: undefined,
  previewUrl: undefined,
  dimensions: undefined,
  status: "init",
  isStale: false,
  isPreview: false,
  lastUpdated: 0,
  error: undefined,
};

type MediaSource = Media | Attachment | MediaPropertyLocation;

export interface MediaContentQueryDeps {
  fetchContent: (
    source: MediaSource,
    options?: { preview?: boolean },
  ) => Promise<Blob>;
  fetchMetadata: (
    source: MediaSource,
  ) => Promise<MediaMetadata>;
  blobManager: BlobMemoryManager;
  getCacheKey: (source: MediaSource) => string;
}

export class MediaContentQuery extends Query<
  MediaContentCacheKey,
  MediaContentPayload,
  MediaContentObserveOptions
> {
  #objectType: string;
  #primaryKey: PrimaryKeyType<ObjectTypeDefinition>;
  #propertyName: string;
  #observable: MediaContentObservable;
  #currentPayload: MediaContentPayload = INIT_PAYLOAD;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<MediaContentCacheKey>>,
    source: MediaPropertyLocation,
    cacheKey: MediaContentCacheKey,
    opts: MediaContentObserveOptions,
    deps: MediaContentQueryDeps,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? store.client[additionalContext].logger?.child({}, {
          msgPrefix: `MediaContentQuery<${source.objectType}, ${
            JSON.stringify(source.primaryKey)
          }, ${source.propertyName}>`,
        })
        : undefined,
    );

    this.#objectType = source.objectType;
    this.#primaryKey = source.primaryKey;
    this.#propertyName = source.propertyName;

    this.#observable = createMediaContentObservable(
      {
        fetchContent: deps.fetchContent,
        fetchMetadata: deps.fetchMetadata,
        blobManager: deps.blobManager,
        getCacheKey: deps.getCacheKey,
        onStateChange: (payload) => {
          this.#currentPayload = payload;
          this.store.batch({}, (batch) => {
            this.writeToStore(
              { lastUpdated: payload.lastUpdated },
              payload.status,
              batch,
            );
          });
        },
      },
      source,
      opts,
    );

    // Write initial marker to truth layer so invalidateObjectType can find us
    store.batch({}, (batch) => {
      batch.write(cacheKey, { lastUpdated: 0 }, "init");
    });
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<MediaContentCacheKey>>,
  ): Connectable<MediaContentPayload> {
    return connectable<MediaContentPayload>(
      subject.pipe(
        map(() => this.#currentPayload),
      ),
      {
        connector: () => new BehaviorSubject<MediaContentPayload>(INIT_PAYLOAD),
      },
    );
  }

  _fetchAndStore(): Promise<void> {
    // The observable manages its own fetch lifecycle (dual-phase, generation-based).
    // We trigger it via invalidate() and it notifies us via onStateChange.
    this.#observable.invalidate();
    return Promise.resolve();
  }

  writeToStore(
    data: MediaContentStoreMarker | undefined,
    status: Status,
    batch: BatchContext,
  ): Entry<MediaContentCacheKey> {
    const entry = batch.read(this.cacheKey);
    if (
      entry && entry.status === status
      && entry.value?.lastUpdated === data?.lastUpdated
    ) {
      return entry;
    }
    return batch.write(this.cacheKey, data, status);
  }

  maybeUpdateAndRevalidate = (
    changes: Changes,
    _optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    const modifiedObjectsOfType = changes.modifiedObjects.get(this.#objectType);
    const addedObjectsOfType = changes.addedObjects.get(this.#objectType);

    for (const obj of modifiedObjectsOfType ?? []) {
      if (obj.$primaryKey === this.#primaryKey) {
        this.#observable.invalidate();
        return Promise.resolve();
      }
    }

    for (const obj of addedObjectsOfType ?? []) {
      if (obj.$primaryKey === this.#primaryKey) {
        this.#observable.invalidate();
        return Promise.resolve();
      }
    }

    for (const cacheKey of changes.deleted) {
      if (
        cacheKey.type === "object"
        && cacheKey.otherKeys[0] === this.#objectType
        && cacheKey.otherKeys[1] === this.#primaryKey
      ) {
        this.store.batch({}, (batch) => {
          this.writeToStore(undefined, "error", batch);
        });
        return Promise.resolve();
      }
    }

    return undefined;
  };

  invalidateObjectType = (
    objectType: string,
    _changes: Changes | undefined,
  ): Promise<void> => {
    if (objectType === this.#objectType) {
      this.#observable.invalidate();
    }
    return Promise.resolve();
  };

  protected _dispose(): void {
    this.#observable.dispose();
  }
}
