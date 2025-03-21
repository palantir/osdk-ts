export interface PageResult<T> {
	data: T[];
	nextPageToken: string | undefined;
	totalCount: string;
}
