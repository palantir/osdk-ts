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

import type { RequestHandler } from "msw";
import type { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
import { createActionHandlers } from "./createActionHandlers.js";
import { createAdminHandlers } from "./createAdminHandlers.js";
import { createAttachmentHandlers } from "./createAttachmentHandlers.js";
import { createLoadObjectsHandlers } from "./createLoadObjectsHandlers.js";
import { createMediaRefHandlers } from "./createMediaRefHandlers.js";
import { createMultipassServerHandlers } from "./createMultipassServerHandlers.js";
import { createObjectSetHandlers } from "./createObjectSetHandlers.js";
import { createOntologyHandlers } from "./createOntologyHandlers.js";
import { createQueryHandlers } from "./createQueryHandlers.js";
import { createTimeseriesAndGeotimeHandlers } from "./createTimeseriesAndGeotimeHandlers.js";

export type FauxFoundryHandlersFactory = (
  baseUrl: string,
  fauxFoundry: FauxFoundry,
) => Array<RequestHandler>;

export function createFauxFoundryHandlers(
  baseUrl: string,
  fauxFoundry: FauxFoundry,
): Array<RequestHandler> {
  return [
    createMultipassServerHandlers,
    createActionHandlers,
    createObjectSetHandlers,
    createOntologyHandlers,
    createQueryHandlers,
    createLoadObjectsHandlers,
    createTimeseriesAndGeotimeHandlers,
    createAttachmentHandlers,
    createMediaRefHandlers,
    createAdminHandlers,
  ].flatMap(x => x(baseUrl, fauxFoundry));
}
