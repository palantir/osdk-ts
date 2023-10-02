/** Specifies a date range from an inclusive start date to an exclusive end date. */
export interface AggregationRange {
    /** Exclusive end date. */
    lt?: any;
    /** Inclusive end date. */
    lte?: any;
    /** Exclusive start date. */
    gt?: any;
    /** Inclusive start date. */
    gte?: any;
}
