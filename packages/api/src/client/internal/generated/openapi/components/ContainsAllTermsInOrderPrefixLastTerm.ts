/**
 * Returns objects where the specified field contains all of the terms in the order provided, 
 * but they do have to be adjacent to each other.
 * The last term can be a partial prefix match.
 *
 */
export type ContainsAllTermsInOrderPrefixLastTerm = { field: string; value: string; };
