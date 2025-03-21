import type { EntityProvenanceSourceModification } from "./EntityProvenanceSourceModification.js";
/**
* Metadata describing provenance of an entity. Can only be set by the privileged owner.
*/
export interface EntityProvenanceModification {
	source: EntityProvenanceSourceModification;
}
