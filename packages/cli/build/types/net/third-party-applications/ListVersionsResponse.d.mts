import type { Version } from "./Version.mjs";
export interface ListVersionsResponse {
	data: Version[];
	nextPageToken?: string;
}
