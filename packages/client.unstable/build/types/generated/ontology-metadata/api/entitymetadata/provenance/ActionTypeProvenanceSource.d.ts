import type { MarketplaceEntityProvenance } from "./MarketplaceEntityProvenance.js";
export interface ActionTypeProvenanceSource_marketplace {
	type: "marketplace";
	marketplace: MarketplaceEntityProvenance;
}
/**
* Information describing the source provenance of an ontology entity modeled as an extensible union.
* Each service or client which defines the definition of an ontology entity can declare their custom
* representation of provenance metadata. Examples may include references to resources, their versions,
* timestamps etc.
*/
export type ActionTypeProvenanceSource = ActionTypeProvenanceSource_marketplace;
