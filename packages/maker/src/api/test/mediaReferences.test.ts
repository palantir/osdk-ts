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

import { beforeEach, describe, expect, it } from "vitest";

import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import type { MediaPropertyReference } from "../object/MediaReference.js";
import type { ObjectPropertyTypeUserDefinition } from "../object/ObjectPropertyTypeUserDefinition.js";
import type { ObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";
import type { ResourceLocator } from "../ResourceLocator.js";

const archive = {
  type: "rid",
  rid: "ri.mio.main.media-set.11111111-1111-1111-1111-111111111111",
} as const;
const uploads = {
  type: "rid",
  rid: "ri.mio.main.media-set.22222222-2222-2222-2222-222222222222",
} satisfies ResourceLocator;
const undeclared = {
  type: "rid",
  rid: "ri.mio.main.media-set.33333333-3333-3333-3333-333333333333",
} as const;

const reference = {
  type: "media",
  sources: [archive, uploads],
  uploadDestination: uploads,
} as const satisfies MediaPropertyReference;

function documentDefinition(): ObjectTypeDefinition {
  return {
    apiName: "Document",
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
      file: { type: "mediaReference", reference },
      preview: {
        type: "mediaReference",
        reference: { type: "media", sources: [uploads] },
      },
      legacy: { type: "mediaReference", includeEmptyBackingMediaSet: true },
    },
  };
}

function mediaDatasources() {
  return dumpOntologyFullMetadata().ontology.objectTypes[
    "com.example.Document"
  ].datasources.filter((source) => source.datasource.type === "mediaSetView");
}

describe("media reference bindings", () => {
  beforeEach(async () => {
    await defineOntology("com.example.", () => {}, undefined);
  });

  it("groups shared sources, selects uploads per property, and preserves legacy backing", () => {
    defineObject(documentDefinition());
    expect(mediaDatasources().map((source) => source.datasource)).toEqual([
      {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          clearOnDeleteProperties: [],
          mediaSetViewLocator: "com.example.Document.legacy",
          properties: ["legacy"],
          uploadProperties: ["legacy"],
        },
      },
      {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          clearOnDeleteProperties: [],
          mediaSetViewLocator: archive.rid,
          properties: ["file"],
          uploadProperties: [],
        },
      },
      {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          clearOnDeleteProperties: [],
          mediaSetViewLocator: uploads.rid,
          properties: ["file", "preview"],
          uploadProperties: ["file"],
        },
      },
    ]);
  });

  it.each([
    [{ type: "string", reference }, "scalar mediaReference"],
    [
      { type: "mediaReference", array: true, reference },
      "scalar mediaReference",
    ],
    [
      { type: "mediaReference", includeEmptyBackingMediaSet: true, reference },
      "cannot combine",
    ],
    [
      { type: "mediaReference", reference: { type: "media", sources: [] } },
      "at least one",
    ],
    [
      {
        type: "mediaReference",
        reference: { type: "media", sources: [undeclared] },
      },
      "undeclared media source",
    ],
    [
      {
        type: "mediaReference",
        reference: { type: "media", sources: [archive, { ...archive }] },
      },
      "duplicate media source",
    ],
    [
      {
        type: "mediaReference",
        reference: {
          type: "media",
          sources: [archive],
          uploadDestination: uploads,
        },
      },
      "uploadDestination must be one of its sources",
    ],
    [
      {
        type: "mediaReference",
        reference: {
          type: "media",
          sources: [
            {
              type: "rid",
              rid: "ri.mio.main.view.11111111-1111-1111-1111-111111111111",
            },
          ],
        },
      },
      "media set RID locator",
    ],
  ] satisfies [ObjectPropertyTypeUserDefinition, string][])(
    "rejects invalid property bindings: %j",
    (property, message) => {
      const definition = documentDefinition();
      definition.properties = { id: { type: "string" }, file: property };
      expect(() => defineObject(definition)).toThrow(message);
    },
  );

  it("rejects duplicate declarations by RID rather than object identity", () => {
    const definition = documentDefinition();
    definition.referenceSources = [
      { type: "media", mediaSet: archive },
      { type: "media", mediaSet: { ...archive } },
    ];
    expect(() => defineObject(definition)).toThrow(
      "Duplicate media reference source",
    );
  });

  it("rejects non-media-set resource declarations", () => {
    const definition = documentDefinition();
    definition.referenceSources = [
      {
        type: "media",
        mediaSet: {
          type: "rid",
          rid: "ri.foundry.main.dataset.11111111-1111-1111-1111-111111111111",
        },
      },
    ];
    expect(() => defineObject(definition)).toThrow("media set RID locator");
  });
});
