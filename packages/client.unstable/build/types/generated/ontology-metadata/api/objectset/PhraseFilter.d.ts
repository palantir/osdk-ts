import type { PhraseMatchMode } from "./PhraseMatchMode.js";
import type { PropertySet } from "./PropertySet.js";
/**
* An object matches a PhraseFilter iff the specified phrase matches it according to the PhraseMatchMode specified.
*/
export interface PhraseFilter {
	phrase: string;
	propertySet: PropertySet | undefined;
	matchMode: PhraseMatchMode | undefined;
}
