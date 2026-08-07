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

import type { Media } from "@osdk/api";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import { DocumentViewer } from "../DocumentViewer.js";

function createMedia(mimeType: string): Media {
  return {
    fetchContents: () => Promise.resolve(new Response("")),
    fetchMetadata: () =>
      Promise.resolve({
        path: "data.bin",
        sizeBytes: 0,
        mediaType: mimeType,
      }),
    getMediaReference: () => ({
      mimeType,
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.test",
          mediaSetRid: "ri.mio.main.media-set.test",
          mediaSetViewRid: "ri.mio.main.media-set-view.test",
        },
      },
    }),
  };
}

// The unsupported-type branch is the only one that renders a DocumentViewer-owned
// string without delegating to a sibling viewer, so it is what the label wiring
// can be asserted against.
const unsupportedMedia = createMedia("application/octet-stream");

describe("DocumentViewer", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the default unsupported-file-type message", () => {
    render(<DocumentViewer media={unsupportedMedia} />);

    expect(
      screen.getByText("Unsupported file type: application/octet-stream"),
    ).toBeTruthy();
  });

  it("applies the labels prop", () => {
    render(
      <DocumentViewer
        media={unsupportedMedia}
        labels={{
          unsupportedFileType: (mimeType) => `We cannot preview ${mimeType}`,
        }}
      />,
    );

    expect(
      screen.getByText("We cannot preview application/octet-stream"),
    ).toBeTruthy();
  });
});
