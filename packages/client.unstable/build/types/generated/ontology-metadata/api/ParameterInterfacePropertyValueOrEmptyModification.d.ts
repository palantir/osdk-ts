import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { UnrestrictedParameterInterfacePropertyValue } from "./UnrestrictedParameterInterfacePropertyValue.js";
export interface ParameterInterfacePropertyValueOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterInterfacePropertyValueOrEmptyModification_unrestricted {
	type: "unrestricted";
	unrestricted: UnrestrictedParameterInterfacePropertyValue;
}
/**
* [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
* values.
*/
export type ParameterInterfacePropertyValueOrEmptyModification = ParameterInterfacePropertyValueOrEmptyModification_empty | ParameterInterfacePropertyValueOrEmptyModification_unrestricted;
