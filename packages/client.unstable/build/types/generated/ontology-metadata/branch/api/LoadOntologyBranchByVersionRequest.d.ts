import type { OntologyRid } from "../../api/OntologyRid.js";
import type { OntologyVersion } from "../../api/OntologyVersion.js";
export interface LoadOntologyBranchByVersionRequest {
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
