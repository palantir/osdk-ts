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

import type { PhraseMatchMode } from "./PhraseMatchMode.js";
import type { PropertySet } from "./PropertySet.js";

/**
 * This filter analyzes the query string.
 * The output of the analysis of a string are called tokens, for example the string "The Quick Brown Fox"
 * produces the tokens "the", "quick", "brown", "fox" using the default analyzer.
 *
 * An object matches a PhraseFilter iff tokens from specified phrase match tokens for the specified property set
 * according to the PhraseMatchMode specified.
 *
 * For example, a query with phrase "The Quick Brown Fox" and PhraseMatchMode.PHRASE for a property with the
 * default analyzer will match `"the" followed by "quick" followed by "brown" followed by "fox"`.
 * So this would match "The quick brown fox is climbing the tree",
 * but not "The Quick brown foxy bear" (does not include term "fox"),
 * nor "the brown rabbit met the quick fox near the river" (not the expected order of tokens),
 * nor "the quick smart and fast brown fox" (more terms than expected in-between prior terms).
 *
 * With PhraseMatchMode.PHRASE_PREFIX and phrase "The Quick Brown F" for a property with the default analyzer,
 * the query would match `"the" followed by "quick" followed by "brown" followed by "f*"`.
 * However, note that "f*" has a behavior different than the wildcard filter:
 *
 * - Against Phonograph, this will result in a `match_phrase_prefix` Elasticsearch query, which means that
 * "f*" matches only the first 50 tokens, in alphabetical order, that begin with "f" amongst all tokens for
 * all values for the specified properties.
 * - Against Highbury, this will use a lucene `SpanNearQuery`, which has the same behavior.
 *
 * So this filter could not match an object with "I saw the quick brown fox climbing the tree" if there more
 * than 50 tokens that start with "f" before "fox", e.g. "face", "fail", "fair".
 * We recommend using the `PrefixOnLastTokenFilter` instead, which does not have the same token order guarantees
 * as the phrase filter, but does allow for a wildcard matches on the last term.
 *
 * Additional Japanese query behavior:
 *
 * Custom tokenization gets applied iff a filter has Japanese query string and uses standard analyzer. If it uses
 * non-standard analyzer, it does not tokenize the string, assuming the given analyzer can handle Japanese query.
 *
 * In the custom tokenization, a sequence of the following characters is considered as one token: Han and
 * Hiragana, Katakana, Alphabets, or numbers. For example, the string "はねだ空港ターミナルA発バス231" produces the
 * tokens "はねだ空港", "ターミナル", "A", "発", "バス", "231" using JapaneseTokenization.
 *
 * Each tokenized string are treated as PhraseFilter, so any multi-token Japanese query string results in
 * AndFilter of PhraseFilters of each token. Also, in tokenized AndFilter, phrase mode for each token
 * PhraseFilter depends on its character type it sets the phrase mode is set following the rules below:
 *
 * - Any token except for the last token is treated with PhraseMatchMode.PHRASE.
 * - If the last token is Han and Hiragana, PhraseMatchMode.PHRASE gets applied to the token.
 * - If the last token is Katakana or Alphanumerics, PhraseMatchMode.PHRASE_PREFIX get applied to the token.
 *
 * If the original PhraseFilter uses both standard analyzer and non-standard analyzer for different properties,
 * it creates a mix of tokenized filters or PhraseFilters using provided analyzer for corresponding properties,
 * and it combines them into one filter in Or condition.
 */
export interface PhraseFilter {
  phrase: string;
  propertySet: PropertySet | undefined;
  matchMode: PhraseMatchMode | undefined;
}
