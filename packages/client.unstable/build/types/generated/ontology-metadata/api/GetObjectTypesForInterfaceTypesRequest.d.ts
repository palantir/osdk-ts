import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to get a map of interfaces to the set of object types that implement the interface, directly and
* indirectly.
*/
export interface GetObjectTypesForInterfaceTypesRequest {
	ontologyVersion: OntologyVersion | undefined;
	interfaceTypeRids: Array<InterfaceTypeRid>;
}
