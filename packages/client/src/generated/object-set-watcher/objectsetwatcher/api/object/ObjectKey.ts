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

import type { PropertyRid } from "./PropertyRid.js";
import type { PropertyValue } from "./PropertyValue.js";

/**
 * The primary key of an object. Must contain the value for all the properties that comprise the primary key
 * for an object type. Must not contain the value for any other property.
 */
export type ObjectKey = Record<PropertyRid, PropertyValue>;
