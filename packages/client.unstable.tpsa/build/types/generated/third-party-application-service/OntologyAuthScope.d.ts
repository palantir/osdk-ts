import type { ActionTypeAuthScope } from "./ActionTypeAuthScope.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { CompassProjectRid } from "./CompassProjectRid.js";
import type { FunctionAuthScope } from "./FunctionAuthScope.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeAuthScope } from "./LinkTypeAuthScope.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeAuthScope } from "./ObjectTypeAuthScope.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { ProjectAdditionReason } from "./ProjectAdditionReason.js";
export interface OntologyAuthScope {
	ontologyRid: OntologyRid;
	objectTypes: Record<ObjectTypeRid, ObjectTypeAuthScope>;
	linkTypes: Record<LinkTypeRid, LinkTypeAuthScope>;
	actionTypes: Record<ActionTypeRid, ActionTypeAuthScope>;
	functions: Record<FunctionRid, FunctionAuthScope>;
	interfaceTypes: Array<InterfaceTypeRid>;
	ontologyPackages: Array<OntologyPackageRid>;
	projects: Record<CompassProjectRid, Array<ProjectAdditionReason>>;
}
