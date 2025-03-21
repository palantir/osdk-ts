import type { DatasetRid } from "./DatasetRid.js";
import type { MediaSetRid } from "./MediaSetRid.js";
export interface MediaSourceRid_mediaSetRid {
	type: "mediaSetRid";
	mediaSetRid: MediaSetRid;
}
export interface MediaSourceRid_datasetRid {
	type: "datasetRid";
	datasetRid: DatasetRid;
}
/**
* A rid identifying the resource backing a media reference.
*/
export type MediaSourceRid = MediaSourceRid_mediaSetRid | MediaSourceRid_datasetRid;
