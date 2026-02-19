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

import type { OntologyIrCondition } from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import type { ActionParameter, ConditionDefinition } from "@osdk/maker";

export function convertConditionDefinition(
  condition: ConditionDefinition,
  actionParameters?: ActionParameter[],
): OntologyIrCondition {
  switch (condition.type) {
    case "and":
      if ("conditions" in condition) {
        return {
          type: "and",
          and: {
            conditions: condition.conditions.map(c =>
              convertConditionDefinition(c, actionParameters)
            ),
          },
        };
      } else {
        return condition;
      }
    case "or":
      if ("conditions" in condition) {
        return {
          type: "or",
          or: {
            conditions: condition.conditions.map(c =>
              convertConditionDefinition(c, actionParameters)
            ),
          },
        };
      } else {
        return condition;
      }
    case "group":
      return {
        type: "comparison",
        comparison: {
          operator: "INTERSECTS",
          left: {
            type: "userProperty",
            userProperty: {
              userId: {
                type: "currentUser",
                currentUser: {},
              },
              propertyValue: {
                type: "groupIds",
                groupIds: {},
              },
            },
          },
          right: {
            type: "staticValue",
            staticValue: {
              type: "stringList",
              stringList: {
                strings: [
                  condition.name,
                ],
              },
            },
          },
        },
      };
    case "parameter":
      invariant(
        actionParameters?.some(param => param.id === condition.parameterId),
        `Action parameter condition references unknown parameter ${condition.parameterId}`,
      );
      return {
        type: "comparison",
        comparison: {
          operator: "EQUALS",
          left: {
            type: "parameterId",
            parameterId: condition.parameterId,
          },
          right: condition.matches,
        },
      };
    default:
      return condition;
  }
}
