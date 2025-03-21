import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to batch load Ontology entities. If any of the requested entities are not available
* in the specified OntologyVersion (or latest if not specified), they will not be present in the
* response.
*/
export interface OntologyLoadEntitiesRequest {
	objectTypeVersions: Record<ObjectTypeRid, OntologyVersion | undefined>;
	linkTypeVersions: Record<LinkTypeRid, OntologyVersion | undefined>;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
