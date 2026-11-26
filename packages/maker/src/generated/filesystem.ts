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

// Generated from OmniAPI IR; do not edit.

import { z } from "zod/v4";

import * as core from "./core.js";

export type FilesystemProjectLocator = core.CoreResourceLocator;

export const FilesystemProjectLocatorSchema: z.ZodType<FilesystemProjectLocator> =
  z.lazy(() => core.CoreResourceLocatorSchema);
