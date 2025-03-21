import type { DynamicObjectSetInput } from "./DynamicObjectSetInput.js";
import type { ObjectSetTransform } from "./ObjectSetTransform.js";
/**
* An ObjectSet gotten as a result of performing a sequence of Transforms on a base ObjectSet.
* Each transforms is either a PropertyFilter or a SearchAround.
* There is a limit of 3 SearchArounds.
*/
export interface DynamicObjectSet {
	startingObjectSet: DynamicObjectSetInput;
	transforms: Array<ObjectSetTransform>;
}
