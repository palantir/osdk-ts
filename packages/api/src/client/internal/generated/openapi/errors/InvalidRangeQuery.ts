/**
 * The specified query range filter is invalid.
 *
 */
export interface InvalidRangeQuery {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidRangeQuery";
    errorInstanceId: string;
    parameters: {
        //Less than
        lt: any;
        //Greater than
        gt: any;
        //Less than or equal
        lte: any;
        //Greater than or equal
        gte: any;
        field: string;
    };
}
