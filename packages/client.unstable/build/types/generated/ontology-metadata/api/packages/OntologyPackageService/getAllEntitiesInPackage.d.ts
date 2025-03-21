import { type ConjureContext } from "conjure-lite";
import type { OntologyPackageRid } from "../../OntologyPackageRid.js";
import type { PackagedEntityRid } from "../../PackagedEntityRid.js";
/**
* Gets all entities in the specified package.
*/
export declare function getAllEntitiesInPackage(ctx: ConjureContext, packageRid: OntologyPackageRid): Promise<Array<PackagedEntityRid>>;
