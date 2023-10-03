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

import type { Coordinate } from "./Coordinate";

/**
 * GeoJSon fundamental geometry construct.
 *
 * A position is an array of numbers. There MUST be two or more elements.
 * The first two elements are longitude and latitude, precisely in that order and using decimal numbers.
 * Altitude or elevation MAY be included as an optional third element.
 *
 * Implementations SHOULD NOT extend positions beyond three elements
 * because the semantics of extra elements are unspecified and ambiguous.
 * Historically, some implementations have used a fourth element to carry
 * a linear referencing measure (sometimes denoted as "M") or a numerical
 * timestamp, but in most situations a parser will not be able to properly
 * interpret these values. The interpretation and meaning of additional
 * elements is beyond the scope of this specification, and additional
 * elements MAY be ignored by parsers.
 */
export type Position = Array<Coordinate>;
