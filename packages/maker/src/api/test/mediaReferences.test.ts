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

import { MakerValidationError } from "../../validation.js";
import { defineLink } from "../defineLink.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import type { MediaPropertyReference } from "../object/MediaReference.js";
import type { ObjectPropertyTypeUserDefinition } from "../object/ObjectPropertyTypeUserDefinition.js";
import type { ObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";
import type { ResourceLocator } from "../ResourceLocator.js";

const archive = {
  type: "apiName",
  apiName: "archive",
} as const;
const uploads = {
  type: "apiName",
  apiName: "uploads",
} satisfies ResourceLocator;
const undeclared = {
  type: "apiName",
  apiName: "undeclared",
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

describe("media reference bindings", () => {
  beforeEach(async () => {
    await defineOntology("com.example.", () => {}, undefined);
  });

  it.each([false, true])(
    "rejects legacy conversion of explicit sources with property bindings: %s",
    (hasBindings) => {
      const definition = documentDefinition();
      if (!hasBindings) {
        definition.properties = { id: { type: "string" } };
      }
      defineObject(definition);
      expect(dumpOntologyFullMetadata).toThrowError(
        "Object com.example.Document: explicit media bindings are unsupported in legacy maker conversion",
      );
    },
  );

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
              type: "apiName",
              apiName: "invalid-name",
            },
          ],
        },
      },
      "Invalid input API name",
    ],
  ] satisfies [ObjectPropertyTypeUserDefinition, string][])(
    "rejects invalid property bindings: %j",
    (property, message) => {
      const definition = documentDefinition();
      definition.properties = { id: { type: "string" }, file: property };
      expect(() => defineObject(definition)).toThrow(message);
    },
  );

  it.each([false, true])(
    "validates derived media properties with explicit reference: %s",
    (hasReference) => {
      const original = defineObject({
        ...documentDefinition(),
        apiName: "OriginalDocument",
      });
      const link = defineLink({
        apiName: "originalToDocument",
        one: { object: original, metadata: { apiName: "documents" } },
        toMany: {
          object: "com.example.Document",
          metadata: { apiName: "original" },
        },
        manyForeignKeyProperty: "id",
      });
      const definition = documentDefinition();
      definition.properties = {
        id: { type: "string" },
        file: {
          type: "mediaReference",
          ...(hasReference ? { reference } : {}),
        },
      };
      definition.datasources = [
        {
          type: "derived",
          linkDefinition: [{ linkType: link }],
          propertyMapping: { file: "file" },
        },
      ];
      if (hasReference) {
        expect(() => defineObject(definition)).toThrow(
          "cannot combine reference with a derived datasource",
        );
      } else {
        defineObject(definition);
      }
    },
  );

  it.each(["declaration", "source", "uploadDestination"] as const)(
    "rejects invalid API names and RID locators in %s",
    (location) => {
      for (const invalidLocator of [
        { type: "apiName", apiName: "" },
        { type: "apiName", apiName: "invalid-name" },
        { type: "apiName", apiName: "1invalid" },
        { type: "apiName", apiName: "a".repeat(101) },
        { type: "apiName", apiName: "On" },
        { type: "apiName", apiName: "ﬁ" },
        {
          type: "rid",
          rid: "ri.mio.main.media-set.11111111-1111-1111-1111-111111111111",
        } as unknown as ResourceLocator,
      ] satisfies ResourceLocator[]) {
        const definition = documentDefinition();
        definition.referenceSources = [
          {
            type: "media",
            mediaSet: location === "declaration" ? invalidLocator : archive,
          },
        ];
        definition.properties = {
          id: { type: "string" },
          file: {
            type: "mediaReference",
            reference: {
              type: "media",
              sources: [location === "source" ? invalidLocator : archive],
              uploadDestination:
                location === "uploadDestination" ? invalidLocator : archive,
            },
          },
        };
        expect(() => defineObject(definition)).toThrow("API name");
      }
    },
  );

  it.each(["_archive", "object", "𠀋".repeat(100)])(
    "accepts Marketplace input API name %j throughout a media binding",
    (apiName) => {
      const source = { type: "apiName", apiName } as const;
      const definition = documentDefinition();
      definition.referenceSources = [{ type: "media", mediaSet: source }];
      definition.properties = {
        id: { type: "string" },
        file: {
          type: "mediaReference",
          reference: {
            type: "media",
            sources: [source],
            uploadDestination: source,
          },
        },
      };
      expect(() => defineObject(definition)).not.toThrow();
    },
  );

  it("collects media and other object issues without registering the invalid object", () => {
    const definition = documentDefinition();
    definition.titlePropertyApiName = "missingTitle";
    definition.referenceSources = [
      { type: "media", mediaSet: archive },
      { type: "media", mediaSet: archive },
    ];
    definition.properties = {
      id: { type: "string" },
      file: {
        type: "mediaReference",
        reference: {
          type: "media",
          sources: [undeclared, undeclared],
          uploadDestination: uploads,
        },
      },
    };
    expect(() => defineObject(definition)).toThrowError(MakerValidationError);
    expect(() => defineObject(definition)).toThrowError(
      expect.objectContaining({
        issues: [
          expect.objectContaining({
            code: "duplicate_media_source",
            path: ["referenceSources", 1, "mediaSet"],
          }),
          expect.objectContaining({
            code: "invalid_media_reference",
            path: ["properties", "file", "reference", "sources", 0],
            suggestion:
              "Add this media set to the object's referenceSources, or select a declared set.",
          }),
          expect.objectContaining({
            code: "invalid_media_reference",
            path: ["properties", "file", "reference", "sources", 1],
          }),
          expect.objectContaining({
            code: "duplicate_media_source",
            path: ["properties", "file", "reference", "sources", 1],
          }),
          expect.objectContaining({
            code: "invalid_media_reference",
            path: ["properties", "file", "reference", "uploadDestination"],
            suggestion:
              "Select an API name from sources, or omit uploadDestination to disable uploads.",
          }),
          expect.objectContaining({
            message:
              "Title property missingTitle is not defined on object Document",
          }),
        ],
      }),
    );
    expect(() => defineObject(documentDefinition())).not.toThrow();
  });

  it("rejects duplicate declarations by API name rather than object identity", () => {
    const definition = documentDefinition();
    definition.referenceSources = [
      { type: "media", mediaSet: archive },
      { type: "media", mediaSet: { ...archive } },
    ];
    expect(() => defineObject(definition)).toThrow(
      "Duplicate media reference source",
    );
  });
});
