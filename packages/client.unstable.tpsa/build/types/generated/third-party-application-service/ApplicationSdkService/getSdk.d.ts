import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationSdk } from "../ApplicationSdk.js";
import type { SdkVersion } from "../SdkVersion.js";
/**
* Get an SDK version for an application.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function getSdk(ctx: ConjureContext, applicationRid: ApplicationRid, sdkVersion: SdkVersion): Promise<ApplicationSdk>;
