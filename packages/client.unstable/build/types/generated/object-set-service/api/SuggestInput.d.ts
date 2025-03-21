import type { PrefixOnLastTokenSuggestInput } from "./PrefixOnLastTokenSuggestInput.js";
export interface SuggestInput_prefixOnLastToken {
	type: "prefixOnLastToken";
	prefixOnLastToken: PrefixOnLastTokenSuggestInput;
}
/**
* The input that will be used to match suggested values.
*/
export type SuggestInput = SuggestInput_prefixOnLastToken;
