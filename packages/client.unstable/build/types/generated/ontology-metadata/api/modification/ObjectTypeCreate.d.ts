import type { CompassProjectRid } from "../CompassProjectRid.js";
import type { OntologyPackageRid } from "../OntologyPackageRid.js";
import type { ObjectTypeModification } from "./ObjectTypeModification.js";
export interface ObjectTypeCreate {
	objectType: ObjectTypeModification;
	packageRid: OntologyPackageRid | undefined;
	projectRid: CompassProjectRid | undefined;
}
