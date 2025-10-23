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

import { beforeEach, describe, expect, it } from "vitest";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";

describe("Marking Constraints", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });
  it("supports marking constraints with CBAC type and markingInputGroupName", () => {
    const obj = defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        "title": {
          type: "string",
          displayName: "Title",
        },
        "classification": {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Classification",
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const classificationConstraint = ontology.ontology
      .objectTypes["com.palantir.document"].datasources[0].dataSecurity
      ?.classificationConstraint!;
    expect(classificationConstraint.markingGroupName).toEqual(
      "classificationGroup",
    );
  });

  it("supports marking constraints with multiple markings", () => {
    const obj = defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        "title": {
          type: "string",
          displayName: "Title",
        },
        "classification": {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Classification",
        },
        "mandatory": {
          type: {
            type: "marking",
            markingType: "MANDATORY",
            markingInputGroupName: "mandatoryMarkingGroup",
          },
          displayName: "Classification",
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const dataSecurity = ontology.ontology.objectTypes["com.palantir.document"]
      .datasources[0].dataSecurity!;
    expect(dataSecurity.markingConstraint!.markingGroupName).toEqual(
      "mandatoryMarkingGroup",
    );
    expect(dataSecurity.classificationConstraint!.markingGroupName).toEqual(
      "classificationGroup",
    );
  });

  it("does not set security on objects if no marking props", () => {
    const obj = defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        "title": {
          type: "string",
          displayName: "Title",
        },
        "string": {
          type: "string",
          displayName: "string",
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const datasource =
      ontology.ontology.objectTypes["com.palantir.document"].datasources[0];
    expect(datasource).not.toHaveProperty("dataSecurity");
  });

  it("supports marking constraints with CBAC type and markingInputGroupName", () => {
    const obj = defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        "title": {
          type: "string",
          displayName: "Title",
        },
        "classification": {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Classification",
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const classificationConstraint = ontology.ontology
      .objectTypes["com.palantir.document"].datasources[0].dataSecurity
      ?.classificationConstraint!;
    expect(classificationConstraint.markingGroupName).toEqual(
      "classificationGroup",
    );
  });
});
