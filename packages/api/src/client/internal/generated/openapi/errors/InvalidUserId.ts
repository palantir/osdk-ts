/** The provided value for a user id must be a UUID. */
export interface InvalidUserId {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidUserId";
    errorInstanceId: string;
    parameters: {
        userId: string;
    };
}
