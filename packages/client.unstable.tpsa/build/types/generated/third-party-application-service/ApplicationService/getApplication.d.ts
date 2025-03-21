import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Get a third-party application definition. The latest version of the application
* will be returned.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function getApplication(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<VersionedApplication>;
