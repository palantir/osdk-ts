import type { DatasetFileReference } from "./DatasetFileReference.js";
import type { MediaItemReference } from "./MediaItemReference.js";
import type { MediaViewItemReference } from "./MediaViewItemReference.js";
export interface MediaValueReference_mediaItem {
	type: "mediaItem";
	mediaItem: MediaItemReference;
}
export interface MediaValueReference_mediaViewItem {
	type: "mediaViewItem";
	mediaViewItem: MediaViewItemReference;
}
export interface MediaValueReference_datasetFile {
	type: "datasetFile";
	datasetFile: DatasetFileReference;
}
/**
* A reference to media contained in either a media set or a dataset.
*/
export type MediaValueReference = MediaValueReference_mediaItem | MediaValueReference_mediaViewItem | MediaValueReference_datasetFile;
