import type { BuilderEntityProvenance } from "../entitymetadata/provenance/BuilderEntityProvenance.js";
import type { EditsHistoryProvenance } from "../entitymetadata/provenance/EditsHistoryProvenance.js";
import type { MarketplaceEntityProvenance } from "../entitymetadata/provenance/MarketplaceEntityProvenance.js";
import type { NoneEntityProvenance } from "./NoneEntityProvenance.js";
export interface EntityProvenanceSourceModification_builder {
	type: "builder";
	builder: BuilderEntityProvenance;
}
export interface EntityProvenanceSourceModification_marketplace {
	type: "marketplace";
	marketplace: MarketplaceEntityProvenance;
}
export interface EntityProvenanceSourceModification_editsHistory {
	type: "editsHistory";
	editsHistory: EditsHistoryProvenance;
}
export interface EntityProvenanceSourceModification_none {
	type: "none";
	none: NoneEntityProvenance;
}
export type EntityProvenanceSourceModification = EntityProvenanceSourceModification_builder | EntityProvenanceSourceModification_marketplace | EntityProvenanceSourceModification_editsHistory | EntityProvenanceSourceModification_none;
