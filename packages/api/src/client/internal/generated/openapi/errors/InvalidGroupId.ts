/** The provided value for a group id must be a UUID. */
export interface InvalidGroupId {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidGroupId";
    errorInstanceId: string;
    parameters: {
        groupId: string;
    };
}
