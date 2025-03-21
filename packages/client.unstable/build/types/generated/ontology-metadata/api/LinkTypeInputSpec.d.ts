import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { OntologyRidAndBranch } from "./OntologyRidAndBranch.js";
/**
* An input spec for a link type input.
*/
export interface LinkTypeInputSpec {
	linkTypeRid: LinkTypeRid;
	ontologyRidAndBranch: OntologyRidAndBranch;
}
