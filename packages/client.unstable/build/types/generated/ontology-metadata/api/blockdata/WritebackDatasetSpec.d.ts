import type { DataFilter } from "./DataFilter.js";
import type { PatchesConfiguration } from "./PatchesConfiguration.js";
import type { SchemaConfiguration } from "./SchemaConfiguration.js";
export interface WritebackDatasetSpec {
	filter: DataFilter;
	schemaConfiguration: SchemaConfiguration;
	patchesConfiguration: PatchesConfiguration | undefined;
}
