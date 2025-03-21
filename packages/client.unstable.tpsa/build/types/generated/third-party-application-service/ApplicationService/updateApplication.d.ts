import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { UpdateApplicationRequest } from "../UpdateApplicationRequest.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Update a third-party application definition.
*
* Requires third-party-application:edit-application on the application rid.
*/
export declare function updateApplication(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRequest): Promise<VersionedApplication>;
