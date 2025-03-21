export interface Media {
	/**
	* Fetches metadata for media reference property
	*/
	fetchMetadata(): Promise<MediaMetadata>;
	/**
	* Fetches content of a media reference property
	*/
	fetchContents(): Promise<Response>;
}
/**
* Unique identifier of a media item in Foundry.
*/
export interface MediaReference {
	mimeType: string;
	reference: {
		type: "mediaSetViewItem"
		mediaSetViewItem: {
			mediaItemRid: string
			mediaSetRid: string
			mediaSetViewRid: string
		}
	};
}
/**
* Metadata of a media item
*/
export interface MediaMetadata {
	path?: string;
	sizeBytes: number;
	mediaType: string;
}
