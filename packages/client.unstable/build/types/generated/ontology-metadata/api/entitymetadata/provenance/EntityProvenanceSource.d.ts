import type { BuilderEntityProvenance } from "./BuilderEntityProvenance.js";
import type { EditsHistoryProvenance } from "./EditsHistoryProvenance.js";
import type { MarketplaceEntityProvenance } from "./MarketplaceEntityProvenance.js";
export interface EntityProvenanceSource_builder {
	type: "builder";
	builder: BuilderEntityProvenance;
}
export interface EntityProvenanceSource_marketplace {
	type: "marketplace";
	marketplace: MarketplaceEntityProvenance;
}
export interface EntityProvenanceSource_editsHistory {
	type: "editsHistory";
	editsHistory: EditsHistoryProvenance;
}
/**
* Information describing the source provenance of an ontology entity modeled as an extensible union.
* Each service or client which defines the definition of an ontology entity can declare their custom
* representation of provenance metadata. Examples may include references to resources, their versions,
* timestamps etc.
*/
export type EntityProvenanceSource = EntityProvenanceSource_builder | EntityProvenanceSource_marketplace | EntityProvenanceSource_editsHistory;
