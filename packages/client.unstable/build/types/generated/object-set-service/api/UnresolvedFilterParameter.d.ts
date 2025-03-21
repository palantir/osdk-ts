import type { FilterValue } from "./FilterValue.js";
import type { UnresolvedFilterParameterId } from "./UnresolvedFilterParameterId.js";
/**
* An unresolved filter parameter.
*/
export interface UnresolvedFilterParameter {
	parameterId: UnresolvedFilterParameterId;
	name: string;
	description: string | undefined;
	defaultValue: FilterValue | undefined;
}
