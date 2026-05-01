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

import { describe, expect, it, vi } from "vitest";
import type { ComputeRequest } from "../types/compute.js";
import { visitComputeRequest } from "./computeRequest.js";

const base = {
  id: "req-1",
  requestUrl: "/api/v2/ontologies/test/objectSets/loadObjects",
  requestTimestamp: new Date("2025-01-01"),
  requestPayload: "{}",
  requestPayloadHash: 123,
};

describe("visitComputeRequest", () => {
  it("calls pending visitor for pending requests", () => {
    const request: ComputeRequest = { ...base, type: "pending" };
    const visitor = {
      pending: vi.fn().mockReturnValue("p"),
      failed: vi.fn(),
      fulfilled: vi.fn(),
      fulfilledWithoutUsage: vi.fn(),
    };

    const result = visitComputeRequest(request, visitor);

    expect(result).toBe("p");
    expect(visitor.pending).toHaveBeenCalledWith(request);
    expect(visitor.failed).not.toHaveBeenCalled();
    expect(visitor.fulfilled).not.toHaveBeenCalled();
    expect(visitor.fulfilledWithoutUsage).not.toHaveBeenCalled();
  });

  it("calls failed visitor for failed requests", () => {
    const request: ComputeRequest = {
      ...base,
      type: "failed",
      failedTimestamp: new Date("2025-01-01"),
      error: { type: "unknown" },
    };
    const visitor = {
      pending: vi.fn(),
      failed: vi.fn().mockReturnValue("f"),
      fulfilled: vi.fn(),
      fulfilledWithoutUsage: vi.fn(),
    };

    const result = visitComputeRequest(request, visitor);

    expect(result).toBe("f");
    expect(visitor.failed).toHaveBeenCalledWith(request);
    expect(visitor.pending).not.toHaveBeenCalled();
  });

  it("calls fulfilled visitor for fulfilled requests", () => {
    const request: ComputeRequest = {
      ...base,
      type: "fulfilled",
      computeUsage: 42,
      responseTimestamp: new Date("2025-01-01"),
      responsePayload: "{}",
      responsePayloadBytes: 100,
      responsePayloadHash: 456,
    };
    const visitor = {
      pending: vi.fn(),
      failed: vi.fn(),
      fulfilled: vi.fn().mockReturnValue("done"),
      fulfilledWithoutUsage: vi.fn(),
    };

    const result = visitComputeRequest(request, visitor);

    expect(result).toBe("done");
    expect(visitor.fulfilled).toHaveBeenCalledWith(request);
    expect(visitor.pending).not.toHaveBeenCalled();
    expect(visitor.fulfilledWithoutUsage).not.toHaveBeenCalled();
  });

  it("calls fulfilledWithoutUsage visitor for fulfilled-without-usage requests", () => {
    const request: ComputeRequest = {
      ...base,
      type: "fulfilled-without-usage",
      responseTimestamp: new Date("2025-01-01"),
      responsePayload: "{}",
      responsePayloadBytes: 100,
      responsePayloadHash: 456,
    };
    const visitor = {
      pending: vi.fn(),
      failed: vi.fn(),
      fulfilled: vi.fn(),
      fulfilledWithoutUsage: vi.fn().mockReturnValue("no-usage"),
    };

    const result = visitComputeRequest(request, visitor);

    expect(result).toBe("no-usage");
    expect(visitor.fulfilledWithoutUsage).toHaveBeenCalledWith(request);
    expect(visitor.fulfilled).not.toHaveBeenCalled();
    expect(visitor.failed).not.toHaveBeenCalled();
    expect(visitor.pending).not.toHaveBeenCalled();
  });
});
