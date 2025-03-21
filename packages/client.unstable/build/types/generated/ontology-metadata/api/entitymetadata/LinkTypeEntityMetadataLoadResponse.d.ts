import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { LinkTypeEntityMetadata } from "./LinkTypeEntityMetadata.js";
import type { LinkTypeSystemEntityMetadata } from "./LinkTypeSystemEntityMetadata.js";
/**
* Response to LinkTypeEntityMetadataLoadRequest.
*/
export interface LinkTypeEntityMetadataLoadResponse {
	linkTypeRid: LinkTypeRid;
	linkTypeEntityMetadata: LinkTypeEntityMetadata;
	linkTypeSystemEntityMetadata: LinkTypeSystemEntityMetadata | undefined;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
