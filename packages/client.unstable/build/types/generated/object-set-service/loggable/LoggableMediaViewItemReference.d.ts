import type { MediaItemRid } from "../api/MediaItemRid.js";
import type { MediaSetRid } from "../api/MediaSetRid.js";
import type { MediaSetViewRid } from "../api/MediaSetViewRid.js";
/**
* See com.palantir.object.set.api.MediaViewItemReference
*/
export interface LoggableMediaViewItemReference {
	mediaSetRid: MediaSetRid;
	mediaSetViewRid: MediaSetViewRid;
	mediaItemRid: MediaItemRid;
	hasToken: boolean;
}
