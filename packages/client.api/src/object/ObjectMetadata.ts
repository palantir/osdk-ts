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

type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

type BlueprintIcon = {
  type: "blueprint";
  color: string;
  name: string;
};

type Icon = BlueprintIcon;

export type ObjectMetadata = {
  description?: string;
  displayName: string;
  icon?: Icon;
  pluralDisplayName: string;
  rid: string;
  visibility?: ObjectTypeVisibility;
  // TODO: Add Links, Interfaces, and Properties
};
