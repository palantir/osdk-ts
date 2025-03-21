import type { DatasetFileReference } from "../api/DatasetFileReference.js";
import type { MediaItemReference } from "../api/MediaItemReference.js";
import type { LoggableMediaViewItemReference } from "./LoggableMediaViewItemReference.js";
export interface LoggableMediaValueReference_mediaItem {
	type: "mediaItem";
	mediaItem: MediaItemReference;
}
export interface LoggableMediaValueReference_mediaViewItem {
	type: "mediaViewItem";
	mediaViewItem: LoggableMediaViewItemReference;
}
export interface LoggableMediaValueReference_datasetFile {
	type: "datasetFile";
	datasetFile: DatasetFileReference;
}
/**
* See com.palantir.object.set.api.MediaValueReference
*/
export type LoggableMediaValueReference = LoggableMediaValueReference_mediaItem | LoggableMediaValueReference_mediaViewItem | LoggableMediaValueReference_datasetFile;
