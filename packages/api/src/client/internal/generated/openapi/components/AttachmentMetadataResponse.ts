import { AttachmentV2 } from "./AttachmentV2";
import { ListAttachmentsResponseV2 } from "./ListAttachmentsResponseV2";

export interface AttachmentMetadataResponse_Single extends AttachmentV2 {
    type: "single";
}

export interface AttachmentMetadataResponse_Multiple extends ListAttachmentsResponseV2 {
    type: "multiple";
}

export type AttachmentMetadataResponse = AttachmentMetadataResponse_Single | AttachmentMetadataResponse_Multiple;
