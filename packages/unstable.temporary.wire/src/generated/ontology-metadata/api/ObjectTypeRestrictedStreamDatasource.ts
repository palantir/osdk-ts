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

import type { ColumnName } from "./ColumnName.js";
import type { PolicyVersion } from "./PolicyVersion.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { RestrictedViewRid } from "./RestrictedViewRid.js";
import type { RetentionPolicy } from "./RetentionPolicy.js";
import type { StreamLocator } from "./StreamLocator.js";

/**
 * Object type datasource representing a restricted view on top of a stream.
 */
export interface ObjectTypeRestrictedStreamDatasource {
  restrictedViewRid: RestrictedViewRid;
  policyVersion: PolicyVersion;
  streamLocator: StreamLocator;
  propertyMapping: Record<PropertyTypeRid, ColumnName>;
  retentionPolicy: RetentionPolicy;
}
