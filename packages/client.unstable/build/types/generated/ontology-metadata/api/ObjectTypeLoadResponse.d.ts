import type { ObjectTypeEntityMetadata } from "./entitymetadata/ObjectTypeEntityMetadata.js";
import type { ObjectType } from "./ObjectType.js";
import type { ObjectTypeDatasource } from "./ObjectTypeDatasource.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Response to ObjectTypeLoadRequest.
*/
export interface ObjectTypeLoadResponse {
	objectType: ObjectType;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
	datasources: Array<ObjectTypeDatasource>;
	entityMetadata: ObjectTypeEntityMetadata | undefined;
}
