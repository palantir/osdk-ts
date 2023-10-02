/** The operation is not found, or the user does not have access to it. */
export interface OperationNotFound {
    errorCode: "INVALID_ARGUMENT";
    errorName: "OperationNotFound";
    errorInstanceId: string;
    parameters: {
        id: string;
    };
}
