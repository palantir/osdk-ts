import type { MediaItemRid } from "./MediaItemRid.js";
import type { MediaSetRid } from "./MediaSetRid.js";
/**
* Reference to a media set item containing the media
*/
export interface MediaItemReference {
	mediaSetRid: MediaSetRid;
	mediaItemRid: MediaItemRid;
}
