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

import type { GothamIntrinsicEndDate } from "./GothamIntrinsicEndDate.js";
import type { GothamIntrinsicLatLong } from "./GothamIntrinsicLatLong.js";
import type { GothamIntrinsicMgrs } from "./GothamIntrinsicMgrs.js";
import type { GothamIntrinsicStartDate } from "./GothamIntrinsicStartDate.js";
export interface GothamIntrinsic_startDate {
  type: "startDate";
  startDate: GothamIntrinsicStartDate;
}

export interface GothamIntrinsic_endDate {
  type: "endDate";
  endDate: GothamIntrinsicEndDate;
}

export interface GothamIntrinsic_latLong {
  type: "latLong";
  latLong: GothamIntrinsicLatLong;
}

export interface GothamIntrinsic_mgrs {
  type: "mgrs";
  mgrs: GothamIntrinsicMgrs;
}
export type GothamIntrinsic =
  | GothamIntrinsic_startDate
  | GothamIntrinsic_endDate
  | GothamIntrinsic_latLong
  | GothamIntrinsic_mgrs;
