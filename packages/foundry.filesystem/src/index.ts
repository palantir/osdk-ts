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

export type {
  Folder,
  FolderRid,
  Project,
  ProjectRid,
  Resource,
  ResourceDisplayName,
  ResourcePath,
  ResourceRid,
  ResourceType,
  Space,
  SpaceRid,
  TrashedStatus,
} from "./_components.js";
export type { ResourceNotFound } from "./_errors.js";
export * as Resources from "./public/Resource.js";
