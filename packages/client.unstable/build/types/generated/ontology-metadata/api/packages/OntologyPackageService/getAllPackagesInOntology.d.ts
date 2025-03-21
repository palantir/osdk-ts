import { type ConjureContext } from "conjure-lite";
import type { OntologyPackageRid } from "../../OntologyPackageRid.js";
import type { OntologyRid } from "../../OntologyRid.js";
import type { OntologyPackageMetadata } from "../OntologyPackageMetadata.js";
/**
* Gets all packages in the specified ontology. Requires `ontology:view-ontology` on the ontology rid and
* packages where the user does not have `ontology:discover-package` will be filtered out.
*/
export declare function getAllPackagesInOntology(ctx: ConjureContext, ontologyRid: OntologyRid): Promise<Record<OntologyPackageRid, OntologyPackageMetadata>>;
