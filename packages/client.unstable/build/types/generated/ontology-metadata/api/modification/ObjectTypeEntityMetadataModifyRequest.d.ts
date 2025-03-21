import type { ObjectTypeAlias } from "../entitymetadata/ObjectTypeAlias.js";
import type { ObjectTypeGothamMappingModification } from "../typemapping/ObjectTypeGothamMappingModification.js";
import type { ActionLogRequirednessModification } from "./ActionLogRequirednessModification.js";
import type { EditsHistoryModification } from "./EditsHistoryModification.js";
import type { EditsResolutionStrategyModification } from "./EditsResolutionStrategyModification.js";
import type { EntityConfigModification } from "./EntityConfigModification.js";
import type { EntityProvenanceModification } from "./EntityProvenanceModification.js";
import type { ObjectTypeIndexingSettingsModification } from "./ObjectTypeIndexingSettingsModification.js";
import type { StorageBackendModification } from "./StorageBackendModification.js";
export interface ObjectTypeEntityMetadataModifyRequest {
	entityConfig: EntityConfigModification;
	arePatchesEnabled: boolean | undefined;
	targetStorageBackend: StorageBackendModification | undefined;
	actionLogRequiredness: ActionLogRequirednessModification | undefined;
	diffEdits: boolean | undefined;
	gothamMapping: ObjectTypeGothamMappingModification | undefined;
	provenance: EntityProvenanceModification | undefined;
	editsResolutionStrategies: EditsResolutionStrategyModification | undefined;
	aliases: Array<ObjectTypeAlias> | undefined;
	editsHistory: EditsHistoryModification | undefined;
	objectTypeIndexingSettings: ObjectTypeIndexingSettingsModification | undefined;
}
