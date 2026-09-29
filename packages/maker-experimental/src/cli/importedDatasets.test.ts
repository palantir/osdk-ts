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

import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { defineObject } from "@osdk/maker";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { defineDataset, defineOntologyV2 } from "../index.js";
import { generateDatasetBlockResult } from "./generateBackingDataset.js";
import main from "./main.js";
import type { BlockGeneratorResult } from "./marketplaceSerialization/BlockGeneratorResult.js";

const UPSTREAM_KEY = "9ca68d24-d83f-4fd4-8b01-820f72c9d500";
const CONSUMER_KEY = "040ccbb1-3eaf-45c2-8ecf-f1c31e6e0743";

describe("dataset product imports", () => {
  let root: string;
  let producerDir: string;

  beforeEach(async () => {
    root = await fs.mkdtemp(
      fileURLToPath(new URL(".tmp-dataset-import-", import.meta.url)),
    );
    producerDir = path.join(root, "producer");
    await fs.mkdir(producerDir);
    await fs.writeFile(
      path.join(producerDir, "package.json"),
      JSON.stringify({ name: "producer", type: "module", version: "1.2.3" }),
    );
    const modulesDir = path.join(root, "node_modules", "@osdk");
    await fs.mkdir(path.join(modulesDir, "maker-experimental"), {
      recursive: true,
    });
    await fs.symlink(
      fileURLToPath(new URL("../../node_modules/@osdk/maker", import.meta.url)),
      path.join(modulesDir, "maker"),
    );
    await fs.writeFile(
      path.join(modulesDir, "maker-experimental", "package.json"),
      JSON.stringify({
        name: "@osdk/maker-experimental",
        type: "module",
        exports: "./index.ts",
      }),
    );
    await fs.writeFile(
      path.join(modulesDir, "maker-experimental", "index.ts"),
      `export * from ${JSON.stringify(fileURLToPath(new URL("../index.ts", import.meta.url)))};\n`,
    );
  });

  afterEach(async () => {
    await fs.rm(root, { recursive: true, force: true });
  });

  it.each([undefined, UPSTREAM_KEY])(
    "connects a generated dataset export to its upstream outputs with key %s",
    async (randomnessKey) => {
      const producer = await defineOntologyV2(
        "com.producer.",
        () => {
          defineDataset({
            name: "Audit log",
            columns: {
              event_id: { type: "string" },
              description: { type: "string" },
              metadata: {
                type: {
                  type: "struct",
                  structDefinition: { source: "string" },
                },
              },
              unused: { type: "integer" },
            },
          });
          defineDataset({
            name: "Unused",
            columns: { id: { type: "string" } },
          });
        },
        producerDir,
        undefined,
        undefined,
        randomnessKey,
      );

      expect(await fs.readdir(producerDir)).toContain("index.ts");
      const upstream = await generateDatasetBlockResult(
        producer.datasets[0],
        path.join(root, "upstream-build"),
        randomnessKey,
      );
      const consumerDir = path.join(root, "consumer");
      await fs.mkdir(consumerDir);
      const input = path.join(consumerDir, "ontology.ts");
      await fs.writeFile(
        input,
        `
import { datasets } from "../producer/index.js";
import { defineObject } from "@osdk/maker";
defineObject({
  apiName: "Event", displayName: "Event", pluralDisplayName: "Events",
  primaryKeyPropertyApiName: "id", titlePropertyApiName: "id",
  properties: {
    id: { type: "string" }, description: { type: "string" },
    metadata: { type: { type: "struct", structDefinition: { source: "string" } } },
    notes: { type: "string", editOnly: true },
  },
  datasources: [{ type: "dataset", dataset: datasets["Audit log"], propertyMapping: { id: "event_id" } }],
});
defineObject({
  apiName: "Summary", displayName: "Summary", pluralDisplayName: "Summaries",
  primaryKeyPropertyApiName: "id", titlePropertyApiName: "id",
  properties: { id: { type: "string" } },
  datasources: [{ type: "dataset", dataset: datasets["Audit log"], propertyMapping: { id: "event_id" }, objectSecurityPolicy: { name: "Events" } }],
});
`,
      );
      const output = path.join(consumerDir, "blocks.json");
      await main([
        "node",
        "maker-experimental",
        "--input",
        input,
        "--apiNamespace",
        "com.consumer",
        "--randomnessKey",
        CONSUMER_KEY,
        "--buildDir",
        consumerDir,
        "--codegenDir",
        consumerDir,
        "--output",
        output,
      ]);
      const results: BlockGeneratorResult[] = JSON.parse(
        await fs.readFile(output, "utf-8"),
      );
      expect(results.map((result) => result.block_type)).toEqual(["ONTOLOGY"]);
      const [consumer] = results;
      expect(consumer.input_mapping_entries).toEqual([]);
      expect(consumer.external_recommendations).toHaveLength(1);
      const [recommendation] = consumer.external_recommendations;
      expect(recommendation).toMatchObject({
        upstreamPackageName: "com.producer",
        upstreamVersionCompatibility: { from: "0.0.0", until: "x.x.x" },
      });
      expect(recommendation.upstreamRandomnessKey).toBe(randomnessKey);
      expect(recommendation.mappings).toHaveLength(6);
      for (const {
        targetInputReadableId,
        upstreamOutputReadableId,
      } of recommendation.mappings) {
        const inputShape = consumer.inputs[targetInputReadableId];
        const outputShape = upstream.outputs[upstreamOutputReadableId];
        expect(inputShape).toBeDefined();
        expect(outputShape).toBeDefined();
        expect(inputShape.type).toBe(outputShape.type);
        if (
          inputShape.type === "datasourceColumn" &&
          outputShape.type === "datasourceColumn"
        ) {
          expect(inputShape.datasourceColumn.type).toEqual(
            outputShape.datasourceColumn.type,
          );
        }
      }
      expect(
        JSON.parse(
          await fs.readFile(
            path.join(consumerDir, "dependencies.json"),
            "utf-8",
          ),
        ),
      ).toEqual({ "com.producer": "1.2.3" });
    },
  );

  it("preserves ontology exports alongside dataset exports", async () => {
    await defineOntologyV2(
      "com.producer.",
      () => {
        defineDataset({ name: "Events", columns: { id: { type: "string" } } });
        defineObject({
          apiName: "Event",
          displayName: "Event",
          pluralDisplayName: "Events",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
        });
      },
      producerDir,
    );
    const exported = await import(
      pathToFileURL(path.join(producerDir, "index.ts")).href
    );
    expect(exported.event.apiName).toBe("com.producer.Event");
    expect(exported.datasets.Events).toMatchObject({
      name: "Events",
      packageName: "com.producer",
    });
  });

  it("preserves dataset and column names that are special JavaScript keys", async () => {
    const specialName = "__proto__";
    await defineOntologyV2(
      "com.producer.",
      () => {
        defineDataset({
          name: specialName,
          columns: { [specialName]: { type: "string" } },
        });
      },
      producerDir,
    );
    const exported = await import(
      pathToFileURL(path.join(producerDir, "index.ts")).href
    );
    expect(Object.keys(exported.datasets)).toEqual(["__proto__"]);
    expect(Object.keys(exported.datasets[specialName].columns)).toEqual([
      "__proto__",
    ]);
  });

  it("clears dataset exports when the next build no longer defines them", async () => {
    await defineOntologyV2(
      "com.producer.",
      () => {
        defineDataset({ name: "Events", columns: {} });
      },
      producerDir,
    );
    await defineOntologyV2("com.producer.", () => {}, producerDir);
    const exported = await import(
      pathToFileURL(path.join(producerDir, "index.ts")).href
    );
    expect(exported).not.toHaveProperty("datasets");
  });

  it("rejects an ontology export that conflicts with the datasets export", async () => {
    await expect(
      defineOntologyV2(
        "com.producer.",
        () => {
          defineDataset({ name: "Events", columns: {} });
          defineObject({
            apiName: "Datasets",
            displayName: "Datasets",
            pluralDisplayName: "Datasets",
            primaryKeyPropertyApiName: "id",
            titlePropertyApiName: "id",
            properties: { id: { type: "string" } },
          });
        },
        producerDir,
      ),
    ).rejects.toThrow(/datasets.*export/u);
  });
});
