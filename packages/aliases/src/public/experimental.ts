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

import { custom, DEFAULT_RESOURCES_PATH } from "../browser.js";

export const Aliases: {
  readonly custom: typeof custom;
  readonly DEFAULT_RESOURCES_PATH: typeof DEFAULT_RESOURCES_PATH;
} = {
  custom,
  DEFAULT_RESOURCES_PATH,
};

export { DEFAULT_RESOURCES_PATH };
export type { Custom } from "../browser.js";
