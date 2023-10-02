/** Returns objects where the specified field is greater than or equal to a value. */
export interface GteQuery {
    field: string;
    /** Greater than or equal to value */
    value: any;
}
