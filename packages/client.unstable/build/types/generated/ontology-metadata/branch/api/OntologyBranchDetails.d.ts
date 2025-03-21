import type { DefaultOntologyBranchDetails } from "./DefaultOntologyBranchDetails.js";
import type { NonDefaultOntologyBranchDetails } from "./NonDefaultOntologyBranchDetails.js";
export interface OntologyBranchDetails_default {
	type: "default";
	default: DefaultOntologyBranchDetails;
}
export interface OntologyBranchDetails_nonDefault {
	type: "nonDefault";
	nonDefault: NonDefaultOntologyBranchDetails;
}
export type OntologyBranchDetails = OntologyBranchDetails_default | OntologyBranchDetails_nonDefault;
