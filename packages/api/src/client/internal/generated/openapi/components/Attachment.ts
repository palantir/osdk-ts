import { AttachmentRid } from "./AttachmentRid";
import { Filename } from "./Filename";
import { SizeBytes } from "./SizeBytes";
import { MediaType } from "./MediaType";

/** The representation of an attachment. */
export type Attachment = { rid: AttachmentRid; filename: Filename; sizeBytes: SizeBytes; mediaType: MediaType; };
