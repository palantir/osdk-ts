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

import type { MediaReference } from "../object/Media.js";
import type { PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { ObjectTypeDefinition } from "../ontology/ObjectTypeDefinition.js";
import type { Experiment } from "./Experiment.js";

/**
 * @experimental This feature is experimental and might change in the future.
 *
 * Uploads a media item to the media property of the specified object type.
 *
 * @param data - Data to upload as media item
 * @param fileName - Name that will be assigned as path to the uploaded media item.
 * @param objectType - Object type to which the media item will be uploaded.
 * @param propertyType - The media reference property of the corresponding object type to which the media item will be uploaded.
 *
 * @returns media reference of the uploaded media item.
 */
type createMediaReference = <
  Q extends ObjectTypeDefinition,
  const L extends PropertyKeys<Q>,
>(
  data: Blob,
  fileName: string,
  objectType: Q,
  propertyType: L,
) => Promise<MediaReference>;

export const __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference:
  Experiment<
    "2.1.0",
    "__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference",
    { createMediaReference: createMediaReference }
  > = {
    name: "__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference",
    type: "experiment",
    version: "2.1.0",
  };
