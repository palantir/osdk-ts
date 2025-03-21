import type { OntologyIrObjectType } from "../OntologyIrObjectType.js";
import type { OntologyIrObjectTypeDatasource } from "../OntologyIrObjectTypeDatasource.js";
import type { OntologyIrMarketplaceObjectTypeEntityMetadata } from "./OntologyIrMarketplaceObjectTypeEntityMetadata.js";
export interface OntologyIrObjectTypeBlockDataV2 {
	objectType: OntologyIrObjectType;
	datasources: Array<OntologyIrObjectTypeDatasource>;
	entityMetadata: OntologyIrMarketplaceObjectTypeEntityMetadata | undefined;
}
