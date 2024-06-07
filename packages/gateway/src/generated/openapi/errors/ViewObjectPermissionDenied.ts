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

import type { ObjectTypeApiName } from "../components/ObjectTypeApiName.js";

/**
 * The provided token does not have permission to view any data sources backing this object type. Ensure the object
 * type has backing data sources configured and visible.
 */
export interface ViewObjectPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ViewObjectPermissionDenied";
  errorInstanceId: string;
  parameters: {
    objectType: ObjectTypeApiName;
  };
}
