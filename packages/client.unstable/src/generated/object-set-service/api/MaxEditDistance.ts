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
 * The maximum distance between words to consider them to be a match.
 *
 * The distance is measured as the minimum number of operations required to change one word into another. Operations consist of insertions,
 * deletions or substitutions of a single character, or transposition of two adjacent characters. (Damerau–Levenshtein distance)
 *
 * The AUTO strategy determines the max edit distance based on the length of the term:
 * - terms of length {0, 1, 2} must match exactly,
 * - terms of length {3, 4, 5} have one edit allowed,
 * - terms longer than 5 have two edits allowed.
 *
 * AUTO should generally be the preferred value for the edit distance.
 */
export type MaxEditDistance =
  | "AUTO"
  | "LEVENSHTEIN_ZERO"
  | "LEVENSHTEIN_ONE"
  | "LEVENSHTEIN_TWO";
