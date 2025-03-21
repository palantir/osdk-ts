import type { ObjectType } from "../ObjectType.js";
import type { ObjectTypeDatasource } from "../ObjectTypeDatasource.js";
import type { MarketplaceObjectTypeEntityMetadata } from "./MarketplaceObjectTypeEntityMetadata.js";
import type { ObjectsWritebackDataset } from "./ObjectsWritebackDataset.js";
import type { SchemaMigrationBlockData } from "./SchemaMigrationBlockData.js";
export interface ObjectTypeBlockDataV2 {
	objectType: ObjectType;
	datasources: Array<ObjectTypeDatasource>;
	writebackDatasets: Array<ObjectsWritebackDataset>;
	entityMetadata: MarketplaceObjectTypeEntityMetadata | undefined;
	schemaMigrations: SchemaMigrationBlockData | undefined;
}
