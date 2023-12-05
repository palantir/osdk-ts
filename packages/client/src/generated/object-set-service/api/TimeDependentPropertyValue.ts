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

import type { QualifiedSeriesIdPropertyValue } from "./QualifiedSeriesIdPropertyValue.js";
import type { SeriesIdPropertyValue } from "./SeriesIdPropertyValue.js";
import type { TemplateRidPropertyValue } from "./TemplateRidPropertyValue.js";
export interface TimeDependentPropertyValue_seriesId {
  type: "seriesId";
  seriesId: SeriesIdPropertyValue;
}

export interface TimeDependentPropertyValue_templateRid {
  type: "templateRid";
  templateRid: TemplateRidPropertyValue;
}

export interface TimeDependentPropertyValue_qualifiedSeriesId {
  type: "qualifiedSeriesId";
  qualifiedSeriesId: QualifiedSeriesIdPropertyValue;
}

export type TimeDependentPropertyValue =
  | TimeDependentPropertyValue_seriesId
  | TimeDependentPropertyValue_templateRid
  | TimeDependentPropertyValue_qualifiedSeriesId;
