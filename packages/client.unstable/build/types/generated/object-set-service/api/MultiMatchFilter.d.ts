import type { Fuzziness } from "./Fuzziness.js";
import type { MultiMatchFilterOperator } from "./MultiMatchFilterOperator.js";
import type { PropertySet } from "./PropertySet.js";
/**
* This filter analyzes the query string.
* The output of the analysis of a string are called tokens, for example the string "The Quick Brown Fox"
* produces the tokens "the", "quick", "brown", "fox" using the default analyzer.
*
* An object matches a MultiMatchFilter iff the tokens for the specified query match exactly
* any of the tokens from values in the properties specified in the PropertySet.
*
* For example, a query with "The Quick Brown Fox" for a property with the default analyzer
* queries for `"the" OR "quick" OR "brown" OR "fox"`, so would match "The brown fox jumped over the fence".
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
* it creates a mix of tokenized filters or MultiMatchFilters using provided analyzer for corresponding
* properties, and it combines them into one filter in Or condition.
*/
export interface MultiMatchFilter {
	query: string;
	propertySet: PropertySet;
	fuzzy: boolean | undefined;
	fuzziness: Fuzziness | undefined;
	operator: MultiMatchFilterOperator | undefined;
}
