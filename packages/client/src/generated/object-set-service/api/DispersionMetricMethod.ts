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

/**
 * Method to be used to provide final value for standard deviation or variance.
 * Use POPULATION when you have the entire set of data to work with OR
 * Use SAMPLE when you have an incomplete set of data (with at least 2 values) to work with.
 * An in depth explanation here: https://en.wikipedia.org/wiki/Bessel%27s_correction
 */
export type DispersionMetricMethod = "POPULATION" | "SAMPLE";
