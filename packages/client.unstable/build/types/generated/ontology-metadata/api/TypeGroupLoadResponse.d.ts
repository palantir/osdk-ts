import type { OntologyRid } from "./OntologyRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { TypeGroup } from "./TypeGroup.js";
export interface TypeGroupLoadResponse {
	typeGroup: TypeGroup;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
	numberOfObjectTypes: number | undefined;
	numberOfActionTypes: number | undefined;
}
