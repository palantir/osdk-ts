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

import { z } from "zod/v4";

import { getDictionaryDefinition } from "./dictionary.js";

/** Substitutes dictionary representations only during export, preserving shared and recursive nodes. */
export class DictionaryJSONSchemaGenerator extends z.core.JSONSchemaGenerator {
  private readonly representations = new Map<
    z.core.$ZodType,
    z.core.$ZodType
  >();

  representation(schema: z.core.$ZodType): z.core.$ZodType {
    const dictionary = getDictionaryDefinition(schema);
    if (dictionary === undefined) return schema;
    let record = this.representations.get(schema);
    if (record === undefined) {
      record = z.record(dictionary.keySchema, dictionary.valueSchema);
      this.representations.set(schema, record);
    }
    return record;
  }

  override process(
    schema: z.core.$ZodType,
    params?: Parameters<z.core.JSONSchemaGenerator["process"]>[1],
  ): z.core.JSONSchema.BaseSchema {
    const representation = this.representation(schema);
    const result = super.process(representation, params);
    // Wrappers retain references to the original parser, so both identities must resolve to the same node.
    if (representation !== schema) {
      const node = this.seen.get(representation);
      if (node === undefined)
        throw new Error("Zod did not register the dictionary representation");
      this.seen.set(schema, node);
    }
    return result;
  }
}
