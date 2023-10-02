/**
 * There are more objects, but they cannot be returned by this API. Only 10,000 objects are available through this
 * API for a given request.
 *
 */
export interface ObjectsExceededLimit {
    errorCode: "INVALID_ARGUMENT";
    errorName: "ObjectsExceededLimit";
    errorInstanceId: string;
    parameters: {
    };
}
