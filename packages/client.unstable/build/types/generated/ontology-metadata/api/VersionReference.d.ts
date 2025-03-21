import type { OntologyBranchRid } from "./OntologyBranchRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface VersionReference_ontologyVersion {
	type: "ontologyVersion";
	ontologyVersion: OntologyVersion;
}
export interface VersionReference_ontologyBranch {
	type: "ontologyBranch";
	ontologyBranch: OntologyBranchRid;
}
/**
* Union type to represent various ways to reference the version of an Ontology entity.
*/
export type VersionReference = VersionReference_ontologyVersion | VersionReference_ontologyBranch;
