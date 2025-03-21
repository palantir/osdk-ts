import type { MultipassUserInGroupFilterModification } from "./MultipassUserInGroupFilterModification.js";
export interface MultipassUserFilterModification_groupFilter {
	type: "groupFilter";
	groupFilter: MultipassUserInGroupFilterModification;
}
export type MultipassUserFilterModification = MultipassUserFilterModification_groupFilter;
