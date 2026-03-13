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

import type { ObjectOrInterfaceDefinition, OsdkBase } from "@osdk/api";
import type { EXPERIMENTAL_BulkLinkResult } from "@osdk/api/unstable";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Client } from "../../Client.js";
import { createClientMockHelper, type MockClientHelper } from "./testUtils.js";

vi.mock("../../__unstable/createBulkLinksAsyncIterFactory.js", () => ({
  createBulkLinksAsyncIterFactory: vi.fn(),
}));

import { createBulkLinksAsyncIterFactory } from "../../__unstable/createBulkLinksAsyncIterFactory.js";
import { BulkLinksLoader } from "./BulkLinksLoader.js";

function makeSourceObject(pk: string | number): OsdkBase<ObjectOrInterfaceDefinition> {
  return {
    $apiName: "Player",
    $objectType: "Player",
    $primaryKey: pk,
  } as OsdkBase<ObjectOrInterfaceDefinition>;
}

function makeBulkLinkResult(
  source: OsdkBase<ObjectOrInterfaceDefinition>,
  linkApiName: string,
  targetApiName: string,
  targetPk: unknown,
): EXPERIMENTAL_BulkLinkResult {
  return {
    object: source,
    linkApiName,
    otherObjectApiName: targetApiName,
    otherObjectPk: targetPk,
  };
}

