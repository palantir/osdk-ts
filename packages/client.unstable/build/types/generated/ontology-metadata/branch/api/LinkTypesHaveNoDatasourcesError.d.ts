import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
/**
* An error representing when a many-to-many link type has no datasources.
*/
export interface LinkTypesHaveNoDatasourcesError {
	linkType: LinkTypeRid;
}
