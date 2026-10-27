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

import { Ajv2020 } from "ajv/dist/2020.js";
import { expect, it, vi } from "vitest";
import { z } from "zod/v4";

import { dictionary } from "./dictionary.js";
import { generateModelDocuments } from "./generation.js";
import { modelUri } from "./jsonSchema.js";

it("exports dictionaries as named models, including optional references", () => {
  const dictionarySchema = dictionary(z.int32());
  const documents = generateModelDocuments({
    Dictionary: dictionarySchema,
    Wrapper: z.strictObject({ values: dictionarySchema.optional() }),
  });
  expect(documents.Dictionary).toMatchObject({
    type: "object",
    propertyNames: { type: "string", minLength: 1 },
    additionalProperties: {
      type: "integer",
      minimum: -2147483648,
      maximum: 2147483647,
    },
  });
  expect(documents.Wrapper).toMatchObject({
    properties: { values: { $ref: `${modelUri}Dictionary.json` } },
  });
  expect(documents.Wrapper.required).toBeUndefined();
});

it("rejects arbitrary transforms applied to dictionaries", () => {
  const transformed = dictionary(z.int32()).transform((values) =>
    Object.keys(values),
  );
  expect(() => generateModelDocuments({ Invalid: transformed })).toThrow(
    "unsupportedSchema:pipe",
  );
});

it("recognizes dictionaries from independently loaded runtime modules", async () => {
  vi.resetModules();
  const { dictionary: otherDictionary } = await import("./dictionary.js");
  expect(otherDictionary).not.toBe(dictionary);
  expect(
    generateModelDocuments({ Dictionary: otherDictionary(z.int32()) }),
  ).toEqual(generateModelDocuments({ Dictionary: dictionary(z.int32()) }));
});

it("preserves recursive dictionary references and permits special keys in exported JSON Schema", () => {
  interface Node {
    type: "node";
    children: Record<string, Node>;
  }
  const dictionarySchema = dictionary(z.lazy(() => node));
  const node: z.ZodType<Node> = z.strictObject({
    type: z.literal("node"),
    children: dictionarySchema,
  });
  const documents = generateModelDocuments({
    Node: node,
    Children: dictionarySchema,
  });
  expect(documents.Children.additionalProperties).toEqual({
    $ref: `${modelUri}Node.json`,
  });
  expect(documents.Node.properties?.children).toEqual({
    $ref: `${modelUri}Children.json`,
  });
  const ajv = new Ajv2020({ strict: true });
  for (const document of Object.values(documents)) ajv.addSchema(document);
  const validate = ajv.compile({ $ref: `${modelUri}Node.json` });
  expect(
    validate(
      JSON.parse(
        '{"type":"node","children":{"__proto__":{"type":"node","children":{}},"constructor":{"type":"node","children":{}}}}',
      ),
    ),
  ).toBe(true);
  expect(
    validate(JSON.parse('{"type":"node","children":{"__proto__":"invalid"}}')),
  ).toBe(false);
});
