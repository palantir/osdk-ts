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

import type { PropertyId } from "./PropertyId.js";

/**
 * This filter analyzes the query string.
 * The output of the analysis of a string are called tokens, for example the string "The Quick Brown Fox"
 * produces the tokens "the", "quick", "brown", "fox" using the default analyzer.
 *
 * An object matches a PrefixOnLastTokenFilter iff the tokens for the specified query match all tokens from
 * the specified property, using exact match for every token except for the last, and prefix match for the last
 * token.
 * Ordering of tokens in the query string is not checked when performing the matches.
 * If the field is not analyzed, the filter will be equivalent to a Wildcard filter, as we analyze the query
 * string with the property analyzer (which is identity for a non-analyzed property).
 *
 * For example, a query with "The Quick Brown F" for a property with the default analyzer queries for
 * `"the" AND "quick" AND "brown" AND "f*"`, so would match "the brown fox reached the quick rabbit" but not
 * "the fox quickly jumped over the brown fence".
 *
 * Only works on string properties. OSS will throw an exception if the property type is not string.
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
 */
export interface PrefixOnLastTokenFilter {
  propertyId: PropertyId;
  query: string;
}
