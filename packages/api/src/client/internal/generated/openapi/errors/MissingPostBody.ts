/** A post body is required for this endpoint, but was not found in the request. */
export interface MissingPostBody {
    errorCode: "INVALID_ARGUMENT";
    errorName: "MissingPostBody";
    errorInstanceId: string;
    parameters: {
    };
}
