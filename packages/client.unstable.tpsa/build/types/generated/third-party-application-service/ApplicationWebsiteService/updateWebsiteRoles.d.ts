import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { UpdateWebsiteRolesRequest } from "../UpdateWebsiteRolesRequest.js";
/**
* Update the role grants on a third party application's website repository.
*
* Currently only viewer patches are allowed to be added on the repository which
* controls which end users have access to load the website. The permissions of the
* overall third party application are also inherited by the repository meaning
* that developers who can view the third party application automatically have
* access to load the website.
*
* Requires third-party-application:manage-application-website-roles on the application rid.
*/
export declare function updateWebsiteRoles(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateWebsiteRolesRequest): Promise<void>;
