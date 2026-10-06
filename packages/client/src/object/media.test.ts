/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import {
  $ontologyRid,
  objectTypeWithAllPropertyTypes,
} from "@osdk/client.test.ontology";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  msw,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMediaFromReference } from "../createMediaFromReference.js";

describe("media", () => {
  let client: Client;
  let apiServer: SetupServer;
  let baseUrl: string;

  const reference = stubData.objectWithAllPropertyTypes1.mediaReference;
  const { mediaSetRid, mediaItemRid } = reference.reference.mediaSetViewItem;
  const sizeCases = [
    { sizeBytesLong: "2147483647", sizeBytes: 2147483647 },
    { sizeBytesLong: "2147483648", sizeBytes: 2147483647 },
    { sizeBytesLong: "9007199254740993", sizeBytes: 2147483647 },
  ];

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);

    ({ client, apiServer } = testSetup);
    baseUrl = testSetup.fauxFoundry.baseUrl.replace(/\/$/u, "");

    testSetup.fauxFoundry
      .getDataStore($ontologyRid)
      .registerMedia(
        objectTypeWithAllPropertyTypes.apiName,
        "mediaReference",
        new TextEncoder().encode(JSON.stringify({ content: "Hello World" })),
        "application/json",
        "file1.txt",
        stubData.objectWithAllPropertyTypes1.mediaReference.reference
          .mediaSetViewItem.mediaItemRid,
      );

    return () => {
      testSetup.apiServer.close();
    };
  });

  it("reads media metadata successfully", async () => {
    const result = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id })
      .fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference).toBeDefined();
    const mediaMetadata = await object1.mediaReference?.fetchMetadata();
    expect(mediaMetadata).toEqual({
      path: "file1.txt",
      mediaType: "application/json",
      sizeBytes: 25,
      sizeBytesLong: "25",
    });
  });

  it("reads full media metadata successfully", async () => {
    const result = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id })
      .fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference?.fetchFullMetadata).toBeDefined();
    const fullMetadata = await object1.mediaReference?.fetchFullMetadata?.();
    expect(fullMetadata).toEqual({
      itemMetadata: {
        type: "untyped",
        sizeBytes: 25,
        sizeBytesLong: "25",
      },
    });
  });

  it("reads full media metadata via createMediaFromReference", async () => {
    // Covers the non-ontology Media path (used by query results and the functions runtime).
    // Routes through MediaSets.metadata, same as the ontology-backed path above.
    const media = createMediaFromReference(client, reference);

    const fullMetadata = await media.fetchFullMetadata?.();
    expect(fullMetadata).toEqual({
      itemMetadata: {
        type: "untyped",
        sizeBytes: 25,
        sizeBytesLong: "25",
      },
    });
  });

  it.each(sizeCases)(
    "reads raw-reference basic metadata with sizeBytesLong=$sizeBytesLong",
    async ({ sizeBytesLong }) => {
      await apiServer.boundary(async () => {
        apiServer.use(
          msw.http.get(
            `${baseUrl}/api/v2/mediasets/${mediaSetRid}/items/${mediaItemRid}`,
            () =>
              msw.HttpResponse.json({
                mimeType: "application/json",
                path: "file1.txt",
                sizeBytesLong,
                ...(sizeBytesLong === "2147483647"
                  ? { sizeBytes: 2147483647 }
                  : {}),
              }),
          ),
        );

        const metadata = await createMediaFromReference(
          client,
          reference,
        ).fetchMetadata();

        expect(metadata).toEqual({
          mediaType: "application/json",
          path: "file1.txt",
          sizeBytes: Number(sizeBytesLong),
          sizeBytesLong,
        });
      })();
    },
  );

  it("reads raw-reference basic metadata from older responses", async () => {
    await apiServer.boundary(async () => {
      apiServer.use(
        msw.http.get(
          `${baseUrl}/api/v2/mediasets/${mediaSetRid}/items/${mediaItemRid}`,
          () =>
            msw.HttpResponse.json({
              mimeType: "application/json",
              path: "file1.txt",
              sizeBytes: 25,
            }),
        ),
      );

      expect(
        await createMediaFromReference(client, reference).fetchMetadata(),
      ).toEqual({
        mediaType: "application/json",
        path: "file1.txt",
        sizeBytes: 25,
        sizeBytesLong: "25",
      });
    })();
  });

  it.each(sizeCases)(
    "reads object-property basic metadata with sizeBytesLong=$sizeBytesLong",
    async ({ sizeBytesLong }) => {
      await apiServer.boundary(async () => {
        apiServer.use(
          MockOntologiesV2.MediaReferenceProperties.getMediaMetadata(
            baseUrl,
            () => ({
              mediaType: "application/json",
              path: "file1.txt",
              sizeBytes: sizeBytesLong,
            }),
          ),
        );

        const result = await client(objectTypeWithAllPropertyTypes)
          .where({ id: stubData.objectWithAllPropertyTypes1.id })
          .fetchPage();
        const metadata = await result.data[0].mediaReference?.fetchMetadata();

        expect(metadata).toEqual({
          mediaType: "application/json",
          path: "file1.txt",
          sizeBytes: Number(sizeBytesLong),
          sizeBytesLong,
        });
      })();
    },
  );

  describe.each(["raw reference", "object property"])(
    "full metadata through %s",
    (source) => {
      it.each(sizeCases)(
        "preserves sizeBytesLong=$sizeBytesLong and legacy sizeBytes=$sizeBytes",
        async ({ sizeBytesLong, sizeBytes }) => {
          await apiServer.boundary(async () => {
            apiServer.use(
              msw.http.get(
                `${baseUrl}/api/v2/mediasets/${mediaSetRid}/items/${mediaItemRid}/metadata`,
                () =>
                  msw.HttpResponse.json({
                    type: "untyped",
                    sizeBytes,
                    sizeBytesLong,
                  }),
              ),
            );

            const result =
              source === "object property"
                ? await client(objectTypeWithAllPropertyTypes)
                    .where({ id: stubData.objectWithAllPropertyTypes1.id })
                    .fetchPage()
                : undefined;
            const media =
              source === "object property"
                ? result?.data[0].mediaReference
                : createMediaFromReference(client, reference);

            expect(await media?.fetchFullMetadata?.()).toEqual({
              itemMetadata: { type: "untyped", sizeBytes, sizeBytesLong },
            });
          })();
        },
      );

      it("reads full metadata from older responses", async () => {
        await apiServer.boundary(async () => {
          apiServer.use(
            msw.http.get(
              `${baseUrl}/api/v2/mediasets/${mediaSetRid}/items/${mediaItemRid}/metadata`,
              () => msw.HttpResponse.json({ type: "untyped", sizeBytes: 25 }),
            ),
          );

          const result =
            source === "object property"
              ? await client(objectTypeWithAllPropertyTypes)
                  .where({ id: stubData.objectWithAllPropertyTypes1.id })
                  .fetchPage()
              : undefined;
          const media =
            source === "object property"
              ? result?.data[0].mediaReference
              : createMediaFromReference(client, reference);

          expect(await media?.fetchFullMetadata?.()).toEqual({
            itemMetadata: {
              type: "untyped",
              sizeBytes: 25,
              sizeBytesLong: "25",
            },
          });
        })();
      });
    },
  );

  it("forwards read tokens for raw-reference metadata requests", async () => {
    await apiServer.boundary(async () => {
      const tokens: Array<string | null> = [];
      apiServer.use(
        msw.http.get(
          `${baseUrl}/api/v2/mediasets/${mediaSetRid}/items/${mediaItemRid}`,
          ({ request }) => {
            tokens.push(request.headers.get("ReadToken"));
            return msw.HttpResponse.json({
              mimeType: "application/json",
              sizeBytesLong: "2147483648",
            });
          },
        ),
        msw.http.get(
          `${baseUrl}/api/v2/mediasets/${mediaSetRid}/items/${mediaItemRid}/metadata`,
          ({ request }) => {
            tokens.push(request.headers.get("ReadToken"));
            return msw.HttpResponse.json({
              type: "untyped",
              sizeBytes: 2147483647,
              sizeBytesLong: "2147483648",
            });
          },
        ),
      );

      const media = createMediaFromReference(client, {
        ...reference,
        reference: {
          ...reference.reference,
          mediaSetViewItem: {
            ...reference.reference.mediaSetViewItem,
            token: "test-read-token",
          },
        },
      });

      await media.fetchMetadata();
      await media.fetchFullMetadata?.();

      expect(tokens).toEqual(["test-read-token", "test-read-token"]);
    })();
  });

  it("reads media content successfully", async () => {
    const result = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id })
      .fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference).toBeDefined();
    const mediaContent = await object1?.mediaReference?.fetchContents();
    expect(await mediaContent!.json()).toEqual({
      content: "Hello World",
    });
  });

  it("gets media reference successfully", async () => {
    const result = await client(objectTypeWithAllPropertyTypes)
      .where({ id: stubData.objectWithAllPropertyTypes1.id })
      .fetchPage();

    const object1 = result.data[0];
    expect(object1.mediaReference).toBeDefined();
    const mediaReference = object1.mediaReference?.getMediaReference();
    expect(mediaReference).toEqual({
      mimeType: "application/pdf",
      reference: {
        type: "mediaSetViewItem",
        mediaSetViewItem: {
          mediaSetRid:
            "ri.mio.main.media-set.4153d42f-ca4b-4e42-8ca5-8e6aa7edb642",
          mediaSetViewRid:
            "ri.mio.main.view.82a798ad-d637-4595-acc6-987bcf16629b",
          mediaItemRid:
            "ri.mio.main.media-item.001ec98b-1620-4814-9e17-8e9c4e536225",
        },
      },
    });
  });
});
