import type { MediaSetBranchRid } from "./MediaSetBranchRid.js";
import type { MediaSetRid } from "./MediaSetRid.js";
import type { MediaSetViewRid } from "./MediaSetViewRid.js";
/**
* A locator for a media set view. This is a combination of the media set rid, view rid and the branch rid.
*/
export interface MediaSetViewLocator {
	mediaSetRid: MediaSetRid;
	mediaSetViewRid: MediaSetViewRid;
	mediaSetBranchRid: MediaSetBranchRid;
}
