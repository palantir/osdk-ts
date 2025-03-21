import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { FunctionReference } from "../FunctionReference.js";
import type { LinkTypeIdentifier } from "../LinkTypeIdentifier.js";
import type { NotepadReference } from "../NotepadReference.js";
import type { QuiverDashboardReference } from "../QuiverDashboardReference.js";
import type { ValueTypeReference } from "../ValueTypeReference.js";
import type { WorkshopReference } from "../WorkshopReference.js";
import type { ObjectTypeWithProperties } from "./ObjectTypeWithProperties.js";
/**
* All entities that the given Dependent depends on.
*/
export interface ProvenanceDependentOntologyEntities {
	objectTypes: Array<ObjectTypeWithProperties>;
	linkTypes: Array<LinkTypeIdentifier>;
	actionTypes: Array<ActionTypeRid>;
	valueTypes: Array<ValueTypeReference>;
	functions: Array<FunctionReference>;
	workshops: Array<WorkshopReference>;
	notepads: Array<NotepadReference>;
	quiverDashboards: Array<QuiverDashboardReference>;
}
