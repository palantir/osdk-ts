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

import type {
  OntologyIrInterfacePropertyLogicRuleValue,
  OntologyIrLogicRuleValue,
} from "@osdk/client.unstable";
import { randomUUID } from "crypto";
import type { MappingValue } from "../../api/action/MappingValue.js";

export function convertInterfacePropertyMappingValue(
  value: MappingValue,
): OntologyIrInterfacePropertyLogicRuleValue {
  switch (value.type) {
    case "uuid":
      return {
        type: "logicRuleValue",
        logicRuleValue: {
          type: "uniqueIdentifier",
          uniqueIdentifier: {
            linkId: value.linkId ?? randomUUID(),
          },
        },
      };
    case "currentTime":
      return {
        type: "logicRuleValue",
        logicRuleValue: {
          type: "currentTime",
          currentTime: {},
        },
      };
    case "currentUser":
      return {
        type: "logicRuleValue",
        logicRuleValue: {
          type: "currentUser",
          currentUser: {},
        },
      };
    default:
      return {
        type: "logicRuleValue",
        logicRuleValue: value,
      };
  }
}

export function convertMappingValue(
  value: MappingValue,
): OntologyIrLogicRuleValue {
  switch (value.type) {
    case "uuid":
      return {
        type: "uniqueIdentifier",
        uniqueIdentifier: {
          linkId: value.linkId ?? randomUUID(),
        },
      };
    case "currentTime":
      return {
        type: "currentTime",
        currentTime: {},
      };
    case "currentUser":
      return {
        type: "currentUser",
        currentUser: {},
      };
    default:
      return value;
  }
}
