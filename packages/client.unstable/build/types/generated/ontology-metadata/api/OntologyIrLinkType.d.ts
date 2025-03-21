import type { LinkTypeId } from "./LinkTypeId.js";
import type { OntologyIrLinkDefinition } from "./OntologyIrLinkDefinition.js";
import type { OntologyIrLinkTypeStatus } from "./OntologyIrLinkTypeStatus.js";
/**
* LinkType(s) are models for relationships between ObjectType(s).
*/
export interface OntologyIrLinkType {
	definition: OntologyIrLinkDefinition;
	id: LinkTypeId;
	status: OntologyIrLinkTypeStatus;
	redacted: boolean | undefined;
}
