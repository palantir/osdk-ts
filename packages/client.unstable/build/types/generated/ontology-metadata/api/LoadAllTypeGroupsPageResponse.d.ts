import type { LoadAllTypeGroupsPageItem } from "./LoadAllTypeGroupsPageItem.js";
import type { LoadAllTypeGroupsPageToken } from "./LoadAllTypeGroupsPageToken.js";
export interface LoadAllTypeGroupsPageResponse {
	typeGroups: Array<LoadAllTypeGroupsPageItem>;
	nextPageToken: LoadAllTypeGroupsPageToken | undefined;
}
