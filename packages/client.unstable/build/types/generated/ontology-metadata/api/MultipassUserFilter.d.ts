import type { MultipassUserInGroupFilter } from "./MultipassUserInGroupFilter.js";
export interface MultipassUserFilter_groupFilter {
	type: "groupFilter";
	groupFilter: MultipassUserInGroupFilter;
}
export type MultipassUserFilter = MultipassUserFilter_groupFilter;
