/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

export type MarkingSelectionState =
  | "SELECTED"
  | "IMPLIED"
  | "DISALLOWED"
  | "IMPLIED_DISALLOWED";

export interface CbacBannerData {
  classificationString: string;
  textColor: string;
  backgroundColors: string[];
  markingIds: string[];
}

export interface PickerMarkingCategory {
  id: string;
  name: string;
  description: string;
  categoryType: "CONJUNCTIVE" | "DISJUNCTIVE";
  markingType: "MANDATORY" | "CBAC";
}

export interface PickerMarking {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
}

export interface CategoryMarkingGroup {
  category: PickerMarkingCategory;
  markings: PickerMarking[];
}

export interface RequiredMarkingGroup {
  markingNames: string[];
}
