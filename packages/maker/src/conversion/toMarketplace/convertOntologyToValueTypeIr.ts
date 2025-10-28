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

import type { OntologyIrValueTypeBlockData } from "@osdk/client.unstable";
import { type OntologyDefinition } from "../../api/common/OntologyDefinition.js";
import { OntologyEntityTypeEnum } from "../../api/common/OntologyEntityTypeEnum.js";
import { convertValueTypesToIr } from "./convertValueTypesToIr.js";

export function convertOntologyToValueTypeIr(
  ontology: OntologyDefinition,
): OntologyIrValueTypeBlockData {
  return {
    valueTypes: convertValueTypesToIr(
      ontology[OntologyEntityTypeEnum.VALUE_TYPE],
    ),
  };
}
