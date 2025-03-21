import type { EntityTypeRid } from "../../EntityTypeRid.js";
import type { OntologyVersion } from "../../OntologyVersion.js";
import type { NamedLogicalObjectSet } from "./NamedLogicalObjectSet.js";
export interface LogicalObjectSetResponse {
	objectSets: Array<NamedLogicalObjectSet>;
	versions: Record<EntityTypeRid, OntologyVersion>;
}
