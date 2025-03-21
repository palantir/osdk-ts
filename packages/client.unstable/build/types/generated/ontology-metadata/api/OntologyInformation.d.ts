import type { OntologyApiName } from "./OntologyApiName.js";
import type { OntologyBranchRid } from "./OntologyBranchRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Information about an Ontology.
*/
export interface OntologyInformation {
	apiName: OntologyApiName;
	displayName: string;
	description: string;
	currentOntologyVersion: OntologyVersion;
	defaultBranchRid: OntologyBranchRid;
}
