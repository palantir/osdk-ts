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

import type { DirectSourceRid } from "./DirectSourceRid.js";
import type { PropertySecurityGroups } from "./PropertySecurityGroups.js";
import type { PropertyTypeMappingInfo } from "./PropertyTypeMappingInfo.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";

/**
 * Object type datasource which is backed by a "direct write" source, such as an edge pipeline. This type
 * of a datasource uses PropertySecurityGroups to allow grouping its properties into different security levels.
 * This type is only compatible with object storage v2.
 */
export interface ObjectTypeDirectDatasource {
  directSourceRid: DirectSourceRid;
  propertyMapping: Record<PropertyTypeRid, PropertyTypeMappingInfo>;
  propertySecurityGroups: PropertySecurityGroups;
}
