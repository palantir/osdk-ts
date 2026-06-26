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

import React, { Suspense } from "react";
import type { CbacBannerProps } from "../../cbac-picker/CbacBanner.js";

// Rendered when the CbacBanner chunk can't be loaded. CbacBanner pulls in
// `@osdk/react/platform-apis`, whose admin hooks depend on the optional
// `@osdk/foundry.admin` peer; if that chunk fails to load (peer not installed,
// or a transient network error), fall back to the raw marking ids rather than
// hiding the markings entirely or letting the failure take down the table.
function CbacBannerUnavailable(
  { markingIds, className }: CbacBannerProps,
): React.ReactElement {
  return <span className={className}>{markingIds.join(", ")}</span>;
}

// Lazily import CbacBanner so ObjectTable consumers don't pull the CBAC picker
// (and the optional `@osdk/foundry.admin` peer it reaches) into their main
// bundle unless a CBAC/MANDATORY marking column actually renders. The `.catch`
// keeps a chunk-load failure from crashing the table.
const CbacBannerLazy = React.lazy<React.ComponentType<CbacBannerProps>>(() =>
  import("../../cbac-picker/CbacBanner.js")
    .then((m) => ({ default: m.CbacBanner }))
    .catch((error: unknown) => {
      // eslint-disable-next-line no-console
      console.warn(
        "[@osdk/react-components] Failed to load the CBAC banner. Install the "
          + "optional `@osdk/foundry.admin` peer dependency to render CBAC "
          + "marking columns.",
        error,
      );
      return { default: CbacBannerUnavailable };
    })
);

/**
 * Suspense-wrapped, lazily-loaded {@link CbacBanner}. Same props as
 * `CbacBanner`; renders nothing while the chunk loads, and falls back to the
 * raw marking ids if the chunk fails to load.
 */
export function LazyCbacBanner(props: CbacBannerProps): React.ReactElement {
  return (
    <Suspense fallback={null}>
      <CbacBannerLazy {...props} />
    </Suspense>
  );
}
