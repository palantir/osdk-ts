import type { TypeGroupDisplayMetadata } from "./TypeGroupDisplayMetadata.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* A type group is a collection of entities that are related to each other. Type groups are used to organize
* entities into logical groups. This is useful for displaying entities in the UI, or for querying entities
* within a certain scope.
*/
export interface TypeGroup {
	rid: TypeGroupRid;
	displayMetadata: TypeGroupDisplayMetadata;
}
