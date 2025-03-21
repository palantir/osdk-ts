import type { DatasourceType } from "./DatasourceType.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to load datasources for the specified Ontology entities.
*/
export interface OntologyLoadDatasourcesRequest {
	datasourceTypes: Array<DatasourceType>;
	manyToManyLinkTypes: Record<LinkTypeRid, OntologyVersion | undefined>;
	objectTypes: Record<ObjectTypeRid, OntologyVersion | undefined>;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
