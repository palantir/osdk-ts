import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Request object for the loadAllRuleSets endpoint. Users can optionally specify an OntologyRid
* and OntologyVersion to load rule sets from.
*/
export interface LoadAllRuleSetsRequest {
	ontologyRid: OntologyRid | undefined;
	ontologyVersion: OntologyVersion | undefined;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
	ontologyBranchRid: OntologyBranchRid | undefined;
}
