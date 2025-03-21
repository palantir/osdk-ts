import type { EntityConfigModification } from "./EntityConfigModification.js";
import type { EntityProvenanceModification } from "./EntityProvenanceModification.js";
import type { StorageBackendModification } from "./StorageBackendModification.js";
export interface LinkTypeEntityMetadataModifyRequest {
	entityConfig: EntityConfigModification;
	arePatchesEnabled: boolean | undefined;
	targetStorageBackend: StorageBackendModification | undefined;
	provenance: EntityProvenanceModification | undefined;
}
