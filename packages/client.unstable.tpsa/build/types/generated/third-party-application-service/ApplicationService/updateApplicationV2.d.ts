import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { UpdateApplicationRequestV2 } from "../UpdateApplicationRequestV2.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Update a third-party application definition.
*
* Requires third-party-application:edit-application on the application rid.
*/
export declare function updateApplicationV2(ctx: ConjureContext, applicationRid: ApplicationRid, request: UpdateApplicationRequestV2): Promise<VersionedApplication>;
