/** The requested sort type of one or more clauses is invalid. Valid sort types are 'p' or 'properties'. */
export interface InvalidSortType {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidSortType";
    errorInstanceId: string;
    parameters: {
        invalidSortType: string;
    };
}
