import type { MultipassAttributeKey } from "./MultipassAttributeKey.js";
/**
* The current user's attributes under the given key. This resolves to a list of values.
*/
export interface MultipassAttribute {
	key: MultipassAttributeKey;
}
