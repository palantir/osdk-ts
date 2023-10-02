/** Returns objects where the specified field is less than a value. */
export interface LtQuery {
    field: string;
    /** Less than value */
    value: any;
}
