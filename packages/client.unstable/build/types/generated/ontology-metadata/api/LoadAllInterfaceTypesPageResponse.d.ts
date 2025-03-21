import type { LoadAllInterfaceTypesPageItem } from "./LoadAllInterfaceTypesPageItem.js";
import type { LoadAllInterfaceTypesPageToken } from "./LoadAllInterfaceTypesPageToken.js";
export interface LoadAllInterfaceTypesPageResponse {
	interfaceTypes: Array<LoadAllInterfaceTypesPageItem>;
	nextPageToken: LoadAllInterfaceTypesPageToken | undefined;
}
