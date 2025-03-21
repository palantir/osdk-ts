import type { MimeType } from "../api/MimeType.js";
import type { LoggableMediaValueReference } from "./LoggableMediaValueReference.js";
/**
* See com.palantir.object.set.api.MediaReference
*/
export interface LoggableMediaReference {
	mimeType: MimeType;
	reference: LoggableMediaValueReference;
}
