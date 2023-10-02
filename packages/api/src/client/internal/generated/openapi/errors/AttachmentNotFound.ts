import { AttachmentRid } from "../components/AttachmentRid";

/**
 * The requested attachment is not found, or the client token does not have access to it. 
 * Attachments that are not attached to any objects are deleted after two weeks.
 * Attachments that have not been attached to an object can only be viewed by the user who uploaded them.
 * Attachments that have been attached to an object can be viewed by users who can view the object.
 *
 */
export interface AttachmentNotFound {
    errorCode: "NOT_FOUND";
    errorName: "AttachmentNotFound";
    errorInstanceId: string;
    parameters: {
        attachmentRid: AttachmentRid;
    };
}
