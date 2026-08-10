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

import { Employee, FooInterface } from "@osdk/client.test.ontology";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import type { SetupServer } from "@osdk/shared.test";
import {
  LegacyFauxFoundry,
  MockOntologiesV2,
  startNodeApiServer,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import { additionalContext, type Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { createAndFetchTempObjectSetRid } from "../public-utils/createAndFetchTempObjectSetRid.js";

const baseUrl = "https://stack.palantir.com/";

/**
 * The wire object set `pivotTo` produces today for
 * `client(SomeInterface).pivotTo(<link to an object type>).pivotTo(<object link>)`.
 * The outer node is wrong: by then the chain has landed on an object type, so it
 * must be a `searchAround`. The gateway rejects the inner form with
 * Api:UnsupportedObjectSet.
 */
const buggyObjectSet: WireObjectSet = {
  type: "interfaceLinkSearchAround",
  objectSet: {
    type: "interfaceLinkSearchAround",
    objectSet: { type: "interfaceBase", interfaceType: "TaggableEntity" },
    interfaceLink: "annotations",
  },
  interfaceLink: "peeps",
};

const expectedNormalized = {
  type: "searchAround",
  objectSet: {
    type: "interfaceLinkSearchAround",
    objectSet: { type: "interfaceBase", interfaceType: "TaggableEntity" },
    interfaceLink: "annotations",
  },
  link: "peeps",
};

describe("normalizeInterfaceLinkSearchArounds wiring", () => {
  let client: Client;
  let apiServer: SetupServer;

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client, apiServer } = testSetup);

    // The shared test ontology has no interface link that targets an object
    // type, so teach the provider about one rather than mutating fixtures that
    // other packages snapshot.
    const ctx = client[additionalContext];
    const realGetInterface = ctx.ontologyProvider.getInterfaceDefinition.bind(
      ctx.ontologyProvider
    );
    (ctx.ontologyProvider as any).getInterfaceDefinition = (
      apiName: string
    ) => {
      if (apiName === "TaggableEntity") {
        return {
          type: "interface",
          apiName: "TaggableEntity",
          properties: {},
          links: {
            annotations: {
              targetType: "object",
              targetTypeApiName: "Employee",
              multiplicity: true,
            },
          },
        };
      }
      return realGetInterface(apiName as any);
    };

    return () => {
      testSetup.apiServer.close();
    };
  });

  function buggySetFor(def: any) {
    return createObjectSet(def, client[additionalContext], buggyObjectSet);
  }

  it("normalizes on the fetchObjectPage path (OntologyObjectSets.load)", async () => {
    await apiServer.boundary(async () => {
      let sent: any;
      apiServer.use(
        MockOntologiesV2.OntologyObjectSets.load(
          baseUrl,
          async ({ request }) => {
            sent = await request.json();
            return { data: [], totalCount: "0" } as any;
          }
        )
      );

      await buggySetFor(Employee).fetchPage();

      expect(sent.objectSet).toEqual(expectedNormalized);
    })();
  });

  it("normalizes on the fetchInterfacePage path (loadMultipleObjectTypes)", async () => {
    await apiServer.boundary(async () => {
      let sent: any;
      apiServer.use(
        MockOntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(
          baseUrl,
          async ({ request }) => {
            sent = await request.json();
            return {
              data: [],
              totalCount: "0",
              interfaceToObjectTypeMappings: {},
            } as any;
          }
        )
      );

      await buggySetFor(FooInterface).fetchPage();

      expect(sent.objectSet).toEqual(expectedNormalized);
    })();
  });

  it("normalizes on the aggregate path", async () => {
    await apiServer.boundary(async () => {
      let sent: any;
      apiServer.use(
        MockOntologiesV2.OntologyObjectSets.aggregate(
          baseUrl,
          async ({ request }) => {
            sent = await request.json();
            // aggregate() asserts exactly one result when there is no $groupBy.
            return {
              data: [{ group: {}, metrics: [{ name: "count", value: 0 }] }],
              accuracy: "APPROXIMATE",
            } as any;
          }
        )
      );

      await buggySetFor(Employee).aggregate({
        $select: { $count: "unordered" },
      } as any);

      expect(sent.objectSet).toEqual(expectedNormalized);
    })();
  });

  it("normalizes on the createTemporary path", async () => {
    await apiServer.boundary(async () => {
      let sent: any;
      apiServer.use(
        MockOntologiesV2.OntologyObjectSets.createTemporary(
          baseUrl,
          async ({ request }) => {
            sent = await request.json();
            return { objectSetRid: "ri.object-set.main.object-set.1" } as any;
          }
        )
      );

      await createAndFetchTempObjectSetRid(
        client,
        buggySetFor(Employee) as any
      );

      expect(sent.objectSet).toEqual(expectedNormalized);
    })();
  });

  it("normalizes on the fetchLinksPage path (loadLinks)", async () => {
    await apiServer.boundary(async () => {
      let sent: any;
      apiServer.use(
        MockOntologiesV2.OntologyObjectSets.loadLinks(
          baseUrl,
          async ({ request }) => {
            sent = await request.json();
            return { data: [], nextPageToken: undefined } as any;
          }
        )
      );

      const iter = buggySetFor(Employee).experimental_asyncIterLinks("peeps");
      // Draining is enough to trigger the request.
      for await (const _ of iter) {
        break;
      }

      expect(sent.objectSet).toEqual(expectedNormalized);
    })();
  });
});
