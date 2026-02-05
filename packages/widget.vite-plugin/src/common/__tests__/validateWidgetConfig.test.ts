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

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api";
import { describe, expect, test } from "vitest";
import { validateWidgetConfig } from "../validateWidgetConfig.js";

describe("validateWidgetConfig", () => {
  test("accepts valid widget configuration", () => {
    const validConfig = getValidConfig();
    expect(() => validateWidgetConfig(validConfig)).not.toThrow();
  });

  test("throws for widget id that exceeds max length", () => {
    const invalidConfig = getValidConfig();
    invalidConfig.id = "a".repeat(101);

    expect(() => validateWidgetConfig(invalidConfig)).toThrow(
      "Widget id length can be at most 100 characters",
    );
  });

  test("throws for widget id that is not camelCase", () => {
    const testCases = [
      { id: "TestWidget", message: "does not match allowed pattern" },
      { id: "test-widget", message: "does not match allowed pattern" },
      { id: "test_widget", message: "does not match allowed pattern" },
      { id: "1testWidget", message: "does not match allowed pattern" },
    ];

    for (const { id, message } of testCases) {
      const invalidConfig = getValidConfig();
      invalidConfig.id = id;
      expect(() => validateWidgetConfig(invalidConfig)).toThrow(message);
    }
  });

  test("throws for widget name that exceeds max length", () => {
    const invalidConfig = getValidConfig();
    invalidConfig.name = "A".repeat(101);

    expect(() => validateWidgetConfig(invalidConfig)).toThrow(
      "Widget name length can be at most 100 characters",
    );
  });

  test("throws for widget description that exceeds max length", () => {
    const invalidConfig = getValidConfig();
    invalidConfig.description = "A".repeat(251);

    expect(() => validateWidgetConfig(invalidConfig)).toThrow(
      "Widget description length can be at most 250 characters",
    );
  });

  test("accepts undefined widget description", () => {
    const validConfig = getValidConfig();
    delete validConfig.description;

    expect(() => validateWidgetConfig(validConfig)).not.toThrow();
  });

  test("throws for parameter id that is not camelCase", () => {
    const invalidConfig = getValidConfig();
    invalidConfig.parameters = {
      "Invalid-Param": {
        displayName: "Invalid Parameter",
        type: "string",
      },
    };

    expect(() => validateWidgetConfig(invalidConfig)).toThrow(
      "Parameter id \"Invalid-Param\" does not match allowed pattern (must be camelCase)",
    );
  });

  test("throws for parameter id that exceeds max length", () => {
    const invalidConfig = getValidConfig();
    const longParamId = "param" + "a".repeat(96); // 101 chars total
    invalidConfig.parameters = {
      [longParamId]: {
        displayName: "Long Parameter",
        type: "string",
      },
    };

    expect(() => validateWidgetConfig(invalidConfig)).toThrow(
      "Parameter id length can be at most 100 characters",
    );
  });

  test("accepts valid object set parameter", () => {
    const validConfig = getValidConfig();
    validConfig.parameters.myObjectSet = {
      type: "objectSet",
      displayName: "My Object Set",
      allowedType: {
        type: "object",
        apiName: "employee",
        internalDoNotUseMetadata: {
          rid: "ri.object-type.employee",
        },
      },
    };
    expect(() => validateWidgetConfig(validConfig)).not.toThrow();
  });

  test("throws for invalid object set parameter", () => {
    const invalidConfig = getValidConfig();
    invalidConfig.parameters.myObjectSet = {
      type: "objectSet",
      displayName: "My Object Set",
      allowedType: {
        type: "object",
        apiName: "employee",
      },
    };
    expect(() => validateWidgetConfig(invalidConfig)).toThrow(
      "ObjectSet parameter \"myObjectSet\" must have a valid rid in its metadata, make sure your OSDK was generated with a generator version >=2.6.2",
    );
  });
});

function getValidConfig(): WidgetConfig<ParameterConfig> {
  return {
    id: "testWidget",
    name: "Test Widget",
    description: "A test widget",
    type: "workshop",
    parameters: {
      paramOne: {
        displayName: "Parameter One",
        type: "string",
      },
    },
    events: {
      updateParameters: {
        displayName: "Update Parameters",
        parameterUpdateIds: ["paramOne"],
      },
    },
  };
}
