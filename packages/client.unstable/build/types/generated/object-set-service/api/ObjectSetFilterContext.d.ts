import type { FilterValue } from "./FilterValue.js";
import type { UnresolvedFilterParameterId } from "./UnresolvedFilterParameterId.js";
/**
* Overrides for unresolved filter parameters in used parameterized object set filters.
*/
export interface ObjectSetFilterContext {
	parameterOverrides: Record<UnresolvedFilterParameterId, FilterValue>;
}
