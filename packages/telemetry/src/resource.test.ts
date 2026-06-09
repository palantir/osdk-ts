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

import { describe, expect, it } from "vitest";
import {
  buildResource,
  DEFAULT_PRODUCING_RESOURCE_VERSION,
  DEFAULT_PRODUCING_SERVICE,
  PRODUCING_RESOURCE_IDENTIFIER,
  PRODUCING_RESOURCE_VERSION,
  PRODUCING_SERVICE,
  resourceFromAttributes,
  TRACE_OWNING_RESOURCE_IDENTIFIER,
} from "./resource.js";

describe("resourceFromAttributes", () => {
  it("wraps a flat attribute map in the OTLP resource shape", () => {
    const resource = resourceFromAttributes({ a: "1", b: "2" });
    expect(resource).toEqual({ attributes: { a: "1", b: "2" } });
  });
});

describe("buildResource", () => {
  it("populates all four mandatory FTS keys from the application rid", () => {
    const resource = buildResource({ applicationRid: "ri.app" });

    expect(resource.attributes[TRACE_OWNING_RESOURCE_IDENTIFIER]).toBe(
      "ri.app",
    );
    expect(resource.attributes[PRODUCING_RESOURCE_IDENTIFIER]).toBe("ri.app");
    expect(resource.attributes[PRODUCING_RESOURCE_VERSION]).toBe(
      DEFAULT_PRODUCING_RESOURCE_VERSION,
    );
    expect(resource.attributes[PRODUCING_SERVICE]).toBe(
      DEFAULT_PRODUCING_SERVICE,
    );
    expect(Object.keys(resource.attributes)).toHaveLength(4);
  });

  it("honors explicit producing overrides", () => {
    const resource = buildResource({
      applicationRid: "ri.app",
      producingResourceIdentifier: "ri.producer",
      producingResourceVersion: "1.2.3",
      producingService: "my-service",
    });

    expect(resource.attributes[TRACE_OWNING_RESOURCE_IDENTIFIER]).toBe(
      "ri.app",
    );
    expect(resource.attributes[PRODUCING_RESOURCE_IDENTIFIER]).toBe(
      "ri.producer",
    );
    expect(resource.attributes[PRODUCING_RESOURCE_VERSION]).toBe("1.2.3");
    expect(resource.attributes[PRODUCING_SERVICE]).toBe("my-service");
  });

  it("throws when a mandatory key would be empty", () => {
    expect(() => buildResource({ applicationRid: "" })).toThrow(
      TRACE_OWNING_RESOURCE_IDENTIFIER,
    );
  });
});
