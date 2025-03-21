import type { WidgetSetRelease } from "./WidgetSetRelease.mjs";
export interface ListWidgetSetReleasesResponse {
	releases: Array<WidgetSetRelease>;
	nextPageToken?: string;
}
