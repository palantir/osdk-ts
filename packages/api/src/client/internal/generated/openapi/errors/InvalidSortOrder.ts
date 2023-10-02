/**
 * The requested sort order of one or more properties is invalid. Valid sort orders are 'asc' or 'desc'. Sort
 * order can also be omitted, and defaults to 'asc'.
 *
 */
export interface InvalidSortOrder {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidSortOrder";
    errorInstanceId: string;
    parameters: {
        invalidSortOrder: string;
    };
}
