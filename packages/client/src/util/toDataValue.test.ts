/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { Media, MediaUpload } from "@osdk/api";
import { Employee, Task } from "@osdk/client.test.ontology";
import type { MediaReference } from "@osdk/foundry.core";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeAll, describe, expect, it, vi } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createAttachmentUpload } from "../object/AttachmentUpload.js";
import { isMediaReference } from "../object/mediaUpload.js";
import { getWireObjectSet } from "../objectSet/createObjectSet.js";
import { withScenario } from "../scenarios/withScenario.js";
import { toDataValue } from "./toDataValue.js";

describe(toDataValue, () => {
  let client: Client;
  let clientCtx: MinimalClient;
  let apiServer: SetupServer;

  const mockFetch: MockedFunction<typeof globalThis.fetch> = vi.fn();

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);

    apiServer = testSetup.apiServer;

    clientCtx = createMinimalClient(
      { ontologyRid: testSetup.fauxFoundry.defaultOntologyRid },
      testSetup.fauxFoundry.baseUrl,
      testSetup.auth,
      {},
    );

    return () => {
      testSetup.apiServer.close();
    };
  });

  it("converts passthrough values correctly", async () => {
    // basic pass through types
    const basic = {
      null: undefined,
      boolean: false,
      date: "2024-01-01",
      integer: 0,
      string: "string",
      timestamp: "2024-01-01T00:00:00Z",
    };
    const convertedBasic = await toDataValue(basic, clientCtx, {
      type: "struct",
      struct: {
        null: { type: "string", nullable: true },
        boolean: "boolean",
        date: "datetime",
        integer: "integer",
        string: "string",
        timestamp: "timestamp",
      },
    });
    expect(convertedBasic).toEqual(basic);
  });

  it("recursively converts arrays and sets into array types", async () => {
    const attachment = "rid";
    const attachmentArray = [attachment];
    const attachmentSet = new Set(attachmentArray);

    const recursiveConversion = await toDataValue(
      {
        attachment,
        attachmentArray,
        attachmentSet,
      },
      clientCtx,
      {
        type: "struct",
        struct: {
          attachment: "attachment",
          attachmentArray: "attachment",
          attachmentSet: "attachment",
        },
      },
    );

    expect(recursiveConversion).toEqual({
      attachment: "rid",
      attachmentArray: ["rid"],
      attachmentSet: ["rid"],
    });
  });

  it("recursively handles structs", async () => {
    const struct = {
      inner: {
        attachment: "rid",
        amount: 123.45,
        preciseAmount: "12345678901234567890.123456789012345678",
        count: 5,
      },
    };

    const recursiveConversion = await toDataValue(struct, clientCtx, {
      type: "struct",
      struct: {
        inner: {
          type: "struct",
          struct: {
            attachment: "attachment",
            amount: { type: "decimal", nullable: false },
            preciseAmount: "decimal",
            count: "integer",
          },
        },
      },
    });

    expect(recursiveConversion).toEqual({
      inner: {
        attachment: "rid",
        amount: "123.45",
        preciseAmount: "12345678901234567890.123456789012345678",
        count: 5,
      },
    });
  });

  it("recursively converts GeoJSON geometries and foreign members", async () => {
    const point: GeoJSON.Point & { labels: Set<string> } = {
      type: "Point",
      coordinates: [-74.0, 40.7],
      labels: new Set(["office", "headquarters"]),
    };
    const polygon: GeoJSON.Polygon = {
      type: "Polygon",
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ],
    };

    expect(await toDataValue(point, clientCtx, "geohash")).toEqual({
      type: "Point",
      coordinates: [-74.0, 40.7],
      labels: ["office", "headquarters"],
    });
    expect(await toDataValue(polygon, clientCtx, "geoshape")).toEqual(polygon);
  });

  it("maps an ontology object into just its primary key", async () => {
    const employee = stubData.employee1;
    const ontologyConversion = await toDataValue(employee, clientCtx, {
      type: "object",
      object: "Employee",
    });
    expect(ontologyConversion).toEqual(stubData.employee1.__primaryKey);
  });

  it("maps an ontology object into just its primary key with osdk wrapper", async () => {
    const task = await client(Employee).fetchOne(50030);
    const ontologyConversion = await toDataValue(task, clientCtx, {
      type: "object",
      object: "Employee",
    });
    expect(ontologyConversion).toEqual(task.$primaryKey);
  });

  it("passes through object set definitions", async () => {
    const clientObjectSet = client(Task).where({ id: 0 });
    const definition = getWireObjectSet(clientObjectSet);

    const expected = `
    {
      "objectSet": {
        "objectType": "Task",
        "type": "base",
      },
      "type": "filter",
      "where": {
        "field": "id",
        "type": "eq",
        "value": 0,
      },
    }
  `;
    const objectSetConversion = await toDataValue(clientObjectSet, clientCtx, {
      type: "objectSet",
      objectSet: "Task",
    });
    expect(objectSetConversion).toMatchInlineSnapshot(expected);

    const definitionConversion = await toDataValue(definition, clientCtx, {
      type: "objectSet",
      objectSet: "Task",
    });
    expect(definitionConversion).toMatchInlineSnapshot(expected);
  });

  it("converts blob attachment uploads correctly", async () => {
    const blob = new Blob([JSON.stringify({ hi: "mom" })]);
    const attachmentUpload = createAttachmentUpload(blob, "file1.txt");
    const converted = await toDataValue(
      attachmentUpload,
      clientCtx,
      "attachment",
    );

    expect(converted).toMatch(/ri\.attachments.main.attachment\.[a-z0-9\-]+/iu);
  });

  it("converts file attachment uploads correctly", async () => {
    // Mimics the Web file API (https://developer.mozilla.org/en-US/docs/Web/API/File). The File constructor is only available in Node 19.2.0 and above
    const file = Object.assign(
      new Blob([JSON.stringify({ name: "Hello World" }, null, 2)], {
        type: "application/json",
      }),
      { name: "file1.txt" },
    );

    const converted = await toDataValue(file, clientCtx, "attachment");
    expect(converted).toMatch(/ri\.attachments.main.attachment\.[a-z0-9\-]+/iu);
  });

  it("converts media uploads correctly", () => {
    const file: MediaUpload = {
      data: new Blob([JSON.stringify({ name: "Hello World" }, null, 2)], {
        type: "application/json",
      }),
      fileName: "file.txt",
    };

    // TODO: Mock MediaUpload properly in FauxFoundry
    apiServer.boundary(async () => {
      apiServer.use(
        MockOntologiesV2.MediaReferenceProperties.uploadMedia(
          "https://stack.palantir.com",
          () => {
            return {
              mimeType: "application/json",
              reference: {
                type: "mediaSetViewItem",
                mediaSetViewItem: {
                  mediaItemRid: "media-item-rid",
                  mediaSetRid: "media-set-rid",
                  mediaSetViewRid: "media-set-view-rid",
                },
              },
            };
          },
        ),
      );
      const converted = await toDataValue(file, clientCtx, "mediaReference");
      expect(isMediaReference(converted)).toBe(true);
    });
  });

  it("converts media reference correctly", async () => {
    const mediaReference: MediaReference = {
      mimeType: "application/json",
      reference: {
        type: "mediaSetViewItem",
        mediaSetViewItem: {
          mediaItemRid: "media-item-rid",
          mediaSetRid: "media-set-rid",
          mediaSetViewRid: "media-set-view-rid",
        },
      },
    };

    const converted = await toDataValue(
      mediaReference,
      clientCtx,
      "mediaReference",
    );
    expect(converted).toEqual(mediaReference);
  });

  it("passes through nulls correctly", async () => {
    const converted = await toDataValue(null, clientCtx, "decimal");
    expect(converted).toBeNull();
  });

  it("converts Media type directly to MediaReference", async () => {
    const expectedMediaReference: MediaReference = {
      mimeType: "image/png",
      reference: {
        type: "mediaSetViewItem",
        mediaSetViewItem: {
          mediaItemRid: "test-media-item-rid",
          mediaSetRid: "test-media-set-rid",
          mediaSetViewRid: "test-media-set-view-rid",
        },
      },
    };

    const mockMedia: Media = {
      fetchMetadata: () => ({
        sizeBytes: 1024,
        mediaType: "image/png",
      }),
      fetchContents: () => new Response(),
      getMediaReference: () => expectedMediaReference,
    };

    const converted = await toDataValue(mockMedia, clientCtx, "mediaReference");

    expect(converted).toEqual(expectedMediaReference);
    expect(isMediaReference(converted)).toBe(true);
  });

  it("converts a ScenarioClient into the rid string", async () => {
    const scenario = withScenario(client, "ri.actions..scenario.abc");

    const converted = await toDataValue(
      scenario,
      clientCtx,
      "scenarioReference",
    );
    expect(converted).toBe("ri.actions..scenario.abc");
  });

  it("converts a time series reference by series id to a bare series id string", async () => {
    const converted = await toDataValue(
      { $seriesId: "sensor-123" },
      clientCtx,
      mockActionMetadata,
    );
    expect(converted).toEqual("sensor-123");
  });

  it("converts a time series reference qualified by a sync rid", async () => {
    const converted = await toDataValue(
      { $seriesId: "sensor-123", $syncRid: "ri.time-series.main.sync.abc" },
      clientCtx,
      mockActionMetadata,
    );
    expect(converted).toEqual({
      seriesId: "sensor-123",
      syncRid: "ri.time-series.main.sync.abc",
    });
  });

  it("converts a time series reference by template rid", async () => {
    const converted = await toDataValue(
      {
        $templateRid: "ri.time-series.main.template.abc",
        $templateVersion: "1",
      },
      clientCtx,
      mockActionMetadata,
    );
    expect(converted).toEqual({
      templateRid: "ri.time-series.main.template.abc",
      templateVersion: "1",
    });
  });
});
