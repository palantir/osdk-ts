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

import type { Attachment, Media } from "@osdk/api";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createClient } from "../../../createClient.js";
import { Store } from "../Store.js";
import type { MediaHelper } from "./MediaHelper.js";

const contentSources = ["attachment", "media"] as const;

describe("Media content cache", () => {
  let helper: MediaHelper;

  beforeEach(() => {
    vi.useFakeTimers({
      toFake: [
        "setTimeout",
        "clearTimeout",
        "setInterval",
        "clearInterval",
        "Date",
      ],
    });
    helper = new Store(
      createClient(
        "https://stack.palantir.com/",
        "ri.ontology.main.ontology.test",
        () => Promise.resolve("token"),
      ),
    ).media;
  });

  afterEach(() => {
    helper.dispose();
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  function createSource(kind: (typeof contentSources)[number]) {
    let requests = 0;
    const fetchContents = () => {
      requests++;
      return Promise.resolve(
        new Response("cached-content", {
          headers: { "content-type": "text/plain" },
        }),
      );
    };
    const source: Attachment | Media =
      kind === "attachment"
        ? {
            rid: "ri.attachment.main.attachment.test",
            fetchContents,
            fetchMetadata: () =>
              Promise.resolve({
                rid: "ri.attachment.main.attachment.test",
                filename: "test.txt",
                sizeBytes: 14,
                mediaType: "text/plain",
              }),
          }
        : {
            fetchContents,
            fetchMetadata: () =>
              Promise.resolve({
                path: "test.txt",
                sizeBytes: 14,
                mediaType: "text/plain",
              }),
            getMediaReference: () => ({
              mimeType: "text/plain",
              reference: {
                type: "mediaSetViewItem",
                mediaSetViewItem: {
                  mediaSetRid: "ri.media.main.media-set.test",
                  mediaSetViewRid: "ri.media.main.view.test",
                  mediaItemRid: "ri.media.main.item.test",
                },
              },
            }),
          };
    return {
      source,
      get requests() {
        return requests;
      },
    };
  }

  it.each(contentSources)(
    "reuses default cached %s content and its blob URL",
    async (kind) => {
      const fixture = createSource(kind);
      const first = await helper.fetchContent(fixture.source);
      expect(await first.text()).toBe("cached-content");
      expect(first.type).toBe("text/plain");
      expect(helper.getCachedContent(fixture.source)).toBe(first);
      expect(await helper.fetchContent(fixture.source)).toBe(first);
      expect(fixture.requests).toBe(1);

      const firstUrl = helper.createBlobUrl(fixture.source);
      expect(firstUrl).toMatch(/^blob:/u);
      expect(await (await fetch(firstUrl!)).text()).toBe("cached-content");
      const secondUrl = helper.createBlobUrl(fixture.source);
      expect(secondUrl).toBe(firstUrl);
      const revoke = vi.spyOn(URL, "revokeObjectURL");
      helper.releaseBlobUrl(fixture.source);
      expect(revoke).not.toHaveBeenCalled();
      helper.releaseBlobUrl(fixture.source);
      await vi.advanceTimersByTimeAsync(70_000);
      expect(revoke).toHaveBeenCalledExactlyOnceWith(firstUrl);
      expect(helper.getCachedContent(fixture.source)).toBeUndefined();
    },
  );

  it.each(contentSources)(
    "reuses explicit non-preview %s content and revokes its URL when cleared",
    async (kind) => {
      const fixture = createSource(kind);
      const first = await helper.fetchContent(fixture.source, {
        preview: false,
      });
      expect(await first.text()).toBe("cached-content");
      expect(helper.getCachedContent(fixture.source, { preview: false })).toBe(
        first,
      );
      expect(
        await helper.fetchContent(fixture.source, { preview: false }),
      ).toBe(first);
      expect(fixture.requests).toBe(1);
      const url = helper.createBlobUrl(fixture.source, { preview: false });
      expect(url).toMatch(/^blob:/u);
      const revoke = vi.spyOn(URL, "revokeObjectURL");
      helper.clearCache(fixture.source);
      expect(revoke).toHaveBeenCalledExactlyOnceWith(url);
      expect(
        helper.getCachedContent(fixture.source, { preview: false }),
      ).toBeUndefined();
      expect(
        helper.createBlobUrl(fixture.source, { preview: false }),
      ).toBeUndefined();
    },
  );
});
