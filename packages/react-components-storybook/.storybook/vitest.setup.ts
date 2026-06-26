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

import { setProjectAnnotations } from "@storybook/react-vite";
import { configure } from "storybook/test";
import { beforeAll } from "vitest";

import * as previewAnnotations from "./preview.js";

// Interaction tests drive real (MSW-mocked) async round-trips — an action
// apply, for example, legitimately takes ~1s end to end. testing-library's
// 1000ms default for `waitFor`/`findBy` is too tight once the whole story
// suite contends for the browser, so raise the async timeout suite-wide
// instead of sprinkling per-assertion timeouts.
configure({ asyncUtilTimeout: 5000 });

// Apply the same global preview config (MSW loaders, OsdkProvider decorator,
// brand-theme decorator, parameters) to every story when run under Vitest.
const project = setProjectAnnotations([previewAnnotations]);

// Runs Storybook's (and addon-vitest's) registered beforeAll hooks once.
beforeAll(project.beforeAll);
