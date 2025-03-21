import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterInterfaceObjectQueryModification } from "./ParameterInterfaceObjectQueryModification.js";
export interface ParameterInterfaceObjectQueryOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterInterfaceObjectQueryOrEmptyModification_interfaceObjectQuery {
	type: "interfaceObjectQuery";
	interfaceObjectQuery: ParameterInterfaceObjectQueryModification;
}
/**
* [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
* values.
*/
export type ParameterInterfaceObjectQueryOrEmptyModification = ParameterInterfaceObjectQueryOrEmptyModification_empty | ParameterInterfaceObjectQueryOrEmptyModification_interfaceObjectQuery;
