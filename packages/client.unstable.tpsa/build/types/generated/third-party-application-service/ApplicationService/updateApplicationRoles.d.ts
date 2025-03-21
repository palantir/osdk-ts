import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { UpdateApplicationRolesRequest } from "../UpdateApplicationRolesRequest.js";
/**
* Update the role grants on a third-party application.
*
* Requires third-party-application:manage-application-roles on the application rid.
*/
export declare function updateApplicationRoles(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRolesRequest): Promise<void>;
