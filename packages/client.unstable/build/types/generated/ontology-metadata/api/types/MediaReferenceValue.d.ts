import type { MediaReference } from "./MediaReference.js";
import type { MimeType } from "./MimeType.js";
/**
* A parameter type that consists of a MediaReference.
*/
export interface MediaReferenceValue {
	mimeType: MimeType;
	mediaReference: MediaReference;
}
