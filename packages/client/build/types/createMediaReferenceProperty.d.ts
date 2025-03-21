import type { Media, MediaMetadata } from "@osdk/api";
import type { MinimalClient } from "./MinimalClientContext.js";
export declare class MediaReferencePropertyImpl implements Media {
	#private;
	constructor(args: {
		client: MinimalClient
		objectApiName: string
		primaryKey: any
		propertyName: string
	});
	fetchContents(): Promise<Response>;
	fetchMetadata(): Promise<MediaMetadata>;
}
