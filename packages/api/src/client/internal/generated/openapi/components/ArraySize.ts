/**
 * The parameter expects an array of values and the size of the array must fall within the defined range.
 *
 */
export interface ArraySize {
    /** Less than */
    lt?: any;
    /** Less than or equal */
    lte?: any;
    /** Greater than */
    gt?: any;
    /** Greater than or equal */
    gte?: any;
}
