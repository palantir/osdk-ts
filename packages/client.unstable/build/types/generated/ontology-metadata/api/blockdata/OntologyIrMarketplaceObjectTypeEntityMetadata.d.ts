/**
* Local overridden alias of OMS public API representation of ObjectTypeEntityMetadata. In OMS API we model
* editsResolutionStrategies field as non-optional, but Marketplace ontology block data uploaded to
* artifacts faces similar constraints as our internal StorageObjectTypeEntityMetadata and we need to provide
* runtime conversion with default value.
*/
export interface OntologyIrMarketplaceObjectTypeEntityMetadata {
	arePatchesEnabled: boolean;
}
