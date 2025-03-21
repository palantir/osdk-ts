import type { PageToken } from "@osdk/foundry.core";
export interface PagedBodyResponse<T> {
	nextPageToken?: string;
	data: T[];
}
export interface PagedBodyResponseWithTotal<T> extends PagedBodyResponse<T> {
	totalCount: string;
}
export type PagedRequest = {
	excludeRid?: boolean
	pageSize?: number
	pageToken?: string
};
export declare function pageThroughResponseSearchParams<
	TData,
	TIncludeCount extends boolean
>(iter: Iterable<TData>, { pageSize, pageToken }: {
	pageSize: number | undefined
	pageToken: PageToken | undefined
}, includeCount?: TIncludeCount): (TIncludeCount extends true ? PagedBodyResponseWithTotal<TData> : PagedBodyResponse<TData>) | undefined;
