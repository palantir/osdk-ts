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

import type { Attachment, AttachmentMetadata } from "@osdk/api";
import invariant from "tiny-invariant";

export function createMockAttachment(
  rid: string,
  blob?: Blob,
  metadata?: AttachmentMetadata,
): Attachment {
  return {
    rid,
    fetchContents() {
      invariant(
        blob != null,
        `fetchContents was called on mock attachment "${rid}" but no blob was provided. `
          + `Pass a Blob as the second argument to createMockAttachment to stub fetchContents.`,
      );
      return Promise.resolve(new Response(blob));
    },
    fetchMetadata() {
      invariant(
        metadata != null,
        `fetchMetadata was called on mock attachment "${rid}" but no metadata was provided. `
          + `Pass AttachmentMetadata as the third argument to createMockAttachment to stub fetchMetadata.`,
      );
      return Promise.resolve(metadata);
    },
  };
}
