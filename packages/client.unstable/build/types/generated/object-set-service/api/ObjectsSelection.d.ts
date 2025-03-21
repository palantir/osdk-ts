import type { ObjectIdentifier } from "./ObjectIdentifier.js";
export interface ObjectsSelection_objects {
	type: "objects";
	objects: Array<ObjectIdentifier>;
}
/**
* Union type for selecting objects to be queried along links.
*/
export type ObjectsSelection = ObjectsSelection_objects;
