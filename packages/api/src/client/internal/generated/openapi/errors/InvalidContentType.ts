/**
 * The `Content-Type` cannot be inferred from the request content and filename.
 * Please check your request content and filename to ensure they are compatible.
 *
 */
export interface InvalidContentType {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidContentType";
    errorInstanceId: string;
    parameters: {
    };
}
