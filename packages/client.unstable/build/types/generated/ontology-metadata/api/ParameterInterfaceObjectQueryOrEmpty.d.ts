import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterInterfaceObjectQuery } from "./ParameterInterfaceObjectQuery.js";
export interface ParameterInterfaceObjectQueryOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterInterfaceObjectQueryOrEmpty_interfaceObjectQuery {
	type: "interfaceObjectQuery";
	interfaceObjectQuery: ParameterInterfaceObjectQuery;
}
/**
* [WIP] Allows any values for now until interfaces are supported in OSS. If empty, it will only allow empty
* values.
*/
export type ParameterInterfaceObjectQueryOrEmpty = ParameterInterfaceObjectQueryOrEmpty_empty | ParameterInterfaceObjectQueryOrEmpty_interfaceObjectQuery;
