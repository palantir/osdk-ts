/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type {
  EXPERIMENTAL_BulkLinkResult,
} from "../objectSet/BulkLinkResult.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { Osdk } from "../OsdkObjectFrom.js";
import type { Experiment } from "./Experiment.js";

type getBulkLinksFn = <T extends ObjectOrInterfaceDefinition>(
  objs: Osdk.Instance<T>[],
  links: string[],
) => AsyncGenerator<EXPERIMENTAL_BulkLinkResult, void, undefined>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks: Experiment<
  "2.0.8",
  "__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks",
  { getBulkLinks: getBulkLinksFn }
> = {
  name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks",
  type: "experiment",
  version: "2.0.8",
};
