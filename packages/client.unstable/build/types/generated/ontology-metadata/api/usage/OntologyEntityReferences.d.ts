import type { LinkTypeIdentifier } from "../LinkTypeIdentifier.js";
import type { ObjectTypeIdentifier } from "../ObjectTypeIdentifier.js";
import type { ObjectTypeAndPropertyTypeIdentifiers } from "./ObjectTypeAndPropertyTypeIdentifiers.js";
/**
* References to the different entities for which usage is reported.
*/
export interface OntologyEntityReferences {
	objectTypeAndPropertyTypeIdentifiers: Array<ObjectTypeAndPropertyTypeIdentifiers>;
	linkTypeIdentifiers: Array<LinkTypeIdentifier>;
	objectTypesWithAllProperties: Array<ObjectTypeIdentifier>;
}
