import type { CompassProjectRid } from "../CompassProjectRid.js";
import type { OntologyPackageRid } from "../OntologyPackageRid.js";
import type { LinkTypeModification } from "./LinkTypeModification.js";
export interface LinkTypeCreate {
	linkType: LinkTypeModification;
	packageRid: OntologyPackageRid | undefined;
	projectRid: CompassProjectRid | undefined;
}
