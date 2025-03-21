import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { UnrestrictedParameterInterfacePropertyValue } from "./UnrestrictedParameterInterfacePropertyValue.js";
export interface ParameterInterfacePropertyValueOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterInterfacePropertyValueOrEmpty_unrestricted {
	type: "unrestricted";
	unrestricted: UnrestrictedParameterInterfacePropertyValue;
}
/**
* [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
* values.
*/
export type ParameterInterfacePropertyValueOrEmpty = ParameterInterfacePropertyValueOrEmpty_empty | ParameterInterfacePropertyValueOrEmpty_unrestricted;
