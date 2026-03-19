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

import type { Client, MediaReference } from "@osdk/client";
import {
  MediaTransformationFailedError,
  MediaTransformationTimeoutError,
} from "@osdk/client";
import { MediaSets } from "@osdk/foundry.mediasets";
import type { Transformation } from "@osdk/foundry.mediasets";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMediaFromReference } from "./createMediaFromReference.js";

vi.mock("@osdk/foundry.mediasets", () => ({
  MediaSets: {
    transform: vi.fn(),
    getStatus: vi.fn(),
    getResult: vi.fn(),
    read: vi.fn(),
    metadata: vi.fn(),
    info: vi.fn(),
  },
}));

const mockedTransform = vi.mocked(MediaSets.transform);
const mockedGetStatus = vi.mocked(MediaSets.getStatus);
const mockedGetResult = vi.mocked(MediaSets.getResult);

const mockClient = {} as Client;

const MEDIA_SET_RID = "ri.mio.main.media-set.test-set";
const MEDIA_ITEM_RID = "ri.mio.main.media-item.test-item";
const MEDIA_SET_VIEW_RID = "ri.mio.main.view.test-view";

const IMAGE_TRANSFORMATION: Transformation = {
  type: "image",
  encoding: { type: "jpg" },
  operations: [{ type: "rotate", angle: "DEGREE_180" }],
};

const mockMediaReference: MediaReference = {
  mimeType: "image/png",
  reference: {
    type: "mediaSetViewItem",
    mediaSetViewItem: {
      mediaItemRid: MEDIA_ITEM_RID,
      mediaSetRid: MEDIA_SET_RID,
      mediaSetViewRid: MEDIA_SET_VIEW_RID,
    },
  },
};

describe("createMediaFromReference", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns a Media object with getMediaReference", () => {
    const media = createMediaFromReference(mockClient, mockMediaReference);
    expect(media.getMediaReference()).toBe(mockMediaReference);
  });

  describe("transformAndWait", () => {
    it("returns result when transformation succeeds immediately", async () => {
      const media = createMediaFromReference(mockClient, mockMediaReference);

      mockedTransform.mockResolvedValue({
        jobId: "job-1",
        status: "SUCCESSFUL",
      });

      const mockResponse = new Response("transformed-data");
      mockedGetResult.mockResolvedValue(mockResponse);

      const result = await media.transformAndWait(IMAGE_TRANSFORMATION);

      expect(result).toBe(mockResponse);
      expect(mockedTransform).toHaveBeenCalledOnce();
      expect(mockedGetStatus).not.toHaveBeenCalled();
      expect(mockedGetResult).toHaveBeenCalledOnce();
    });

    it("polls and returns result when transformation is initially pending", async () => {
      const media = createMediaFromReference(mockClient, mockMediaReference);

      mockedTransform.mockResolvedValue({
        jobId: "job-2",
        status: "PENDING",
      });

      mockedGetStatus.mockResolvedValueOnce({
        jobId: "job-2",
        status: "PENDING",
      }).mockResolvedValueOnce({
        jobId: "job-2",
        status: "SUCCESSFUL",
      });

      const mockResponse = new Response("transformed-data");
      mockedGetResult.mockResolvedValue(mockResponse);

      const result = await media.transformAndWait(
        IMAGE_TRANSFORMATION,
        { pollIntervalMs: 10, pollTimeoutMs: 5000 },
      );

      expect(result).toBe(mockResponse);
      expect(mockedGetStatus).toHaveBeenCalledTimes(2);
    });

    it("throws MediaTransformationFailedError when job fails during polling", async () => {
      const media = createMediaFromReference(mockClient, mockMediaReference);

      mockedTransform.mockResolvedValue({
        jobId: "job-3",
        status: "PENDING",
      });

      mockedGetStatus.mockResolvedValueOnce({
        jobId: "job-3",
        status: "FAILED",
      });

      await expect(
        media.transformAndWait(
          IMAGE_TRANSFORMATION,
          { pollIntervalMs: 10, pollTimeoutMs: 5000 },
        ),
      ).rejects.toThrow(MediaTransformationFailedError);
    });

    it("throws MediaTransformationTimeoutError when polling exceeds timeout", async () => {
      const media = createMediaFromReference(mockClient, mockMediaReference);

      mockedTransform.mockResolvedValue({
        jobId: "job-4",
        status: "PENDING",
      });

      mockedGetStatus.mockResolvedValue({
        jobId: "job-4",
        status: "PENDING",
      });

      await expect(
        media.transformAndWait(
          IMAGE_TRANSFORMATION,
          { pollIntervalMs: 10, pollTimeoutMs: 50 },
        ),
      ).rejects.toThrow(MediaTransformationTimeoutError);
    });

    it("passes token in header params when present", async () => {
      const mediaRefWithToken: MediaReference = {
        ...mockMediaReference,
        reference: {
          type: "mediaSetViewItem",
          mediaSetViewItem: {
            ...mockMediaReference.reference.mediaSetViewItem,
            token: "test-token",
          },
        },
      };
      const media = createMediaFromReference(mockClient, mediaRefWithToken);

      mockedTransform.mockResolvedValue({
        jobId: "job-5",
        status: "SUCCESSFUL",
      });
      mockedGetResult.mockResolvedValue(new Response("result"));

      await media.transformAndWait(IMAGE_TRANSFORMATION);

      expect(mockedTransform).toHaveBeenCalledWith(
        mockClient,
        MEDIA_SET_RID,
        MEDIA_ITEM_RID,
        { transformation: IMAGE_TRANSFORMATION },
        { preview: true },
        { Token: "test-token" },
      );

      expect(mockedGetResult).toHaveBeenCalledWith(
        mockClient,
        MEDIA_SET_RID,
        MEDIA_ITEM_RID,
        "job-5",
        { preview: true },
        { Token: "test-token" },
      );
    });
  });
});
