/**
 * The number of groups in the aggregations grouping exceeded the allowed limit.
 *
 */
export interface AggregationGroupCountExceededLimit {
    errorCode: "INVALID_ARGUMENT";
    errorName: "AggregationGroupCountExceededLimit";
    errorInstanceId: string;
    parameters: {
        groupsCount: number;
        groupsLimit: number;
    };
}
