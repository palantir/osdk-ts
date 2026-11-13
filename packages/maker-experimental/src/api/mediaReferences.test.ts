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

import {
  defineObject,
  type ObjectTypeDefinition,
  type ResourceLocator,
} from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { ReadableIdGenerator } from "../util/generateRid.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";

const archive = {
  type: "rid",
  rid: "ri.mio.main.media-set.11111111-1111-1111-1111-111111111111",
} as const;
const uploads = {
  type: "rid",
  rid: "ri.mio.main.media-set.22222222-2222-2222-2222-222222222222",
} satisfies ResourceLocator;

function documentDefinition(apiName = "Document"): ObjectTypeDefinition {
  return {
    apiName,
    displayName: "Document",
    pluralDisplayName: "Documents",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    referenceSources: [
      { type: "media", mediaSet: archive },
      { type: "media", mediaSet: uploads },
    ],
    properties: {
      id: { type: "string" },
      file: {
        type: "mediaReference",
        reference: {
          type: "media",
          sources: [archive, uploads],
          uploadDestination: uploads,
        },
      },
      preview: {
        type: "mediaReference",
        reference: { type: "media", sources: [uploads] },
      },
    },
  };
}

describe("Marketplace media reference bindings", () => {
  it("packages shared sources as required inputs and selects exactly one upload destination", async () => {
    const result = await defineOntologyV2("com.example.", () => {
      defineObject(documentDefinition());
      defineObject(documentDefinition("OtherDocument"));
    });
    expect(result.backingMediaSetNames).toEqual([]);
    const inputs = [...result.shapes.inputShapes.entries()].filter(
      ([, shape]) => shape.type === "filesDatasource",
    );
    expect(inputs.map(([id]) => id)).toEqual([
      ReadableIdGenerator.getForMediaSetView(archive.rid),
      ReadableIdGenerator.getForMediaSetView(uploads.rid),
    ]);
    for (const source of [archive, uploads]) {
      const id = ReadableIdGenerator.getForMediaSetView(source.rid);
      const blockShapeId = result.blockDataAddOn.idToBlockShapeId[id];
      expect(
        result.ontologyIr.ontology.knownIdentifiers.filesDatasources[
          blockShapeId
        ],
      ).toMatchObject({
        type: "mediaSet",
        mediaSet: { rid: source.rid },
      });
      expect(result.shapes.inputShapeMetadata.get(id)).toEqual({
        isOptional: false,
        isAccessedInReconcile: true,
        reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      });
    }

    for (const object of Object.values(
      result.ontologyIr.ontology.objectTypes,
    )) {
      const properties = Object.values(object.objectType.propertyTypes);
      const file = properties.find((property) => property.apiName === "file")!;
      const preview = properties.find(
        (property) => property.apiName === "preview",
      )!;
      const media = object.datasources.flatMap((source) =>
        source.datasource.type === "mediaSetView"
          ? [source.datasource.mediaSetView]
          : [],
      );
      expect(media).toHaveLength(2);
      expect(media[0]).toMatchObject({
        mediaSetViewLocator: { mediaSetRid: archive.rid },
        properties: [file.rid],
        uploadProperties: [],
        assumedMarkings: [],
        clearOnDeleteProperties: [],
      });
      expect(media[1]).toMatchObject({
        mediaSetViewLocator: { mediaSetRid: uploads.rid },
        properties: [file.rid, preview.rid],
        uploadProperties: [file.rid],
      });
    }
  });

  it("keeps datasource and input identities stable when declarations and selections are reordered", async () => {
    const first = await defineOntologyV2("com.example.", () => {
      defineObject(documentDefinition());
    });
    const definition = documentDefinition();
    definition.referenceSources = [
      ...(definition.referenceSources ?? []),
    ].reverse();
    definition.properties = {
      preview: definition.properties!.preview,
      file: {
        ...definition.properties!.file,
        reference: {
          type: "media",
          sources: [uploads, archive],
          uploadDestination: { ...uploads },
        },
      },
      id: { type: "string" },
    };
    const second = await defineOntologyV2("com.example.", () => {
      defineObject(definition);
    });
    const datasources = (result: typeof first) =>
      Object.values(result.ontologyIr.ontology.objectTypes)[0].datasources;
    expect(datasources(second)).toEqual(datasources(first));
    const mediaInputs = (result: typeof first) =>
      [...result.shapes.inputShapes.entries()].filter(
        ([, shape]) => shape.type === "filesDatasource",
      );
    expect(mediaInputs(second)).toEqual(mediaInputs(first));
  });

  it("preserves legacy provisioning alongside explicit bindings", async () => {
    const definition = documentDefinition();
    definition.properties = {
      ...definition.properties,
      legacy: { type: "mediaReference", includeEmptyBackingMediaSet: true },
    };
    const result = await defineOntologyV2("com.example.", () => {
      defineObject(definition);
    });
    expect(result.backingMediaSetNames).toEqual([
      "com.example.Document.legacy",
    ]);
    expect(
      [...result.shapes.inputShapes.values()].filter(
        (shape) => shape.type === "filesDatasource",
      ),
    ).toHaveLength(3);
  });
});
