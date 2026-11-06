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
    await defineOntology("com.palantir.", () => {}, undefined);
  });
  it("supports marking constraints with CBAC type and markingInputGroupName", () => {
    const obj = defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        title: {
          type: "string",
          displayName: "Title",
        },
        classification: {
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
    const classificationConstraint =
      ontology.ontology.objectTypes["com.palantir.document"].datasources[0]
        .dataSecurity?.classificationConstraint!;
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
        title: {
          type: "string",
          displayName: "Title",
        },
        classification: {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Classification",
        },
        mandatory: {
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
    const dataSecurity =
      ontology.ontology.objectTypes["com.palantir.document"].datasources[0]
        .dataSecurity!;
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
        title: {
          type: "string",
          displayName: "Title",
        },
        string: {
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
        title: {
          type: "string",
          displayName: "Title",
        },
        classification: {
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
    const classificationConstraint =
      ontology.ontology.objectTypes["com.palantir.document"].datasources[0]
        .dataSecurity?.classificationConstraint!;
    expect(classificationConstraint.markingGroupName).toEqual(
      "classificationGroup",
    );
  });

  it("uses one marking group when several properties share it", () => {
    defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        title: { type: "string", displayName: "Title" },
        classification: {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Classification",
        },
        referenceClassification: {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Reference Classification",
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const classificationConstraint =
      ontology.ontology.objectTypes["com.palantir.document"].datasources[0]
        .dataSecurity?.classificationConstraint!;
    expect(classificationConstraint.markingGroupName).toEqual(
      "classificationGroup",
    );
  });

  it("joins distinct marking groups once each in property order", () => {
    defineObject({
      titlePropertyApiName: "title",
      displayName: "Document",
      pluralDisplayName: "Documents",
      apiName: "document",
      primaryKeyPropertyApiName: "title",
      properties: {
        title: { type: "string", displayName: "Title" },
        classification: {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Classification",
        },
        referenceClassification: {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "referenceGroup",
          },
          displayName: "Reference Classification",
        },
        otherClassification: {
          type: {
            type: "marking",
            markingType: "CBAC",
            markingInputGroupName: "classificationGroup",
          },
          displayName: "Other Classification",
        },
      },
    });

    const ontology = dumpOntologyFullMetadata();
    const classificationConstraint =
      ontology.ontology.objectTypes["com.palantir.document"].datasources[0]
        .dataSecurity?.classificationConstraint!;
    expect(classificationConstraint.markingGroupName).toEqual(
      "classificationGroup/referenceGroup",
    );
  });

  describe("dataSecurity allowEmptyMarkings", () => {
    function defineDocument(
      dataSecurity: Parameters<typeof defineObject>[0]["dataSecurity"],
    ) {
      defineObject({
        titlePropertyApiName: "title",
        displayName: "Document",
        pluralDisplayName: "Documents",
        apiName: "document",
        primaryKeyPropertyApiName: "title",
        properties: {
          title: { type: "string", displayName: "Title" },
          classification: {
            type: {
              type: "marking",
              markingType: "CBAC",
              markingInputGroupName: "classificationGroup",
            },
            displayName: "Classification",
          },
          mandatory: {
            type: {
              type: "marking",
              markingType: "MANDATORY",
              markingInputGroupName: "mandatoryMarkingGroup",
            },
            displayName: "Mandatory",
          },
        },
        dataSecurity,
      });
    }

    function getDataSecurity() {
      return dumpOntologyFullMetadata().ontology.objectTypes[
        "com.palantir.document"
      ].datasources[0].dataSecurity;
    }

    it("emits allowEmptyMarkings on the mandatory constraint", () => {
      defineDocument({ mandatory: { allowEmptyMarkings: true } });
      expect(getDataSecurity()).toEqual({
        classificationConstraint: { markingGroupName: "classificationGroup" },
        markingConstraint: {
          markingGroupName: "mandatoryMarkingGroup",
          allowEmptyMarkings: true,
        },
      });
    });

    it("emits allowEmptyMarkings on the classification constraint", () => {
      defineDocument({ cbac: { allowEmptyMarkings: true } });
      expect(getDataSecurity()).toEqual({
        classificationConstraint: {
          markingGroupName: "classificationGroup",
          allowEmptyMarkings: true,
        },
        markingConstraint: { markingGroupName: "mandatoryMarkingGroup" },
      });
    });

    it("emits allowEmptyMarkings on both constraints independently", () => {
      defineDocument({
        mandatory: { allowEmptyMarkings: true },
        cbac: { allowEmptyMarkings: false },
      });
      expect(getDataSecurity()).toEqual({
        classificationConstraint: {
          markingGroupName: "classificationGroup",
          allowEmptyMarkings: false,
        },
        markingConstraint: {
          markingGroupName: "mandatoryMarkingGroup",
          allowEmptyMarkings: true,
        },
      });
    });

    it("emits an explicit false", () => {
      defineDocument({
        mandatory: { allowEmptyMarkings: false },
        cbac: { allowEmptyMarkings: false },
      });
      const dataSecurity = getDataSecurity();
      expect(dataSecurity?.markingConstraint).toHaveProperty(
        "allowEmptyMarkings",
        false,
      );
      expect(dataSecurity?.classificationConstraint).toHaveProperty(
        "allowEmptyMarkings",
        false,
      );
    });

    it.each([
      ["no dataSecurity", undefined],
      ["empty dataSecurity", {}],
      ["empty constraint settings", { mandatory: {}, cbac: {} }],
    ])("omits allowEmptyMarkings with %s", (_, dataSecurity) => {
      defineDocument(dataSecurity);
      const result = getDataSecurity();
      expect(result).toEqual({
        classificationConstraint: { markingGroupName: "classificationGroup" },
        markingConstraint: { markingGroupName: "mandatoryMarkingGroup" },
      });
      expect(result?.markingConstraint).not.toHaveProperty(
        "allowEmptyMarkings",
      );
      expect(result?.classificationConstraint).not.toHaveProperty(
        "allowEmptyMarkings",
      );
    });
  });
});
