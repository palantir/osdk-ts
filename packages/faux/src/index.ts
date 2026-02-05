/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

export * as TypeHelpers from "./FauxFoundry/typeHelpers/index.js";

export { isBaseApiError } from "./BaseError.js";
export type { BaseAPIError } from "./BaseError.js";
export * as Errors from "./errors.js";
export type { BaseServerObject } from "./FauxFoundry/BaseServerObject.js";
export type { FauxActionImpl } from "./FauxFoundry/FauxActionImpl.js";
export { FauxAdmin } from "./FauxFoundry/FauxAdmin.js";
export { FauxDataStore } from "./FauxFoundry/FauxDataStore.js";
export type { FauxDataStoreBatch } from "./FauxFoundry/FauxDataStoreBatch.js";
export { FauxFoundry } from "./FauxFoundry/FauxFoundry.js";
export { FauxOntology } from "./FauxFoundry/FauxOntology.js";
export { authHandlerMiddleware } from "./handlers/authHandlerMiddleware.js";
export { OpenApiCallError } from "./handlers/util/handleOpenApiCall.js";
export { OntologiesV2 as MockOntologiesV2 } from "./mock/index.js";
export { withoutRid } from "./withoutRid.js";

export * as msw from "msw";
