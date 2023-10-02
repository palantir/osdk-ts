/**
 * Aggregation cannot group by on the same field multiple times.
 *
 */
export interface MultipleGroupByOnFieldNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "MultipleGroupByOnFieldNotSupported";
    errorInstanceId: string;
    parameters: {
        duplicateFields: Array<string>;
    };
}
