import type { EntityConfig } from "./EntityConfig.js";
import type { EntityProvenance } from "./provenance/EntityProvenance.js";
import type { StorageBackend } from "./StorageBackend.js";
/**
* Contains additional metadata associated with a LinkType.
*/
export interface LinkTypeEntityMetadata {
	entityConfig: EntityConfig;
	arePatchesEnabled: boolean;
	targetStorageBackend: StorageBackend;
	provenance: EntityProvenance | undefined;
	redacted: boolean | undefined;
}
