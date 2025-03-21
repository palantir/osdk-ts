/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { Task } from "@osdk/client.test.ontology";
import * as SharedClientContext from "@osdk/shared.client.impl";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { metadataCacheClient } from "./__unstable/ConjureSupport.js";
import { createClient } from "./createClient.js";
import * as MakeConjureContext from "./ontology/makeConjureContext.js";
import { USER_AGENT } from "./util/UserAgent.js";
export function mockFetchResponse(fetch, response) {
  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve(response),
    blob: () => Promise.resolve(response),
    status: 200,
    ok: true
  });
}
describe(createClient, () => {
  let fetchFunction;
  let client;
  const ontologyRid = "ri.not.important";
  beforeEach(() => {
    fetchFunction = vi.fn();
    client = createClient("https://mock.com", ontologyRid, async () => "Token", undefined, fetchFunction);
    mockFetchResponse(fetchFunction, {
      data: []
    });
  });
  describe("user agent passing", () => {
    function getUserAgentPartsFromMockedFetch() {
      const userAgent = (fetchFunction.mock.calls[0][1]?.headers).get("Fetch-User-Agent");
      const parts = userAgent?.split(" ") ?? [];
      return parts;
    }
    it("works for objects", async () => {
      await client(Task).fetchPage();
      expect(fetchFunction).toHaveBeenCalledTimes(1);
      const parts = getUserAgentPartsFromMockedFetch();
      expect(parts).toEqual([...Task.osdkMetadata.extraUserAgent.split(" "), USER_AGENT]);
    });
  });
  describe("check url formatting", () => {
    it("urls are correctly formatted", async () => {
      const spy = vi.spyOn(SharedClientContext, "createSharedClientContext");
      const client = createClient("https://mock.com", ontologyRid, async () => "Token", undefined, fetchFunction);
      expect(spy.mock.calls[0][0]).toBe("https://mock.com/");
      createClient("https://mock1.com/", ontologyRid, async () => "Token", undefined, fetchFunction);
      expect(spy.mock.calls[1][0]).toBe("https://mock1.com/");
      createClient("https://mock2.com/stuff/first/foo", ontologyRid, async () => "Token", undefined, fetchFunction);
      expect(spy.mock.calls[2][0]).toBe("https://mock2.com/stuff/first/foo/");
      createClient("https://mock3.com/stuff/first/foo/", ontologyRid, async () => "Token", undefined, fetchFunction);
      expect(spy.mock.calls[3][0]).toBe("https://mock3.com/stuff/first/foo/");
      const conjureContextSpy = vi.spyOn(MakeConjureContext, "makeConjureContext");
      void metadataCacheClient({
        baseUrl: "https://mock4.com/",
        ontologyProvider: {
          getObjectDefinition: async () => ({})
        }
      });
      expect(conjureContextSpy.mock.results[0].value["baseUrl"] + conjureContextSpy.mock.results[0].value["servicePath"]).toBe("https://mock4.com/ontology-metadata/api");
    });
  });
});
//# sourceMappingURL=createClient.test.js.map