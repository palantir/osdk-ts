import type { CompassProjectRid } from "../CompassProjectRid.js";
import type { UseCaseRid } from "../UseCaseRid.js";
export interface OwningResource_useCase {
	type: "useCase";
	useCase: UseCaseRid;
}
export interface OwningResource_compassProject {
	type: "compassProject";
	compassProject: CompassProjectRid;
}
/**
* The resource that owns the ontology package.
*/
export type OwningResource = OwningResource_useCase | OwningResource_compassProject;
