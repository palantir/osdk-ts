/** Returns objects where the specified field contains the provided value as a substring. */
export interface PhraseQuery {
    field: string;
    value: string;
}
