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

import type { ValueTypeBlockData } from "@osdk/client.unstable";
import type { InputShape } from "@osdk/client.unstable/api";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ReadableIdGenerator } from "../util/generateRid.js";
import {
  generateValueTypeBlockResults,
  getValueTypeInternalMappings,
} from "./generateValueTypeBlockResults.js";

function makeEntry(
  apiName: string,
  versions: string[],
): ValueTypeBlockData {
  return {
    metadata: {
      apiName,
      displayMetadata: {
        displayName: `Display ${apiName}`,
        description: `Description for ${apiName}`,
      },
      status: { type: "active", active: {} },
      baseType: { type: "integer", integer: {} },
    },
    versions: versions.map(v => ({
      version: v,
      baseType: { type: "string", string: {} },
      constraints: [],
      exampleValues: [],
    })),
  };
}

describe("generateValueTypeBlockResults", () => {
  let buildDir: string;

  beforeEach(() => {
    buildDir = fs.mkdtempSync(path.join(os.tmpdir(), "vt-test-"));
  });

  afterEach(() => {
    fs.rmSync(buildDir, { recursive: true, force: true });
  });

  it("returns empty array for empty value types", async () => {
    const results = await generateValueTypeBlockResults(
      [],
      buildDir,
    );
    expect(results).toEqual([]);
  });

  it("generates one BlockGeneratorResult per value type", async () => {
    const data = [
      makeEntry("enumerated", ["0.0.1"]),
      makeEntry("currency", ["1.0.0"]),
    ];

    const results = await generateValueTypeBlockResults(data, buildDir);

    expect(results).toHaveLength(2);
    expect(results[0].block_identifier).toBe("value-type-enumerated");
    expect(results[1].block_identifier).toBe("value-type-currency");
    expect(results[0].block_type).toBe("VALUE_TYPE");
    expect(results[1].block_type).toBe("VALUE_TYPE");
  });

  it("generates output shapes for each version", async () => {
    const data = [makeEntry("enumerated", ["0.0.1", "0.0.2"])];

    const results = await generateValueTypeBlockResults(data, buildDir);

    const outputs = results[0].outputs;
    const outputKeys = Object.keys(outputs);
    expect(outputKeys).toHaveLength(2);
    expect(outputKeys).toContain(
      ReadableIdGenerator.getForProducedValueType("enumerated", "0.0.1"),
    );
    expect(outputKeys).toContain(
      ReadableIdGenerator.getForProducedValueType("enumerated", "0.0.2"),
    );

    const shape = Object.values(outputs)[0];
    expect(shape.type).toBe("valueType");
  });

  it("has empty inputs, mappings, and recommendations", async () => {
    const data = [makeEntry("enumerated", ["0.0.1"])];

    const results = await generateValueTypeBlockResults(data, buildDir);

    expect(results[0].inputs).toEqual({});
    expect(results[0].input_mapping_entries).toEqual([]);
    expect(results[0].external_recommendations).toEqual([]);
    expect(results[0].input_shape_metadata).toEqual({});
  });

  it("writes value-types.json with latest version baseType in metadata", async () => {
    const entry = makeEntry("enumerated", ["0.0.1", "0.0.2"]);
    entry.versions[1].baseType = { type: "integer", integer: {} };

    const results = await generateValueTypeBlockResults(
      [entry],
      buildDir,
    );

    const blockDataPath = path.join(
      results[0].block_data_directory,
      "value-types.json",
    );
    const written = JSON.parse(fs.readFileSync(blockDataPath, "utf-8"));
    expect(written.metadata.baseType).toEqual({
      type: "integer",
      integer: {},
    });
    expect(written.versions).toHaveLength(2);
  });
});

describe("getValueTypeInternalMappings", () => {
  it("returns empty for no produced value types", () => {
    const mappings = getValueTypeInternalMappings(
      [],
      new Map(),
    );
    expect(mappings).toEqual([]);
  });

  it("returns empty when produced value type is not consumed", () => {
    const mappings = getValueTypeInternalMappings(
      [makeEntry("enumerated", ["0.0.1"])],
      new Map(),
    );
    expect(mappings).toEqual([]);
  });

  it("creates mapping when produced value type is also consumed", () => {
    const inputShapes = new Map<string, InputShape>();
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      "enumerated",
      "0.0.1",
    );
    inputShapes.set(consumedId, {
      type: "valueType",
      valueType: {
        about: {
          fallbackTitle: "",
          fallbackDescription: "",
          localizedTitle: {},
          localizedDescription: {},
        },
        baseType: {
          type: "primitive",
          primitive: { type: "string", string: {} as any },
        },
      },
    });

    const mappings = getValueTypeInternalMappings(
      [makeEntry("enumerated", ["0.0.1"])],
      inputShapes,
    );

    expect(mappings).toHaveLength(1);
    expect(mappings[0].input).toBe(consumedId);
    expect(mappings[0].output).toBe(
      ReadableIdGenerator.getForProducedValueType("enumerated", "0.0.1"),
    );
  });

  it("creates mappings for multiple versions", () => {
    const inputShapes = new Map<string, InputShape>();
    for (const v of ["0.0.1", "0.0.2"]) {
      inputShapes.set(
        ReadableIdGenerator.getForConsumedValueType("enumerated", v),
        {
          type: "valueType",
          valueType: {
            about: {
              fallbackTitle: "",
              fallbackDescription: "",
              localizedTitle: {},
              localizedDescription: {},
            },
            baseType: {
              type: "primitive",
              primitive: { type: "string", string: {} as any },
            },
          },
        },
      );
    }

    const mappings = getValueTypeInternalMappings(
      [makeEntry("enumerated", ["0.0.1", "0.0.2"])],
      inputShapes,
    );

    expect(mappings).toHaveLength(2);
  });
});
