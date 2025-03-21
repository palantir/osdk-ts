import type { OntologyPackageRid } from "../OntologyPackageRid.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OwningResource } from "./OwningResource.js";
/**
* Metadata of an ontology package
*/
export interface OntologyPackageMetadata {
	packageRid: OntologyPackageRid;
	owningRid: OwningResource;
	ontologyRid: OntologyRid;
}
