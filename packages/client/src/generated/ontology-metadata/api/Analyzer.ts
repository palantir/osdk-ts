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

import type { LanguageAnalyzer } from "./LanguageAnalyzer.js";
import type { NotAnalyzedAnalyzer } from "./NotAnalyzedAnalyzer.js";
import type { SimpleAnalyzer } from "./SimpleAnalyzer.js";
import type { StandardAnalyzer } from "./StandardAnalyzer.js";
import type { WhitespaceAnalyzer } from "./WhitespaceAnalyzer.js";
export interface Analyzer_notAnalyzed {
  type: "notAnalyzed";
  notAnalyzed: NotAnalyzedAnalyzer;
}

export interface Analyzer_simpleAnalyzer {
  type: "simpleAnalyzer";
  simpleAnalyzer: SimpleAnalyzer;
}

export interface Analyzer_standardAnalyzer {
  type: "standardAnalyzer";
  standardAnalyzer: StandardAnalyzer;
}

export interface Analyzer_whitespaceAnalyzer {
  type: "whitespaceAnalyzer";
  whitespaceAnalyzer: WhitespaceAnalyzer;
}

export interface Analyzer_languageAnalyzer {
  type: "languageAnalyzer";
  languageAnalyzer: LanguageAnalyzer;
}
/**
 * Union wrapping the various analyzer configurations available for StringPropertyType(s).
 * The analyzer determines how the PropertyType is indexed and made available for searches.
 */
export type Analyzer =
  | Analyzer_notAnalyzed
  | Analyzer_simpleAnalyzer
  | Analyzer_standardAnalyzer
  | Analyzer_whitespaceAnalyzer
  | Analyzer_languageAnalyzer;
