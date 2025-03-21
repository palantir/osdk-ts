import type { ActionTypeAuthScopePatch } from "./ActionTypeAuthScopePatch.js";
import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { AuthScopePatch } from "./AuthScopePatch.js";
import type { CompassProjectRid } from "./CompassProjectRid.js";
import type { FunctionAuthScopePatch } from "./FunctionAuthScopePatch.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { InterfaceTypeAuthScopePatch } from "./InterfaceTypeAuthScopePatch.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeAuthScopePatch } from "./LinkTypeAuthScopePatch.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeAuthScopePatch } from "./ObjectTypeAuthScopePatch.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyPackageRid } from "./OntologyPackageRid.js";
import type { ProjectAuthScopePatch } from "./ProjectAuthScopePatch.js";
export interface AuthScopeModification {
	objectTypeUpdates: Record<ObjectTypeRid, ObjectTypeAuthScopePatch>;
	linkTypeUpdates: Record<LinkTypeRid, LinkTypeAuthScopePatch>;
	actionTypeUpdates: Record<ActionTypeRid, ActionTypeAuthScopePatch>;
	functionUpdates: Record<FunctionRid, FunctionAuthScopePatch>;
	interfaceTypeUpdates: Record<InterfaceTypeRid, InterfaceTypeAuthScopePatch>;
	ontologyPackageUpdates: Record<OntologyPackageRid, AuthScopePatch>;
	projectUpdates: Record<CompassProjectRid, ProjectAuthScopePatch>;
}
