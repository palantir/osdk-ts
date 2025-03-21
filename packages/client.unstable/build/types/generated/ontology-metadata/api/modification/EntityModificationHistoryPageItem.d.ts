import type { Attribution } from "../Attribution.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { ModificationType } from "./ModificationType.js";
import type { OntologyModificationDescription } from "./OntologyModificationDescription.js";
export interface EntityModificationHistoryPageItem {
	ontologyVersion: OntologyVersion;
	attribution: Attribution;
	modificationType: ModificationType;
	description: OntologyModificationDescription | undefined;
}
