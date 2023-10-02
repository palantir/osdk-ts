/**
 * The object the user is attempting to create already exists.
 *
 */
export interface ObjectAlreadyExists {
    errorCode: "CONFLICT";
    errorName: "ObjectAlreadyExists";
    errorInstanceId: string;
    parameters: {
    };
}
