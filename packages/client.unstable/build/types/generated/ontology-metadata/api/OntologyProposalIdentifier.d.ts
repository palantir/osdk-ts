import type { OntologyVersion } from "./OntologyVersion.js";
export interface OntologyProposalIdentifier_ontologyVersion {
	type: "ontologyVersion";
	ontologyVersion: OntologyVersion;
}
export type OntologyProposalIdentifier = OntologyProposalIdentifier_ontologyVersion;
