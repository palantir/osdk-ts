/**
 * Returns objects where the specified field contains all of the terms in the order provided,
 * but they do have to be adjacent to each other.
 *
 */
export type ContainsAllTermsInOrderQuery = { field: string; value: string; };
