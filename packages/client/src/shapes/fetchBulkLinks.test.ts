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

import type { ObjectOrInterfaceDefinition, ObjectTypeDefinition, Osdk, OsdkBase } from "@osdk/api";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../observable/internal/BulkLinksLoader.js", () => ({
  getBulkLinksLoader: vi.fn(),
}));

vi.mock("../observable/internal/BulkObjectLoader.js", () => ({
  getBulkObjectLoader: vi.fn(),
}));

import type { BulkLinksLoader } from "../observable/internal/BulkLinksLoader.js";
import { getBulkLinksLoader } from "../observable/internal/BulkLinksLoader.js";
import type { BulkObjectLoader } from "../observable/internal/BulkObjectLoader.js";
import { getBulkObjectLoader } from "../observable/internal/BulkObjectLoader.js";
import type { Client } from "../Client.js";
import {
  fetchBulkDerivedLinkObjects,
  fetchBulkDerivedLinkObjectsWithMapping,
  fetchBulkDerivedLinks,
} from "./fetchBulkLinks.js";

function makeSourceObject(pk: string | number): OsdkBase<ObjectOrInterfaceDefinition> {
  return {
    $apiName: "Player",
    $objectType: "Player",
    $primaryKey: pk,
  } as OsdkBase<ObjectOrInterfaceDefinition>;
}

describe(fetchBulkDerivedLinks, () => {
  const mockFetch = vi.fn();
  const mockClient = {} as Client;

  beforeEach(() => {
    mockFetch.mockReset();
    vi.mocked(getBulkLinksLoader).mockReturnValue(
      { fetch: mockFetch } as Pick<BulkLinksLoader, "fetch"> as BulkLinksLoader,
    );
  });

  it("delegates to BulkLinksLoader.fetch", async () => {
    const source = makeSourceObject("pk-1");
    const expected = { targetPks: ["t1", "t2"], targetApiName: "Target" };
    mockFetch.mockResolvedValue(expected);

    const result = await fetchBulkDerivedLinks(mockClient, source, "myLink");

    expect(getBulkLinksLoader).toHaveBeenCalledWith(mockClient);
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(result).toBe(expected);
  });
});

describe(fetchBulkDerivedLinkObjects, () => {
  const mockLinksFetch = vi.fn();
  const mockObjectFetch = vi.fn();
  const mockClient = {} as Client;

  beforeEach(() => {
    mockLinksFetch.mockReset();
    mockObjectFetch.mockReset();
    vi.mocked(getBulkLinksLoader).mockReturnValue(
      { fetch: mockLinksFetch } as Pick<BulkLinksLoader, "fetch"> as BulkLinksLoader,
    );
    vi.mocked(getBulkObjectLoader).mockReturnValue(
      { fetch: mockObjectFetch } as Pick<BulkObjectLoader, "fetch"> as BulkObjectLoader,
    );
  });

  it("returns empty array when no target PKs", async () => {
    const source = makeSourceObject("pk-1");
    mockLinksFetch.mockResolvedValue({ targetPks: [], targetApiName: "" });

    const result = await fetchBulkDerivedLinkObjects(mockClient, source, "myLink");

    expect(result).toEqual([]);
    expect(mockObjectFetch).not.toHaveBeenCalled();
  });

  it("throws on non-primitive PK types", async () => {
    const source = makeSourceObject("pk-1");
    mockLinksFetch.mockResolvedValue({
      targetPks: [{ nested: "object" }],
      targetApiName: "Target",
    });

    await expect(
      fetchBulkDerivedLinkObjects(mockClient, source, "myLink"),
    ).rejects.toThrow("Unexpected primary key type: object");
  });

  it("chains BulkLinksLoader and BulkObjectLoader", async () => {
    const source = makeSourceObject("pk-1");
    mockLinksFetch.mockResolvedValue({
      targetPks: ["t-pk-1", "t-pk-2"],
      targetApiName: "SeasonStats",
    });

    const objHolder1 = { $primaryKey: "t-pk-1", $apiName: "SeasonStats" };
    const objHolder2 = { $primaryKey: "t-pk-2", $apiName: "SeasonStats" };
    mockObjectFetch
      .mockResolvedValueOnce(objHolder1)
      .mockResolvedValueOnce(objHolder2);

    const result = await fetchBulkDerivedLinkObjects(mockClient, source, "stats");

    expect(getBulkObjectLoader).toHaveBeenCalledWith(mockClient);
    expect(mockObjectFetch).toHaveBeenCalledTimes(2);
    expect(mockObjectFetch).toHaveBeenCalledWith("SeasonStats", "t-pk-1");
    expect(mockObjectFetch).toHaveBeenCalledWith("SeasonStats", "t-pk-2");
    expect(result).toHaveLength(2);
  });

  it("handles numeric PKs", async () => {
    const source = makeSourceObject("pk-1");
    mockLinksFetch.mockResolvedValue({
      targetPks: [42, 99],
      targetApiName: "Target",
    });

    const obj1 = { $primaryKey: 42, $apiName: "Target" };
    const obj2 = { $primaryKey: 99, $apiName: "Target" };
    mockObjectFetch
      .mockResolvedValueOnce(obj1)
      .mockResolvedValueOnce(obj2);

    const result = await fetchBulkDerivedLinkObjects(mockClient, source, "link");

    expect(mockObjectFetch).toHaveBeenCalledWith("Target", 42);
    expect(mockObjectFetch).toHaveBeenCalledWith("Target", 99);
    expect(result).toHaveLength(2);
  });
});

