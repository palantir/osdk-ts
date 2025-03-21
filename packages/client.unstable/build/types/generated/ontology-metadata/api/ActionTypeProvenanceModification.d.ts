import type { ActionTypeProvenanceSourceModification } from "./ActionTypeProvenanceSourceModification.js";
/**
* Metadata describing provenance of an entity. Can only be set by the privileged owner.
*/
export interface ActionTypeProvenanceModification {
	source: ActionTypeProvenanceSourceModification;
}
