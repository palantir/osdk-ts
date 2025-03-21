import type { ActionTypeDataScope } from "./ActionTypeDataScope.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { LinkTypeDataScope } from "./LinkTypeDataScope.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeDataScope } from "./ObjectTypeDataScope.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyRid } from "./OntologyRid.js";
export interface LegacyOntologyDataScope {
	ontologyRid: OntologyRid;
	objectTypes: Record<ObjectTypeRid, ObjectTypeDataScope>;
	linkTypes: Record<LinkTypeRid, LinkTypeDataScope>;
	actionTypes: Record<ActionTypeRid, ActionTypeDataScope>;
}
