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

import type { ObjectTypeRid } from "../api/ObjectTypeRid.js";
import type { LoggableObjectPrimaryKeyV2 } from "./LoggableObjectPrimaryKeyV2.js";

/**
 * Information necessary to uniquely identify an object.
 */
export interface LoggableObjectLocatorV2 {
  objectTypeRid: ObjectTypeRid;
  objectPrimaryKey: LoggableObjectPrimaryKeyV2;
}
