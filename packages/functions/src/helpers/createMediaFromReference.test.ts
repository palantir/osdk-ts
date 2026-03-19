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
import { describe, expect, it } from "vitest";
import { createMediaFromReference } from "./createMediaFromReference.js";

const mockClient = {} as Client;

const mockMediaReference: MediaReference = {
  mimeType: "image/png",
  reference: {
    type: "mediaSetViewItem",
    mediaSetViewItem: {
      mediaItemRid: "ri.mio.main.media-item.test-item",
      mediaSetRid: "ri.mio.main.media-set.test-set",
      mediaSetViewRid: "ri.mio.main.view.test-view",
    },
  },
};

describe("createMediaFromReference", () => {
  it("returns a Media object with getMediaReference", () => {
    const media = createMediaFromReference(mockClient, mockMediaReference);
    expect(media.getMediaReference()).toBe(mockMediaReference);
  });
});
