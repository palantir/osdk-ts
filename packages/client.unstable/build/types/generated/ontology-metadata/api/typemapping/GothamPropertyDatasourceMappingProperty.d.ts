import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { GothamDatasourceMetadata } from "./GothamDatasourceMetadata.js";
export interface GothamPropertyDatasourceMappingProperty {
	propertyMappings: Record<GothamDatasourceMetadata, PropertyTypeRid>;
}
