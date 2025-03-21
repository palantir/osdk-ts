import type { StructFieldRid } from "../StructFieldRid.js";
import type { GothamDatasourceMetadata } from "./GothamDatasourceMetadata.js";
export interface GothamPropertyDatasourceMappingStruct {
	propertyMappings: Record<GothamDatasourceMetadata, StructFieldRid>;
}
