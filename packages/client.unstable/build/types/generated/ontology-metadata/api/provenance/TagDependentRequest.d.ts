import type { GlobalBranchRid } from "../GlobalBranchRid.js";
import type { Dependent } from "./Dependent.js";
import type { Tag } from "./Tag.js";
/**
* Request to assign tags to a dependent entity. This will move the tag from an existing tagged Dependent with
* the same rid.
*/
export interface TagDependentRequest {
	dependent: Dependent;
	tags: Array<Tag>;
	globalBranchRid: GlobalBranchRid | undefined;
}
