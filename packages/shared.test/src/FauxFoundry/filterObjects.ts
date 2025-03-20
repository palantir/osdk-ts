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

/* eslint-disable no-console */

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { BaseServerObject } from "./BaseServerObject.js";

export function filterObjects(
  objects: BaseServerObject[],
  where: OntologiesV2.SearchJsonQueryV2,
): BaseServerObject[] {
  switch (where.type) {
    case "eq": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      const ret = objects.filter((obj) => {
        return obj[field] === where.value;
      });
      return ret;
    }

    case "gt": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return obj[field] > where.value;
      });
    }

    case "lt": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return obj[field] < where.value;
      });
    }

    case "in": {
      const { propertyIdentifier, field } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return where.value.includes(obj[field]);
      });
    }

    case "and": {
      const { value } = where;
      for (const subWhere of value) {
        objects = filterObjects(objects, subWhere);
      }
      return objects;
    }

    case "not": {
      const { value } = where;
      return objects.filter((obj) => {
        return !filterObjects([obj], value).length;
      });
    }

    case "isNull": {
      const { propertyIdentifier, field, value } = where;
      if (propertyIdentifier) {
        console.error("propertyIdentifier not supported", where);
        throw new Error("propertyIdentifier not supported");
      }
      invariant(field);
      return objects.filter((obj) => {
        return value ? obj[field] == null : obj[field] != null;
      });
    }
  }
  console.error(
    "-=-=-=-=-=-= Unhandled where type: \n"
      + `Unhandled where type: ${where.type} in ${JSON.stringify(where)}`,
  );
  throw new Error(
    `Unhandled where type: ${where.type} in ${JSON.stringify(where)}`,
  );
}
