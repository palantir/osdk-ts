/**
 * Aggregation range should include one lt or lte and one gt or gte.
 *
 */
export interface InvalidAggregationRange {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidAggregationRange";
    errorInstanceId: string;
    parameters: {
    };
}
