import type { EntityTypeRid } from "../EntityTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { PatchableFoundryEntity } from "./PatchableFoundryEntity.js";
export interface LoadPatchableEntitiesResponse {
	entities: Array<PatchableFoundryEntity>;
	ontologyVersions: Record<EntityTypeRid, OntologyVersion>;
}
