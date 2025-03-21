import type { OntologyParent } from "./OntologyParent.js";
import type { PackageParent } from "./PackageParent.js";
export interface EntityParent_package {
	type: "package";
	package: PackageParent;
}
export interface EntityParent_project {
	type: "project";
	project: OntologyParent;
}
export type EntityParent = EntityParent_package | EntityParent_project;
