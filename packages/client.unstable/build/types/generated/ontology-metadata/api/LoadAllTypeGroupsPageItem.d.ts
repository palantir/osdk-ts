import type { TypeGroup } from "./TypeGroup.js";
export interface LoadAllTypeGroupsPageItem {
	typeGroup: TypeGroup;
	numberOfObjectTypes: number | undefined;
	numberOfActionTypes: number | undefined;
}
