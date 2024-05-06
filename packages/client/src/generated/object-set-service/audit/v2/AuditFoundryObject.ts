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

import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { LoggableObjectPrimaryKeyV2 } from "../../loggable/LoggableObjectPrimaryKeyV2.js";
import type { LoggablePropertyValue } from "../../loggable/LoggablePropertyValue.js";

/**
 * Property values other than primary key values are not included in the audit version of a FoundryObject to
 * avoid dropping audit logs due to them being too large.
 */
export interface AuditFoundryObject {
  primaryKey: LoggableObjectPrimaryKeyV2;
  additionalObjectProperties:
    | Record<PropertyTypeRid, LoggablePropertyValue>
    | undefined;
}
