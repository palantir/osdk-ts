import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { SchemaVersion } from "../SchemaVersion.js";
import type { SchemaTransition } from "./SchemaTransition.js";
/**
* The transitions for a given ObjectType defined up to the requested ontology version.
*/
export interface ObjectTypeSchemaTransitions {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion;
	schemaTransitions: Array<SchemaTransition>;
	schemaVersion: SchemaVersion;
}
