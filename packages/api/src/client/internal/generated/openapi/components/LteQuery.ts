/** Returns objects where the specified field is less than or equal to a value. */
export interface LteQuery {
    field: string;
    /** Less than or equal to value */
    value: any;
}
