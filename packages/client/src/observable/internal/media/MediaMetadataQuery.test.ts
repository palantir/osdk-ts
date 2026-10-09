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

import { objectTypeWithAllPropertyTypes } from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import type { MockedObject } from "vitest";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import type { Client } from "../../../Client.js";
import { createClient } from "../../../createClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import type { MediaMetadataPayload } from "../../ObservableClient/MediaObservableTypes.js";
import type { MediaPropertyLocation } from "../../ObservableClient/MediaTypes.js";
import { Store } from "../Store.js";

describe("MediaMetadataQuery", () => {
  let client: Client;
  let store: Store;
  let apiServer: SetupServer;
  let baseUrl: string;

  const coords: MediaPropertyLocation = {
    objectType: objectTypeWithAllPropertyTypes.apiName,
    primaryKey: stubData.objectWithAllPropertyTypes1.id,
    propertyName: "mediaReference",
  };

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client, apiServer } = testSetup);
    baseUrl = testSetup.fauxFoundry.baseUrl;
    return () => apiServer.close();
  });

  beforeEach(() => {
    store = new Store(client);
    return () => store.media.dispose();
  });

  it.each(["2147483647", "2147483648", "9007199254740993"])(
    "observes and caches the exact Ontologies metadata size %s",
    async (sizeBytesLong) => {
      await apiServer.boundary(async () => {
        const getMetadata = vi.fn(() => ({
          mediaType: "application/json",
          path: "file1.txt",
          sizeBytes: sizeBytesLong,
        }));
        apiServer.use(
          MockOntologiesV2.MediaReferenceProperties.getMediaMetadata(
            baseUrl,
            getMetadata,
          ),
        );

        const observer: MockedObject<Observer<MediaMetadataPayload>> = {
          next: vi.fn(),
          error: vi.fn(),
          complete: vi.fn(),
        };
        const cachedObserver: MockedObject<Observer<MediaMetadataPayload>> = {
          next: vi.fn(),
          error: vi.fn(),
          complete: vi.fn(),
        };
        const metadata = {
          mediaType: "application/json",
          path: "file1.txt",
          sizeBytes: Number(sizeBytesLong),
          sizeBytesLong,
        };
        const subscription = store.media.observeMediaMetadata(
          coords,
          { dedupeInterval: 0 },
          observer,
        );

        try {
          await vi.waitFor(() => {
            expect(observer.next).toHaveBeenLastCalledWith(
              expect.objectContaining({ status: "loaded", metadata }),
            );
          });
          expect(observer.next).toHaveBeenCalledWith(
            expect.objectContaining({ status: "loading" }),
          );
          expect(store.media.getCachedMetadata(coords)).toEqual(metadata);

          const cachedSubscription = store.media.observeMediaMetadata(
            coords,
            { mode: "offline" },
            cachedObserver,
          );
          try {
            expect(cachedObserver.next).toHaveBeenLastCalledWith(
              expect.objectContaining({ status: "loaded", metadata }),
            );
            expect(getMetadata).toHaveBeenCalledTimes(1);
            expect(observer.error).not.toHaveBeenCalled();
            expect(cachedObserver.error).not.toHaveBeenCalled();
          } finally {
            cachedSubscription.unsubscribe();
          }
        } finally {
          subscription.unsubscribe();
        }
      })();
    },
  );
});
