/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

// @ts-check

import express from "express";

const OBJECTS_PER_PAGE = 1000;

let randomStringCounter = 0;
export function randomString() {
  let ret = randomStringCounter.toString(36).slice(0, 16).padStart(16, " ");
  randomStringCounter++;
  return ret;
}

function createLoadObjectsResponse() {
  const data = [];

  for (let i = 0; i < OBJECTS_PER_PAGE; i++) {
    // 11 repeated random strings = 11*16 bytes + 11 string overheads
    // 2 additional 8 character strings = 2*8 bytes + 2 string overheads
    // =
    // Object Overhead + 13 string overheads + 192 bytes
    const id = randomString();
    data.push({
      id,
      name: randomString(),
      a: randomString(),
      b: randomString(),
      c: randomString(),
      d: randomString(),
      e: randomString(),
      f: randomString(),
      g: randomString(),
      type: "Employee",
      __apiName: "Employee",
      __primaryKey: id,
      __title: id,
    });
  }
  return {
    data,
    nextPageToken: undefined,
    totalCount: OBJECTS_PER_PAGE,
  };
}

const loadMetadataResponse = {
  objectType: {
    apiName: "Employee",
    displayName: "Employee",
    status: "",
    pluralDisplayName: "Employees",
    icon: "",
    primaryKey: "id",
    properties: {
      id: { dataType: { type: "string" } },
      name: { dataType: { type: "string" } },
      a: { dataType: { type: "string" } },
      b: { dataType: { type: "string" } },
      c: { dataType: { type: "string" } },
      d: { dataType: { type: "string" } },
      e: { dataType: { type: "string" } },
      f: { dataType: { type: "string" } },
      g: { dataType: { type: "string" } },
    },
    rid: "ri.object.rid",
    titleProperty: "id",
  },
  linkTypes: [],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

export default function sidecar() {
  const app = express();

  app.post("/api/v2/ontologies/ri.d/objectSets/loadObjects", (req, res) => {
    res.send(createLoadObjectsResponse());
  });

  app.get(
    "/api/v2/ontologies/ri.d/objectTypes/Employee/fullMetadata",
    (req, res) => {
      res.send(loadMetadataResponse);
    },
  );

  return new Promise((resolve) => {
    const server = app.listen(6723, () => {
      //   console.log("Sidecar listening on port 6723");
      resolve(() => new Promise((resolve) => server.close(resolve)));
    });
  });
}
