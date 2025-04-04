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

import { consola } from "../consola.js";
import { italic } from "../highlight.js";

export async function promptOntologyRid({
  ontology,
}: {
  ontology?: string;
}): Promise<string> {
  while (
    ontology == null
    || !/^ri\.ontology\.[^.]+\.ontology\.[^.]+$/.test(ontology)
  ) {
    if (ontology != null) {
      consola.fail("Please enter a valid Ontology resource identifier (rid)");
    }
    ontology = await consola.prompt(
      `Enter the Ontology resource identifier (rid) associated with your Developer Console:\n${
        italic(
          "(Example: ri.ontology.main.ontology.1df1ce4c-f9d2-0f78-a316-287f6ac80bb2)",
        )
      }`,
      { type: "text" },
    );
  }
  return ontology;
}
