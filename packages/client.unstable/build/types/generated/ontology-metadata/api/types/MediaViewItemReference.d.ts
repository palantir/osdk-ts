import type { MediaItemRid } from "../MediaItemRid.js";
import type { MediaSetRid } from "../MediaSetRid.js";
import type { MediaSetViewRid } from "../MediaSetViewRid.js";
export interface MediaViewItemReference {
	mediaSetRid: MediaSetRid;
	mediaSetViewRid: MediaSetViewRid;
	mediaItemRid: MediaItemRid;
}
