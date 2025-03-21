import type { MarketplaceEntityProvenance } from "./entitymetadata/provenance/MarketplaceEntityProvenance.js";
import type { NoneEntityProvenance } from "./NoneEntityProvenance.js";
export interface ActionTypeProvenanceSourceModification_marketplace {
	type: "marketplace";
	marketplace: MarketplaceEntityProvenance;
}
export interface ActionTypeProvenanceSourceModification_none {
	type: "none";
	none: NoneEntityProvenance;
}
export type ActionTypeProvenanceSourceModification = ActionTypeProvenanceSourceModification_marketplace | ActionTypeProvenanceSourceModification_none;