describe(BulkLinksLoader, () => {
  let client: Client;
  let mockClient: MockClientHelper;
  let mockIterFn: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useRealTimers();
    mockClient = createClientMockHelper();
    client = mockClient.client;
    mockIterFn = vi.fn();
    vi.mocked(createBulkLinksAsyncIterFactory).mockReturnValue(mockIterFn);
  });

  it("batches multiple fetch calls within time window", async () => {
    const objA = makeSourceObject("pk-A");
    const objB = makeSourceObject("pk-B");
    const objC = makeSourceObject("pk-C");

    mockIterFn.mockImplementation(async function*(
      objs: OsdkBase<ObjectOrInterfaceDefinition>[],
      linkTypes: string[],
    ) {
      for (const obj of objs) {
        yield makeBulkLinkResult(obj, linkTypes[0], "SeasonStats", `target-${obj.$primaryKey}`);
      }
    });

    vi.useFakeTimers();

    const loader = new BulkLinksLoader(client, 25, 100);
    const loadA = loader.fetch(objA, "seasonStats");
    const loadB = loader.fetch(objB, "seasonStats");
    const loadC = loader.fetch(objC, "seasonStats");

    vi.advanceTimersByTime(26);

    const [resultA, resultB, resultC] = await Promise.all([loadA, loadB, loadC]);

    expect(createBulkLinksAsyncIterFactory).toHaveBeenCalledOnce();
    expect(mockIterFn).toHaveBeenCalledOnce();
    expect(mockIterFn).toHaveBeenCalledWith(
      [objA, objB, objC],
      ["seasonStats"],
    );

    expect(resultA).toEqual({ targetPks: ["target-pk-A"], targetApiName: "SeasonStats" });
    expect(resultB).toEqual({ targetPks: ["target-pk-B"], targetApiName: "SeasonStats" });
    expect(resultC).toEqual({ targetPks: ["target-pk-C"], targetApiName: "SeasonStats" });

    vi.useRealTimers();
  });

  it("flushes immediately at max entries", async () => {
    const objA = makeSourceObject("pk-A");
    const objB = makeSourceObject("pk-B");
    const objC = makeSourceObject("pk-C");

    mockIterFn.mockImplementation(async function*(
      objs: OsdkBase<ObjectOrInterfaceDefinition>[],
      linkTypes: string[],
    ) {
      for (const obj of objs) {
        yield makeBulkLinkResult(obj, linkTypes[0], "Target", `t-${obj.$primaryKey}`);
      }
    });

    vi.useFakeTimers();

    const loader = new BulkLinksLoader(client, 25, 2);

    const loadA = loader.fetch(objA, "stats");
    const loadB = loader.fetch(objB, "stats");

    // Should have flushed immediately (no timer wait needed)
    const [resultA, resultB] = await Promise.all([loadA, loadB]);

    expect(resultA).toEqual({ targetPks: ["t-pk-A"], targetApiName: "Target" });
    expect(resultB).toEqual({ targetPks: ["t-pk-B"], targetApiName: "Target" });

    expect(mockIterFn).toHaveBeenCalledOnce();
    expect(mockIterFn).toHaveBeenCalledWith([objA, objB], ["stats"]);

    // Third call starts a new batch
    mockIterFn.mockClear();
    vi.mocked(createBulkLinksAsyncIterFactory).mockClear();

    const loadC = loader.fetch(objC, "stats");

    vi.advanceTimersByTime(26);

    const resultC = await loadC;
    expect(resultC).toEqual({ targetPks: ["t-pk-C"], targetApiName: "Target" });
    expect(mockIterFn).toHaveBeenCalledOnce();
    expect(mockIterFn).toHaveBeenCalledWith([objC], ["stats"]);

    vi.useRealTimers();
  });

  it("groups results by source PK with multiple targets", async () => {
    const objA = makeSourceObject("pk-A");
    const objB = makeSourceObject("pk-B");
    const objC = makeSourceObject("pk-C");

    mockIterFn.mockImplementation(async function*() {
      yield makeBulkLinkResult(objA, "stats", "SeasonStats", "target-X");
      yield makeBulkLinkResult(objA, "stats", "SeasonStats", "target-Y");
      yield makeBulkLinkResult(objB, "stats", "SeasonStats", "target-Z");
      // objC has no results
    });

    vi.useFakeTimers();

    const loader = new BulkLinksLoader(client, 25, 100);
    const loadA = loader.fetch(objA, "stats");
    const loadB = loader.fetch(objB, "stats");
    const loadC = loader.fetch(objC, "stats");

    vi.advanceTimersByTime(26);

    const [resultA, resultB, resultC] = await Promise.all([loadA, loadB, loadC]);

    expect(resultA).toEqual({ targetPks: ["target-X", "target-Y"], targetApiName: "SeasonStats" });
    expect(resultB).toEqual({ targetPks: ["target-Z"], targetApiName: "SeasonStats" });
    expect(resultC).toEqual({ targetPks: [], targetApiName: "" });

    vi.useRealTimers();
  });

  it("rejects all deferreds on bulk API failure", async () => {
    const objA = makeSourceObject("pk-A");
    const objB = makeSourceObject("pk-B");

    const error = new Error("Bulk links API failed");
    mockIterFn.mockImplementation(async function*() {
      throw error;
    });

    vi.useFakeTimers();

    const loader = new BulkLinksLoader(client, 25, 100);
    const loadA = loader.fetch(objA, "stats");
    const loadB = loader.fetch(objB, "stats");

    vi.advanceTimersByTime(26);

    await expect(loadA).rejects.toThrow("Bulk links API failed");
    await expect(loadB).rejects.toThrow("Bulk links API failed");

    vi.useRealTimers();
  });

  it("handles independent link types separately", async () => {
    const objA = makeSourceObject("pk-A");
    const objB = makeSourceObject("pk-B");

    const calls: Array<{ objs: OsdkBase<ObjectOrInterfaceDefinition>[]; linkTypes: string[] }> = [];

    mockIterFn.mockImplementation(async function*(
      objs: OsdkBase<ObjectOrInterfaceDefinition>[],
      linkTypes: string[],
    ) {
      calls.push({ objs, linkTypes });
      for (const obj of objs) {
        yield makeBulkLinkResult(obj, linkTypes[0], "Target", `t-${obj.$primaryKey}-${linkTypes[0]}`);
      }
    });

    vi.useFakeTimers();

    const loader = new BulkLinksLoader(client, 25, 100);
    const loadA = loader.fetch(objA, "linkType1");
    const loadB = loader.fetch(objB, "linkType2");

    vi.advanceTimersByTime(26);

    const [resultA, resultB] = await Promise.all([loadA, loadB]);

    expect(calls).toHaveLength(2);
    expect(calls[0]).toEqual({ objs: [objA], linkTypes: ["linkType1"] });
    expect(calls[1]).toEqual({ objs: [objB], linkTypes: ["linkType2"] });

    expect(resultA).toEqual({ targetPks: ["t-pk-A-linkType1"], targetApiName: "Target" });
    expect(resultB).toEqual({ targetPks: ["t-pk-B-linkType2"], targetApiName: "Target" });

    vi.useRealTimers();
  });
});
