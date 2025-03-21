import type { ResponseOptions } from "./ResponseOptions.js";
import type { ScrollId } from "./ScrollId.js";
/**
* Subsequent request to scroll through objects in an ObjectSet.
*/
export interface GetObjectsNextScrollRequest {
	scrollId: ScrollId;
	responseOptions: ResponseOptions | undefined;
}
