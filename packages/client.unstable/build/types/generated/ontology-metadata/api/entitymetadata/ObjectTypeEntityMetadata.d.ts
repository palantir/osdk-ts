import type { ObjectTypeGothamMapping } from "../typemapping/ObjectTypeGothamMapping.js";
import type { ActionLogRequirednessMetadata } from "./ActionLogRequirednessMetadata.js";
import type { EditsHistory } from "./EditsHistory.js";
import type { EditsResolutionStrategies } from "./EditsResolutionStrategies.js";
import type { EntityConfig } from "./EntityConfig.js";
import type { ObjectTypeAlias } from "./ObjectTypeAlias.js";
import type { ObjectTypeIndexingSettings } from "./ObjectTypeIndexingSettings.js";
import type { EntityProvenance } from "./provenance/EntityProvenance.js";
import type { StorageBackend } from "./StorageBackend.js";
/**
* Contains additional metadata associated with an ObjectType.
*/
export interface ObjectTypeEntityMetadata {
	entityConfig: EntityConfig;
	arePatchesEnabled: boolean;
	targetStorageBackend: StorageBackend;
	redacted: boolean | undefined;
	actionLogRequirednessMetadata: ActionLogRequirednessMetadata | undefined;
	diffEdits: boolean;
	gothamMapping: ObjectTypeGothamMapping | undefined;
	provenance: EntityProvenance | undefined;
	editsResolutionStrategies: EditsResolutionStrategies;
	aliases: Array<ObjectTypeAlias>;
	editsHistory: EditsHistory;
	objectTypeIndexingSettings: ObjectTypeIndexingSettings | undefined;
}
