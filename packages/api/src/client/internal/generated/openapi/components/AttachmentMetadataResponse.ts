import { AttachmentV2 } from "./AttachmentV2";
import { ListAttachmentsResponseV2 } from "./ListAttachmentsResponseV2";

export interface AttachmentMetadataResponse_Single extends AttachmentV2 {
    type: "single";
}

function isSingle(obj: AttachmentMetadataResponse): obj is AttachmentMetadataResponse_Single {
    return (obj.type === "single");
}

export interface AttachmentMetadataResponse_Multiple extends ListAttachmentsResponseV2 {
    type: "multiple";
}

function isMultiple(obj: AttachmentMetadataResponse): obj is AttachmentMetadataResponse_Multiple {
    return (obj.type === "multiple");
}

export interface AttachmentMetadataResponseVisitor<T> {
    single: (obj: AttachmentV2) => T;
    multiple: (obj: ListAttachmentsResponseV2) => T;
    unknown: (obj: AttachmentMetadataResponse) => T;
}

function visit<T>(obj: AttachmentMetadataResponse, visitor: AttachmentMetadataResponseVisitor<T>): T {
    if (isSingle(obj)) {
        return visitor.single(obj);
    }

    if (isMultiple(obj)) {
        return visitor.multiple(obj);
    }

    return visitor.unknown(obj);
}

export type AttachmentMetadataResponse = AttachmentMetadataResponse_Single | AttachmentMetadataResponse_Multiple;

export const AttachmentMetadataResponse = {
    isSingle: isSingle,
    isMultiple: isMultiple,
    visit: visit,
};
