import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationVersion } from "../ApplicationVersion.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Get a third-party application definition at the specified version.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function getApplicationVersion(ctx: ConjureContext, applicationRid: ApplicationRid, applicationVersion: ApplicationVersion): Promise<VersionedApplication>;
