import { AttachmentV2 } from "./AttachmentV2";
import { PageToken } from "./PageToken";

export interface ListAttachmentsResponseV2 {
    data: Array<AttachmentV2>;
    nextPageToken?: PageToken;
}
