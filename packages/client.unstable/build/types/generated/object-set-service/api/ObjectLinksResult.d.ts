import type { LoadedObjectLinksResult } from "./LoadedObjectLinksResult.js";
export interface ObjectLinksResult_loaded {
	type: "loaded";
	loaded: LoadedObjectLinksResult;
}
/**
* Links retrieval result for a requested object.
*/
export type ObjectLinksResult = ObjectLinksResult_loaded;
