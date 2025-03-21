import type { CustomProvenanceIdentifier } from "./CustomProvenanceIdentifier.js";
/**
* Used to record custom provenance information.
*/
export interface CustomProvenance {
	identifier: CustomProvenanceIdentifier;
	parameters: Record<string, any>;
}
