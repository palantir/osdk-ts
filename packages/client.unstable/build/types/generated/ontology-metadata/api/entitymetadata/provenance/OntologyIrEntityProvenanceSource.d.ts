import type { BuilderEntityProvenance } from "./BuilderEntityProvenance.js";
import type { MarketplaceEntityProvenance } from "./MarketplaceEntityProvenance.js";
import type { OntologyIrEditsHistoryProvenance } from "./OntologyIrEditsHistoryProvenance.js";
export interface OntologyIrEntityProvenanceSource_builder {
	type: "builder";
	builder: BuilderEntityProvenance;
}
export interface OntologyIrEntityProvenanceSource_marketplace {
	type: "marketplace";
	marketplace: MarketplaceEntityProvenance;
}
export interface OntologyIrEntityProvenanceSource_editsHistory {
	type: "editsHistory";
	editsHistory: OntologyIrEditsHistoryProvenance;
}
/**
* Information describing the source provenance of an ontology entity modeled as an extensible union.
* Each service or client which defines the definition of an ontology entity can declare their custom
* representation of provenance metadata. Examples may include references to resources, their versions,
* timestamps etc.
*/
export type OntologyIrEntityProvenanceSource = OntologyIrEntityProvenanceSource_builder | OntologyIrEntityProvenanceSource_marketplace | OntologyIrEntityProvenanceSource_editsHistory;
