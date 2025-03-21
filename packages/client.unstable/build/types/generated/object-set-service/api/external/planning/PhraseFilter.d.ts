import type { PhraseMatchMode } from "../../PhraseMatchMode.js";
import type { StringFilterValue } from "../../StringFilterValue.js";
import type { PropertySet } from "./PropertySet.js";
/**
* See com.palantir.object.set.api.PhraseFilter.
*/
export interface PhraseFilter {
	propertySet: PropertySet;
	query: StringFilterValue;
	phraseMatchMode: PhraseMatchMode;
}
