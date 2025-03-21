import type { ActionTypesSummary } from "./ActionTypesSummary.js";
import type { InterfacesSummary } from "./InterfacesSummary.js";
import type { LinkTypesSummary } from "./LinkTypesSummary.js";
import type { ObjectTypesSummary } from "./ObjectTypesSummary.js";
import type { SharedPropertiesSummary } from "./SharedPropertiesSummary.js";
import type { TypeGroupsSummary } from "./TypeGroupsSummary.js";
export interface GetOntologySummaryResponse {
	objectTypes: ObjectTypesSummary;
	linkTypes: LinkTypesSummary;
	actionTypes: ActionTypesSummary;
	sharedProperties: SharedPropertiesSummary;
	interfaces: InterfacesSummary;
	typeGroups: TypeGroupsSummary;
}
