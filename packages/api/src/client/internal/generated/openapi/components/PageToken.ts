/**
 * The page token indicates where to start paging. This should be omitted from the first page's request.
 * To fetch the next page, clients should take the value from the `nextPageToken` field of the previous response
 * and populate the next request's `pageToken` field with it.
 *
 */
export type PageToken = string;
