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

import type { MediaItemMetadata, UnknownMediaItemMetadata } from "@osdk/api";
import type { MediaItemMetadata as PlatformMediaItemMetadata } from "@osdk/foundry.mediasets";
import type { IsEqual, Simplify } from "type-fest";

import { getMediaSizeBytesLong } from "./getMediaSizeBytesLong.js";

type AssertPlatformParity<T extends true> = T;
// older platform bindings omit the long field; newer bindings must match it exactly
type WithSizeBytesLong<T> = T extends unknown
  ? "sizeBytesLong" extends keyof T
    ? T
    : T & { sizeBytesLong: string }
  : never;
type MediaSizeFields<
  T extends { type: string; sizeBytes: number; sizeBytesLong?: unknown },
> = T extends unknown ? Pick<T, "type" | "sizeBytes" | "sizeBytesLong"> : never;
type _MediaItemSizeFieldsMatchPlatform = AssertPlatformParity<
  IsEqual<
    Simplify<MediaSizeFields<MediaItemMetadata>>,
    Simplify<
      MediaSizeFields<
        WithSizeBytesLong<
          Extract<
            PlatformMediaItemMetadata,
            { type: MediaItemMetadata["type"] }
          >
        >
      >
    >
  >
>;

/**
 * Compile-time enforcement: every member of `MediaItemMetadata["type"]` must appear as a key.
 * Adding a variant to the `MediaItemMetadata` union without updating this record fails to
 * compile, keeping the runtime allowlist below from silently drifting out of sync with the
 * type.
 */
const _knownVariantKeys: Record<MediaItemMetadata["type"], true> = {
  document: true,
  imagery: true,
  audio: true,
  video: true,
  dicom: true,
  email: true,
  model3d: true,
  spreadsheet: true,
  untyped: true,
};

const KNOWN_VARIANTS: ReadonlySet<string> = new Set(
  Object.keys(_knownVariantKeys),
);

/**
 * Runtime guard around the platform `MediaSets.metadata` response. The platform may evolve
 * the `MediaItemMetadata` discriminated union faster than a pinned `@osdk/foundry.mediasets`
 * can track; without this check, an unknown `type` string would slip through the type cast
 * and silently break downstream `switch (itemMetadata.type)` narrowing in caller code.
 *
 * known variants preserve the response's sizeBytes and expose its exact sizeBytesLong
 * older responses derive the string from sizeBytes, preserving any legacy rounding or cap
 *
 * Unknown variants are wrapped as
 * `UnknownMediaItemMetadata` with the raw wire payload preserved on `raw`, so callers can
 * handle the forward-compat case explicitly instead of relying on a runtime throw.
 */
export function validateMediaItemMetadata(raw: {
  type: string;
  sizeBytes?: unknown;
  sizeBytesLong?: unknown;
}): MediaItemMetadata | UnknownMediaItemMetadata {
  if (KNOWN_VARIANTS.has(raw.type)) {
    const sizeBytesLong = getMediaSizeBytesLong(raw);
    return (
      raw.sizeBytesLong === sizeBytesLong ? raw : { ...raw, sizeBytesLong }
    ) as MediaItemMetadata;
  }
  return {
    type: "unknown",
    raw: raw as { type: string; [key: string]: unknown },
  };
}
