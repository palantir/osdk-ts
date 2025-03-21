import type { PropertySecurityGroup } from "./PropertySecurityGroup.js";
/**
* Groupings of properties into different security "buckets." Every property of the entity type must belong
* to one and only one property security group.
*/
export interface PropertySecurityGroups {
	groups: Array<PropertySecurityGroup>;
}
