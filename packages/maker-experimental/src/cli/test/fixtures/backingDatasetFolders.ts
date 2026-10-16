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

import { defineLink, defineObject } from "@osdk/maker";

const [fish, tank] = [
  { apiName: "Fish", folder: "Aquarium//Animals/Fish/" },
  { apiName: "Tank", folder: "/Aquarium/Habitats/Tanks" },
  { apiName: "Root", folder: "/" },
  { apiName: "EmptyRoot", folder: "" },
  { apiName: "DefaultRoot", folder: undefined },
].map(({ apiName, folder }) =>
  defineObject({
    apiName,
    displayName: apiName,
    pluralDisplayName: apiName,
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: { id: { type: "string" } },
    includeEmptyBackingDatasource: true,
    permission: "publicProject",
    folder,
  }),
);

defineLink({
  apiName: "fishVisitedTanks",
  many: { object: fish, metadata: { apiName: "visitedTanks" } },
  toMany: { object: tank, metadata: { apiName: "visitingFish" } },
  includeEmptyBackingDatasource: true,
  permission: "publicProject",
  folder: "/Aquarium/Relationships",
});
