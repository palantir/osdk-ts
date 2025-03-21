import type { EntityTypeRid } from "../../api/EntityTypeRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
import type { AuditPatchableFoundryEntity } from "./AuditPatchableFoundryEntity.js";
export interface InternalObjectSetLoadPatchableEntitiesResultParams {
	results: Array<AuditPatchableFoundryEntity>;
	ontologyVersions: Record<EntityTypeRid, OntologyVersion>;
	totalResults: number;
}
