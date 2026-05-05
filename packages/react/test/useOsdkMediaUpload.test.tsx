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

import type { MediaReference } from "@osdk/api";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { act, renderHook } from "@testing-library/react";
import * as React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { OsdkContext } from "../src/new/OsdkContext.js";
import { useOsdkMediaUpload } from "../src/new/useOsdkMediaUpload.js";

const mockMediaReference: MediaReference = {
  mimeType: "image/jpeg",
  reference: {
    type: "mediaSetViewItem",
    mediaSetViewItem: {
      mediaItemRid: "item1",
      mediaSetRid: "set1",
      mediaSetViewRid: "view1",
    },
  },
};

function createMockObservableClient(
  uploadImpl?: ObservableClient["uploadMedia"],
): ObservableClient {
  const mockClient: Partial<ObservableClient> = {
    uploadMedia: uploadImpl ?? vi.fn().mockResolvedValue(mockMediaReference),
    observeMetadata: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    observeMedia: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    invalidateMedia: vi.fn(),
  };

  return mockClient as ObservableClient;
}

function renderUploadHook(mockObservableClient: ObservableClient) {
  const wrapper = ({ children }: React.PropsWithChildren) => (
    <OsdkContext.Provider
      value={{
        observableClient: mockObservableClient,
        devtoolsEnabled: false,
      }}
    >
      {children}
    </OsdkContext.Provider>
  );

  return renderHook(() => useOsdkMediaUpload(), { wrapper });
}

describe("useOsdkMediaUpload", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns initial state", () => {
    const { result } = renderUploadHook(createMockObservableClient());

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();
    expect(result.current.isPending).toBe(false);
    expect(result.current.upload).toBeInstanceOf(Function);
    expect(result.current.reset).toBeInstanceOf(Function);
  });

  it("uploads a file successfully", async () => {
    const mockObservableClient = createMockObservableClient();
    const { result } = renderUploadHook(mockObservableClient);

    const file = new Blob(["photo data"], { type: "image/jpeg" });

    await act(async () => {
      await result.current.upload(file, { fileName: "photo.jpg" });
    });

    expect(mockObservableClient.uploadMedia).toHaveBeenCalledWith(
      file,
      { fileName: "photo.jpg" },
    );
    expect(result.current.data).toEqual(mockMediaReference);
    expect(result.current.isPending).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("handles upload error", async () => {
    const mockObservableClient = createMockObservableClient(
      vi.fn().mockRejectedValue(new Error("Upload failed")),
    );
    const { result } = renderUploadHook(mockObservableClient);

    await act(async () => {
      try {
        await result.current.upload(new Blob(["data"]), {
          fileName: "test.bin",
        });
      } catch {
        // Expected
      }
    });

    expect(result.current.error?.message).toBe("Upload failed");
    expect(result.current.isPending).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  it("resets state after upload", async () => {
    const { result } = renderUploadHook(createMockObservableClient());

    await act(async () => {
      await result.current.upload(new Blob(["data"]), {
        fileName: "test.bin",
      });
    });

    expect(result.current.data).toBeDefined();

    act(() => {
      result.current.reset();
    });

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();
    expect(result.current.isPending).toBe(false);
  });
});
