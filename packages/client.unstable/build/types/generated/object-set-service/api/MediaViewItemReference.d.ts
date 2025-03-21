import type { MediaItemReadToken } from "./MediaItemReadToken.js";
import type { MediaItemRid } from "./MediaItemRid.js";
import type { MediaSetRid } from "./MediaSetRid.js";
import type { MediaSetViewRid } from "./MediaSetViewRid.js";
/**
* Reference to a media set view item containing the media
*/
export interface MediaViewItemReference {
	mediaSetRid: MediaSetRid;
	mediaSetViewRid: MediaSetViewRid;
	mediaItemRid: MediaItemRid;
	token: MediaItemReadToken | undefined;
}
