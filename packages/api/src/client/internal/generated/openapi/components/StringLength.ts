/**
 * The parameter value must have a length within the defined range.
 * *This range is always inclusive.*
 *
 */
export interface StringLength {
    /** Less than */
    lt?: any;
    /** Less than or equal */
    lte?: any;
    /** Greater than */
    gt?: any;
    /** Greater than or equal */
    gte?: any;
}
