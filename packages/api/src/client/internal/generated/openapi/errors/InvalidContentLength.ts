/** A `Content-Length` header is required for all uploads, but was missing or invalid. */
export interface InvalidContentLength {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidContentLength";
    errorInstanceId: string;
    parameters: {
    };
}
