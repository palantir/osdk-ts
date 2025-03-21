import type { OntologyVersion } from "../OntologyVersion.js";
export interface OntologyLoadAllAuditRecord {
	currentOntologyVersion: OntologyVersion | undefined;
	entitiesOntologyVersion: OntologyVersion | undefined;
	entityCount: number;
}
