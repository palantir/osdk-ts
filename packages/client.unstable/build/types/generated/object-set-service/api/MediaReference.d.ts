import type { MediaValueReference } from "./MediaValueReference.js";
import type { MimeType } from "./MimeType.js";
/**
* A reference to an immutable piece of media.
*/
export interface MediaReference {
	mimeType: MimeType;
	reference: MediaValueReference;
}
