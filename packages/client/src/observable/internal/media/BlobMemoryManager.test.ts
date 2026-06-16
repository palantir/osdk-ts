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

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { BlobMemoryManager } from "./BlobMemoryManager.js";
import { createBlobMemoryManager } from "./BlobMemoryManager.js";

describe("BlobMemoryManager", () => {
  let manager: BlobMemoryManager;

  beforeEach(() => {
    manager = createBlobMemoryManager();
  });

  afterEach(() => {
    manager.dispose();
  });

  it("manages blob cache lifecycle (add, get, remove, clear)", () => {
    const blob1 = new Blob(["data1"]);
    manager.add("key1", blob1);
    expect(manager.get("key1")).toBe(blob1);

    const blob2 = new Blob(["data2"]);
    manager.add("key1", blob2);
    expect(manager.get("key1")).toBe(blob2);

    manager.remove("key1");
    expect(manager.get("key1")).toBeUndefined();

    manager.add("key1", blob1);
    manager.add("key2", blob2);
    manager.clear();
    expect(manager.get("key1")).toBeUndefined();
    expect(manager.get("key2")).toBeUndefined();
  });

  it("creates and reuses blob URLs", () => {
    const blob = new Blob(["test"]);
    manager.add("key", blob);

    const url1 = manager.createBlobUrl("key");
    expect(url1).toMatch(/^blob:/);

    const url2 = manager.createBlobUrl("key");
    expect(url2).toBe(url1);
  });

  it("manages blob URL reference counting", () => {
    const blob = new Blob(["test"]);
    manager.add("key", blob);

    const url1 = manager.createBlobUrl("key");
    const url2 = manager.createBlobUrl("key");
    expect(url1).toBe(url2);

    manager.releaseBlobUrl("key");
    const url3 = manager.createBlobUrl("key");
    expect(url3).toBe(url1);

    manager.releaseBlobUrl("key");
    manager.releaseBlobUrl("key");

    const url4 = manager.createBlobUrl("key");
    expect(url4).toMatch(/^blob:/);
    expect(url4).toBe(url1);
  });

  it("revokes blob URLs when removing entries", () => {
    const blob = new Blob(["test"]);
    manager.add("key", blob);

    manager.createBlobUrl("key");

    manager.remove("key");
    expect(manager.get("key")).toBeUndefined();

    expect(manager.createBlobUrl("key")).toBeUndefined();
  });

  it("handles missing keys gracefully", () => {
    expect(manager.get("missing")).toBeUndefined();
    expect(manager.createBlobUrl("missing")).toBeUndefined();
    expect(() => manager.remove("missing")).not.toThrow();
    expect(() => manager.releaseBlobUrl("missing")).not.toThrow();
  });

  it("cleans up all resources on dispose", () => {
    manager.add("key1", new Blob(["data1"]));
    manager.add("key2", new Blob(["data2"]));
    manager.createBlobUrl("key1");

    expect(() => manager.dispose()).not.toThrow();

    expect(() => manager.dispose()).not.toThrow();
  });
});
