/**
 * The user does not have permission to parent attachments.
 *
 */
export interface ParentAttachmentPermissionDenied {
    errorCode: "PERMISSION_DENIED";
    errorName: "ParentAttachmentPermissionDenied";
    errorInstanceId: string;
    parameters: {
    };
}
