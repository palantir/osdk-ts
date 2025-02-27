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

import type { OntologyIrQualifiedSeriesIdPropertyValue } from "../OntologyIrQualifiedSeriesIdPropertyValue.js";
import type { SeriesIdPropertyValue } from "../SeriesIdPropertyValue.js";
import type { TemplateRidPropertyValue } from "../TemplateRidPropertyValue.js";
export interface OntologyIrTimeDependentPropertyValue_seriesId {
  type: "seriesId";
  seriesId: SeriesIdPropertyValue;
}

export interface OntologyIrTimeDependentPropertyValue_templateRid {
  type: "templateRid";
  templateRid: TemplateRidPropertyValue;
}

export interface OntologyIrTimeDependentPropertyValue_qualifiedSeriesId {
  type: "qualifiedSeriesId";
  qualifiedSeriesId: OntologyIrQualifiedSeriesIdPropertyValue;
}
/**
 * Identifies a time series in codex.
 * The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
 * property value (and therefore we need to specify which one to qualify with).
 */
export type OntologyIrTimeDependentPropertyValue =
  | OntologyIrTimeDependentPropertyValue_seriesId
  | OntologyIrTimeDependentPropertyValue_templateRid
  | OntologyIrTimeDependentPropertyValue_qualifiedSeriesId;
