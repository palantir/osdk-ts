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

import type { Media } from "@osdk/api";

export interface BaseTiffViewerProps {
  /** TIFF bytes to render. */
  // TODO: make this required when `content` is removed.
  src?: Uint8Array;
  /** @deprecated Rename to `src`. */
  content?: Uint8Array;
  /** Additional CSS class name for the root element
   * @default undefined */
  className?: string;
  /** Callback fired when rendering fails */
  onError?: () => void;
}

export interface TiffViewerProps extends Omit<
  BaseTiffViewerProps,
  "src" | "content"
> {
  /** The Media object to fetch TIFF contents from */
  media: Media;
}
