import type { DataSetName } from "./blockdata/DataSetName.js";
import type { MediaSetRid } from "./MediaSetRid.js";
export interface OntologyIrMediaSourceRid_mediaSetRid {
	type: "mediaSetRid";
	mediaSetRid: MediaSetRid;
}
export interface OntologyIrMediaSourceRid_datasetRid {
	type: "datasetRid";
	datasetRid: DataSetName;
}
/**
* A rid identifying the resource backing a media reference.
*/
export type OntologyIrMediaSourceRid = OntologyIrMediaSourceRid_mediaSetRid | OntologyIrMediaSourceRid_datasetRid;
