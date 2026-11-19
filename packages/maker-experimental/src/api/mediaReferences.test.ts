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
  type: "apiName",
  apiName: "archive",
} as const;
const uploads = {
  type: "apiName",
  apiName: "uploads",
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
  it("assumes backing-media markings and resolves them through declassification inputs", async () => {
    const result = await defineOntologyV2("com.example.", () => {
      defineObject({
        apiName: "Document",
        displayName: "Document",
        pluralDisplayName: "Documents",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        properties: {
          id: { type: "string" },
          classification: {
            type: {
              type: "marking",
              markingType: "CBAC",
              markingInputGroupName: "maxClassification",
            },
            array: true,
          },
          file: {
            type: "mediaReference",
            includeEmptyBackingMediaSet: true,
            backingMediaSetMarkings: {
              maxClassification: "CBAC",
              mandatoryMarkings: "MANDATORY",
            },
          },
          preview: {
            type: "mediaReference",
            includeEmptyBackingMediaSet: true,
          },
        },
      });
    });
    const object = Object.values(result.ontologyIr.ontology.objectTypes)[0];
    const properties = Object.values(object.objectType.propertyTypes);
    const file = properties.find((property) => property.apiName === "file")!;
    const preview = properties.find(
      (property) => property.apiName === "preview",
    )!;
    const media = object.datasources.flatMap(({ datasource }) =>
      datasource.type === "mediaSetView" ? [datasource.mediaSetView] : [],
    );
    expect(
      media.find((source) => source.properties.includes(file.rid))
        ?.assumedMarkings,
    ).toEqual([
      ReadableIdGenerator.getForMarkingSet({
        maxClassification: "CBAC",
        mandatoryMarkings: "MANDATORY",
      }),
    ]);
    expect(
      media.find((source) => source.properties.includes(preview.rid))
        ?.assumedMarkings,
    ).toEqual([]);
    expect(result.backingMediaSetMarkings["com.example.Document.file"]).toEqual(
      { maxClassification: "CBAC", mandatoryMarkings: "MANDATORY" },
    );
    const id = ReadableIdGenerator.getForMarkingSet({
      mandatoryMarkings: "MANDATORY",
      maxClassification: "CBAC",
    });
    const input = result.shapes.inputShapes.get(id);
    expect(input).toMatchObject({
      type: "markings",
      markings: {
        operation: "DECLASSIFY",
        supportedMarkingsType: "MANDATORY",
        supportedMarkingsTypesV2: [
          "CBAC",
          "MANDATORY_NOT_ORGANIZATION",
          "ORGANIZATION",
        ],
      },
    });
    // OMS looks up the entire assumed set, rather than resolving its entries separately.
    const assumed = media.find((source) =>
      source.properties.includes(file.rid),
    )!.assumedMarkings;
    const matchingInputs = Object.entries(
      result.ontologyIr.ontology.knownIdentifiers.markings,
    ).filter(
      ([, groups]) =>
        JSON.stringify([...groups].sort()) ===
        JSON.stringify([...assumed].sort()),
    );
    expect(matchingInputs).toEqual([
      [result.blockDataAddOn.idToBlockShapeId[id], [id]],
    ]);
    const classification = result.shapes.inputShapes.get(
      ReadableIdGenerator.getForMarking("maxClassification", "CBAC"),
    );
    expect(
      classification?.type === "markings" &&
        classification.markings.affectedShapes,
    ).toHaveLength(1);
    expect(classification).toMatchObject({ markings: { operation: "USE" } });
  });

  it.each(["CBAC", "MANDATORY"] as const)(
    "reuses a single %s marking input for media assumptions",
    async (type) => {
      const result = await defineOntologyV2("com.example.", () => {
        const definition = documentDefinition();
        definition.referenceSources = undefined;
        const properties = definition.properties!;
        properties.file = {
          type: "mediaReference",
          includeEmptyBackingMediaSet: true,
          backingMediaSetMarkings: { media: type },
        };
        delete properties.preview;
        defineObject(definition);
      });
      const id = ReadableIdGenerator.getForMarking("media", type);
      expect(result.shapes.inputShapes.get(id)).toMatchObject({
        markings: { operation: "DECLASSIFY", supportedMarkingsType: type },
      });
      expect(
        result.ontologyIr.ontology.knownIdentifiers.markings[
          result.blockDataAddOn.idToBlockShapeId[id]
        ],
      ).toEqual(["media"]);
    },
  );

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
      "media-set-view-archive",
      "media-set-view-uploads",
    ]);
    const mediaSetRids = new Map<string, string>();
    for (const source of [archive, uploads]) {
      const id = ReadableIdGenerator.getForMediaSetView(source.apiName);
      const blockShapeId = result.blockDataAddOn.idToBlockShapeId[id];
      const locator =
        result.ontologyIr.ontology.knownIdentifiers.filesDatasources[
          blockShapeId
        ];
      expect(locator).toMatchObject({
        type: "mediaSet",
        mediaSet: {
          rid: expect.stringMatching(
            /^ri\.ontology-metadata\.temp\.media-set\./u,
          ),
          branch: "master",
        },
      });
      if (locator.type === "mediaSet") {
        mediaSetRids.set(source.apiName, locator.mediaSet.rid);
      }
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
        mediaSetViewLocator: { mediaSetRid: mediaSetRids.get(archive.apiName) },
        properties: [file.rid],
        uploadProperties: [],
        assumedMarkings: [],
        clearOnDeleteProperties: [],
      });
      expect(media[1]).toMatchObject({
        mediaSetViewLocator: { mediaSetRid: mediaSetRids.get(uploads.apiName) },
        properties: [file.rid, preview.rid],
        uploadProperties: [file.rid],
      });
    }
  });

  it("keeps media bindings and input identities stable when declarations and selections are reordered", async () => {
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
    const mediaBindings = (result: typeof first) =>
      new Map(
        Object.values(
          result.ontologyIr.ontology.objectTypes,
        )[0].datasources.flatMap(({ rid, datasource }) =>
          datasource.type === "mediaSetView"
            ? [
                [
                  rid,
                  {
                    ...datasource.mediaSetView,
                    properties: new Set(datasource.mediaSetView.properties),
                    uploadProperties: new Set(
                      datasource.mediaSetView.uploadProperties,
                    ),
                  },
                ] as const,
              ]
            : [],
        ),
      );
    expect(mediaBindings(second)).toEqual(mediaBindings(first));
    const mediaInputs = (result: typeof first) =>
      new Map(
        [...result.shapes.inputShapes.entries()].filter(
          ([, shape]) => shape.type === "filesDatasource",
        ),
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
