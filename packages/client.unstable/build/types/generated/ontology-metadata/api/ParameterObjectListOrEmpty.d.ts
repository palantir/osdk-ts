import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectList } from "./ParameterObjectList.js";
export interface ParameterObjectListOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectListOrEmpty_objectList {
	type: "objectList";
	objectList: ParameterObjectList;
}
export type ParameterObjectListOrEmpty = ParameterObjectListOrEmpty_empty | ParameterObjectListOrEmpty_objectList;
