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

import {
  defineCreateObjectAction,
  defineInterface,
  defineLink,
  defineObject,
  defineSharedPropertyType,
} from "@osdk/maker";

const objects = ["Person", "Company", "Root"].map((apiName) =>
  defineObject({
    apiName,
    displayName: apiName,
    pluralDisplayName: apiName,
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: { id: { type: "string" } },
    permission: "publicProject",
    folder:
      apiName === "Root"
        ? undefined
        : { id: "/team/entities", location: "team//entities/" },
  }),
);

defineInterface({
  apiName: "Named",
  permission: "publicProject",
  folder: { id: "/team/entities", location: "/team/entities" },
});
defineSharedPropertyType({
  apiName: "label",
  type: "string",
  permission: "publicProject",
  folder: { id: "/team/entities", location: "/team/entities" },
});
defineCreateObjectAction({
  objectType: objects[0],
  apiName: "create-person",
  permission: "publicProject",
  folder: { id: "/team/entities", location: "/team/entities" },
});
defineLink({
  apiName: "peopleCompanies",
  many: { object: objects[0], metadata: { apiName: "companies" } },
  toMany: { object: objects[1], metadata: { apiName: "people" } },
  permission: "publicProject",
  folder: { id: "/team/entities", location: "/team/entities" },
});
