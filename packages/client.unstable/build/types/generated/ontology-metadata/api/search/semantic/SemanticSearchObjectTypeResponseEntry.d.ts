import type { ObjectType } from "../../ObjectType.js";
import type { ObjectTypeId } from "../../ObjectTypeId.js";
import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { OntologyRid } from "../../OntologyRid.js";
export interface SemanticSearchObjectTypeResponseEntry {
	objectTypeRid: ObjectTypeRid;
	objectTypeId: ObjectTypeId;
	objectType: ObjectType;
	ontologyRid: OntologyRid;
	distance: number;
}
