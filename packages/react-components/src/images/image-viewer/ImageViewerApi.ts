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

export interface BaseImageViewerProps {
  /** Object URL or data URL pointing to the image */
  src: string;
  /** Alt text for accessibility
   * @default "" */
  alt?: string;
  /** Additional CSS class name for the root element
   * @default undefined */
  className?: string;
  /** Callback when the image fails to load
   * @default undefined */
  onError?: () => void;
}

export interface ImageViewerMediaProps extends Omit<
  BaseImageViewerProps,
  "src"
> {
  /** The Media object to fetch image contents from */
  media: Media;
}
