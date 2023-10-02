/**
 * The file is too large to be uploaded as an attachment.
 * The maximum attachment size is 200MB.
 *
 */
export interface AttachmentSizeExceededLimit {
    errorCode: "INVALID_ARGUMENT";
    errorName: "AttachmentSizeExceededLimit";
    errorInstanceId: string;
    parameters: {
        fileSizeBytes: string;
        fileLimitBytes: string;
    };
}
