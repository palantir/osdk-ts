/**
 * At least one of requested filters are malformed. Please look at the documentation of `PropertyFilter`.
 *
 */
export interface MalformedPropertyFilters {
    errorCode: "INVALID_ARGUMENT";
    errorName: "MalformedPropertyFilters";
    errorInstanceId: string;
    parameters: {
        malformedPropertyFilter: string;
    };
}
