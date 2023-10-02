/** TBD */
export interface InvalidFields {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidFields";
    errorInstanceId: string;
    parameters: {
        properties: Array<string>;
    };
}
