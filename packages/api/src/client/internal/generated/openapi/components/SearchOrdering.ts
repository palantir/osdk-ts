export interface SearchOrdering {
    /** Specifies the field to order search results by. */
    field: string;
    /** Specifies the ordering direction (can be either `asc` or `desc`) */
    direction?: string;
}
