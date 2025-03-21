import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { UpdateApplicationRequestV3 } from "../UpdateApplicationRequestV3.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Update a third-party application definition.
*
* Requires third-party-application:edit-application on the application rid.
*/
export declare function updateApplicationV3(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRequestV3): Promise<VersionedApplication>;
