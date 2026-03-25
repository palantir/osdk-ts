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

export type IntervalRule =
  | {
    /** Matches intervals containing the given terms. */
    $match: string;
    /**
     * Max gaps between matched terms. E.g. "quick" and "fox" in
     * "quick brown fox" have a gap of 1. If unset, gaps are not considered.
     */
    $maxGaps?: number;
    /** If true, matched terms must occur in order. */
    $ordered: boolean;
    $prefixOnLastTerm?: never;
    $and?: never;
    $or?: never;
    $fuzzy?: never;
    $fuzziness?: never;
  }
  | {
    /**
     * Matches a sequence of terms where all terms but the last must match
     * exactly, and the last is matched as a prefix. Ordering of terms is preserved.
     */
    $match: string;
    $prefixOnLastTerm: true;
    $maxGaps?: never;
    $ordered?: never;
    $and?: never;
    $or?: never;
    $fuzzy?: never;
    $fuzziness?: never;
  }
  | {
    /** Matches intervals satisfying all sub-rules. */
    $and: IntervalRule[];
    /**
     * Max gaps between intervals produced by sub-rules.
     * If unset, gaps are not considered.
     */
    $maxGaps?: number;
    /** If true, matched intervals must occur in order. */
    $ordered: boolean;
    $match?: never;
    $prefixOnLastTerm?: never;
    $or?: never;
    $fuzzy?: never;
    $fuzziness?: never;
  }
  | {
    /** Matches intervals satisfying any of the sub-rules. */
    $or: IntervalRule[];
    $match?: never;
    $prefixOnLastTerm?: never;
    $and?: never;
    $fuzzy?: never;
    $fuzziness?: never;
    $maxGaps?: never;
    $ordered?: never;
  }
  | {
    /** Matches a term within an edit distance defined by `$fuzziness`. */
    $fuzzy: string;
    /**
     * Max edit distance for matching (0, 1, or 2). An edit is a character
     * insertion, deletion, substitution, or transposition of two adjacent
     * characters. If unset, defaults to 2.
     */
    $fuzziness?: number;
    $match?: never;
    $prefixOnLastTerm?: never;
    $and?: never;
    $or?: never;
    $maxGaps?: never;
    $ordered?: never;
  };