describe(fetchBulkDerivedLinkObjectsWithMapping, () => {
  const mockLinksFetch = vi.fn();
  const mockObjectFetch = vi.fn();
  const mockClient = {} as Client;

  beforeEach(() => {
    mockLinksFetch.mockReset();
    mockObjectFetch.mockReset();
    vi.mocked(getBulkLinksLoader).mockReturnValue(
      { fetch: mockLinksFetch } as Pick<BulkLinksLoader, "fetch"> as BulkLinksLoader,
    );
    vi.mocked(getBulkObjectLoader).mockReturnValue(
      { fetch: mockObjectFetch } as Pick<BulkObjectLoader, "fetch"> as BulkObjectLoader,
    );
  });

  it("returns empty map for empty source array", async () => {
    const result = await fetchBulkDerivedLinkObjectsWithMapping(mockClient, [], "link");

    expect(result.objectsBySourcePk.size).toBe(0);
    expect(result.targetApiName).toBe("");
    expect(result.allTargetPks.size).toBe(0);
    expect(mockLinksFetch).not.toHaveBeenCalled();
  });

  it("maps single source to its targets", async () => {
    const source = makeSourceObject("s1");
    mockLinksFetch.mockResolvedValue({
      targetPks: ["t1", "t2"],
      targetApiName: "Target",
    });
    const obj1 = { $primaryKey: "t1", $apiName: "Target" };
    const obj2 = { $primaryKey: "t2", $apiName: "Target" };
    mockObjectFetch
      .mockResolvedValueOnce(obj1)
      .mockResolvedValueOnce(obj2);

    const result = await fetchBulkDerivedLinkObjectsWithMapping(
      mockClient,
      [source],
      "link",
    );

    expect(result.targetApiName).toBe("Target");
    expect(result.allTargetPks).toEqual(new Set(["t1", "t2"]));
    const resolved = result.objectsBySourcePk.get("s1");
    expect(resolved).toHaveLength(2);
  });

  it("deduplicates overlapping targets across sources", async () => {
    const s1 = makeSourceObject("s1");
    const s2 = makeSourceObject("s2");

    mockLinksFetch
      .mockResolvedValueOnce({ targetPks: ["t1", "t2"], targetApiName: "Target" })
      .mockResolvedValueOnce({ targetPks: ["t2", "t3"], targetApiName: "Target" });

    const obj1 = { $primaryKey: "t1", $apiName: "Target" };
    const obj2 = { $primaryKey: "t2", $apiName: "Target" };
    const obj3 = { $primaryKey: "t3", $apiName: "Target" };
    mockObjectFetch
      .mockResolvedValueOnce(obj1)
      .mockResolvedValueOnce(obj2)
      .mockResolvedValueOnce(obj3);

    const result = await fetchBulkDerivedLinkObjectsWithMapping(
      mockClient,
      [s1, s2],
      "link",
    );

    expect(result.allTargetPks).toEqual(new Set(["t1", "t2", "t3"]));
    expect(mockObjectFetch).toHaveBeenCalledTimes(3);

    const s1Resolved = result.objectsBySourcePk.get("s1");
    expect(s1Resolved).toHaveLength(2);

    const s2Resolved = result.objectsBySourcePk.get("s2");
    expect(s2Resolved).toHaveLength(2);
  });

  it("returns empty map when source has no link targets", async () => {
    const source = makeSourceObject("s1");
    mockLinksFetch.mockResolvedValue({ targetPks: [], targetApiName: "" });

    const result = await fetchBulkDerivedLinkObjectsWithMapping(
      mockClient,
      [source],
      "link",
    );

    expect(result.objectsBySourcePk.size).toBe(0);
    expect(result.allTargetPks.size).toBe(0);
    expect(mockObjectFetch).not.toHaveBeenCalled();
  });
});
