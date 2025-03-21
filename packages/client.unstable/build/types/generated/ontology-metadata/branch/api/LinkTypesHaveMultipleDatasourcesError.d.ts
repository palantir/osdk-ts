import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
/**
* An error representing when a many-to-many link type has more than one datasource.
*/
export interface LinkTypesHaveMultipleDatasourcesError {
	linkType: LinkTypeRid;
	datasources: Array<DatasourceRid>;
}
