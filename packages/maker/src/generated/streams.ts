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

// Generated from OmniAPI IR; do not edit.

import { z } from "zod/v4";

import * as core from "./core.js";

export type StreamsCompressedDefinition = boolean;

export const StreamsCompressedDefinitionSchema: z.ZodType<StreamsCompressedDefinition> =
  z.lazy(() => z.boolean());

export type StreamsPartitionsCountDefinition = number;

export const StreamsPartitionsCountDefinitionSchema: z.ZodType<StreamsPartitionsCountDefinition> =
  z.lazy(() => z.int32());

export type StreamsStreamDefinition = {
  schema: core.CoreStreamSchemaDefinition;
  partitionsCount?: StreamsPartitionsCountDefinition | undefined;
  streamType?: StreamsStreamTypeDefinition | undefined;
  compressed?: StreamsCompressedDefinition | undefined;
  id: string;
  apiName?: string | undefined;
};

export const StreamsStreamDefinitionSchema: z.ZodType<StreamsStreamDefinition> =
  z.lazy(() =>
    z.strictObject({
      schema: z.lazy(() => core.CoreStreamSchemaDefinitionSchema),
      partitionsCount: z
        .lazy(() => StreamsPartitionsCountDefinitionSchema)
        .optional(),
      streamType: z.lazy(() => StreamsStreamTypeDefinitionSchema).optional(),
      compressed: z.lazy(() => StreamsCompressedDefinitionSchema).optional(),
      id: z.string(),
      apiName: z.string().optional(),
    }),
  );

export type StreamsStreamTypeDefinition = "LOW_LATENCY" | "HIGH_THROUGHPUT";

export const StreamsStreamTypeDefinitionSchema: z.ZodType<StreamsStreamTypeDefinition> =
  z.lazy(() => z.enum(["LOW_LATENCY", "HIGH_THROUGHPUT"]));
