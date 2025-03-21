import type { ObjectViewTabId } from "./ObjectViewTabId.js";
/**
* An identifier for an object view
*/
export interface AssociatedObjectViewIdentifier {
	objectTypeRid: string;
	objectViewTabIds: Array<ObjectViewTabId>;
}
