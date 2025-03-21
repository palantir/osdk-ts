export interface Attachment {
	rid: string;
	/**
	* Fetches metadata for an attachment
	*/
	fetchMetadata(): Promise<AttachmentMetadata>;
	/**
	* Fetches actual content of attachment in Blob form
	*/
	fetchContents(): Promise<Response>;
}
export interface AttachmentUpload {
	readonly name: string;
	readonly data: Blob;
}
export interface AttachmentMetadata {
	rid: string;
	filename: string;
	sizeBytes: number;
	mediaType: string;
}
