import type { AllPropertiesPropertySetV2 } from "./AllPropertiesPropertySetV2.js";
import type { SelectedPropertiesPropertySetV2 } from "./SelectedPropertiesPropertySetV2.js";
import type { SelectedTypesPropertySetV2 } from "./SelectedTypesPropertySetV2.js";
export interface PropertySetV2_selected {
	type: "selected";
	selected: SelectedPropertiesPropertySetV2;
}
export interface PropertySetV2_selectedTypes {
	type: "selectedTypes";
	selectedTypes: SelectedTypesPropertySetV2;
}
export interface PropertySetV2_allProperties {
	type: "allProperties";
	allProperties: AllPropertiesPropertySetV2;
}
/**
* Specification of a subset of properties to load.
*/
export type PropertySetV2 = PropertySetV2_selected | PropertySetV2_selectedTypes | PropertySetV2_allProperties;
