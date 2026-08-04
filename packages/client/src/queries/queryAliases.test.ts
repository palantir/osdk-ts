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

import { addOne, Employee } from "@osdk/client.test.ontology";
import {
  LegacyFauxFoundry,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createQueryObjectResponse } from "./applyQuery.js";

const BOUND_QUERY_API_NAME = "com.example.boundAddOne";
const BOUND_OBJECT_API_NAME = "com.example.BoundEmployee";

/** Stands in for `Aliases.query(addOne)`. */
const AliasedAddOne = {
  ...addOne,
  apiName: BOUND_QUERY_API_NAME,
  alias: {
    localApiName: "addOne",
    boundApiName: BOUND_QUERY_API_NAME,
  },
} as typeof addOne;

describe("query aliases", () => {
  let client: Client;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);

    // The stack only knows the query under its bound name. If the client sent
    // the local name the faux server would not resolve it at all.
    testSetup.fauxFoundry
      .getDefaultOntology()
      .registerQueryType(
        { ...stubData.addOneQueryType, apiName: BOUND_QUERY_API_NAME },
        (req) => ({ value: (req.parameters.n as number) + 1 }),
      );

    return () => {
      testSetup.apiServer.close();
    };
  });

  it("executes against the bound query api name", async () => {
    const result = await client(AliasedAddOne).executeFunction({ n: 2 });
    expect(result).toBe(3);
  });

  it("reports the code-facing query api name from fetchMetadata", async () => {
    const metadata = await client.fetchMetadata(AliasedAddOne);
    expect(metadata.apiName).toBe("addOne");
  });

  it("leaves a query without an alias alone", async () => {
    const result = await client(addOne).executeFunction({ n: 2 });
    expect(result).toBe(3);
  });

  // Queries build object references by hand instead of going through
  // convertWireToOsdkObjects, so they need their own bound -> local step.
  describe("object references in query output", () => {
    it("reports the code-facing object type name", () => {
      const aliasedObjectDef = {
        ...Employee,
        apiName: BOUND_OBJECT_API_NAME,
        alias: {
          localApiName: "Employee",
          boundApiName: BOUND_OBJECT_API_NAME,
        },
      } as typeof Employee;

      const response = createQueryObjectResponse(50030, aliasedObjectDef);

      expect(response.$apiName).toBe("Employee");
      expect(response.$objectType).toBe("Employee");
      expect(response.$objectSpecifier).toBe("Employee:50030");
    });

    it("leaves an object type without an alias alone", () => {
      const response = createQueryObjectResponse(50030, Employee);

      expect(response.$apiName).toBe("Employee");
      expect(response.$objectType).toBe("Employee");
      expect(response.$objectSpecifier).toBe("Employee:50030");
    });
  });
});
