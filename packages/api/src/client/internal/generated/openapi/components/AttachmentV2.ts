import { AttachmentRid } from "./AttachmentRid";
import { Filename } from "./Filename";
import { SizeBytes } from "./SizeBytes";
import { MediaType } from "./MediaType";

/** The representation of an attachment. */
export interface AttachmentV2 {
    rid: AttachmentRid;
    filename: Filename;
    sizeBytes: SizeBytes;
    mediaType: MediaType;
}
