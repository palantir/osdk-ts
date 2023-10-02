/**
 * The link the user is attempting to create already exists.
 *
 */
export interface LinkAlreadyExists {
    errorCode: "CONFLICT";
    errorName: "LinkAlreadyExists";
    errorInstanceId: string;
    parameters: {
    };
}
