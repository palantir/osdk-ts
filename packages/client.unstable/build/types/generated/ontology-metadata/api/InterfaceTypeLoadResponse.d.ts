import type { InterfaceType } from "./InterfaceType.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
export interface InterfaceTypeLoadResponse {
	interfaceType: InterfaceType;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
