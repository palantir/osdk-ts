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
import { defineObject } from "./defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "./defineOntology.js";
import type { ObjectTypeStatus } from "./types.js";

describe("Object Status", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("Object Status Validation", () => {
    it("throws an error when object status is experimental and a property is active", async () => {
      await defineOntology("com.palantir.", () => {
        expect(() =>
          defineObject({
            titlePropertyApiName: "bar",
            displayName: "ValidationTestObject",
            pluralDisplayName: "ValidationTestObjects",
            apiName: "validation-test",
            primaryKeyPropertyApiName: "bar",
            status: "experimental" as ObjectTypeStatus,
            properties: {
              "bar": { type: "string", status: "active" as ObjectTypeStatus },
            },
          })
        ).toThrowError(
          /When object "validation-test" has experimental status, no properties can have "active" status/,
        );
      }, "/tmp/");
    });

    it("does not throw when object status is experimental and no properties have active status", async () => {
      await defineOntology("com.palantir.", () => {
        expect(() =>
          defineObject({
            titlePropertyApiName: "bar",
            displayName: "ValidationTestObject2",
            pluralDisplayName: "ValidationTestObjects2",
            apiName: "validation-test-2",
            primaryKeyPropertyApiName: "bar",
            status: "experimental" as ObjectTypeStatus,
            properties: {
              "bar": {
                type: "string",
                status: "experimental" as ObjectTypeStatus,
              },
            },
          })
        ).not.toThrow();
      }, "/tmp/");
    });
  });

  describe("Object Status Conversion", () => {
    it("converts default status (undefined) to active", async () => {
      await defineOntology("com.palantir.", () => {
        const obj = defineObject({
          titlePropertyApiName: "bar",
          displayName: "DefaultStatusObject",
          pluralDisplayName: "DefaultStatusObjects",
          apiName: "default-status",
          primaryKeyPropertyApiName: "bar",
          properties: { "bar": { type: "string" } },
        });

        const metadata = dumpOntologyFullMetadata();
        expect(
          metadata.ontology.objectTypes["com.palantir.default-status"]
            .objectType.status,
        ).toEqual({
          type: "active",
          active: {},
        });
      }, "/tmp/");
    });

    it("converts active status to proper format", async () => {
      await defineOntology("com.palantir.", () => {
        const obj = defineObject({
          titlePropertyApiName: "bar",
          displayName: "ActiveStatusObject",
          pluralDisplayName: "ActiveStatusObjects",
          apiName: "active-status",
          primaryKeyPropertyApiName: "bar",
          properties: { "bar": { type: "string" } },
          status: "active" as ObjectTypeStatus,
        });

        const metadata = dumpOntologyFullMetadata();
        expect(
          metadata.ontology.objectTypes["com.palantir.active-status"]
            .objectType.status,
        ).toEqual({
          type: "active",
          active: {},
        });
      }, "/tmp/");
    });

    it("converts experimental status to proper format", async () => {
      await defineOntology("com.palantir.", () => {
        const obj = defineObject({
          titlePropertyApiName: "bar",
          displayName: "ExperimentalStatusObject",
          pluralDisplayName: "ExperimentalStatusObjects",
          apiName: "experimental-status",
          primaryKeyPropertyApiName: "bar",
          properties: { "bar": { type: "string" } },
          status: "experimental" as ObjectTypeStatus,
        });

        const metadata = dumpOntologyFullMetadata();
        expect(
          metadata.ontology.objectTypes["com.palantir.experimental-status"]
            .objectType.status,
        ).toEqual({
          type: "experimental",
          experimental: {},
        });
      }, "/tmp/");
    });

    it("converts deprecated status to proper format", async () => {
      await defineOntology("com.palantir.", () => {
        const obj = defineObject({
          titlePropertyApiName: "bar",
          displayName: "DeprecatedStatusObject",
          pluralDisplayName: "DeprecatedStatusObjects",
          apiName: "deprecated-status",
          primaryKeyPropertyApiName: "bar",
          properties: { "bar": { type: "string" } },
          status: {
            type: "deprecated",
            message: "This object is deprecated",
            deadline: "2023-01-01",
          } as ObjectTypeStatus,
        });

        const metadata = dumpOntologyFullMetadata();
        expect(
          metadata.ontology.objectTypes["com.palantir.deprecated-status"]
            .objectType.status,
        ).toEqual({
          type: "deprecated",
          deprecated: {
            message: "This object is deprecated",
            deadline: "2023-01-01",
            replacedBy: undefined,
          },
        });
      }, "/tmp/");
    });
  });
});
