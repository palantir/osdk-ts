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

import type { MediaSetViewLocator } from "../MediaSetViewLocator.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";

/**
 * Object type datasource that is backed by a media set view. This datasource differs from
 * ObjectTypeMediaDatasource in that fully controls access to the media items it provides. If a user
 * has access to a property backed by this datasource, they will be able to see the media item it references.
 */
export interface ObjectTypeMediaSetViewDatasourceModification {
  mediaSetViewLocator: MediaSetViewLocator;
  properties: Array<PropertyTypeId>;
}
