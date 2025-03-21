import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationSdk } from "../ApplicationSdk.js";
import type { CreateApplicationSdkRequestV2 } from "../CreateApplicationSdkRequestV2.js";
/**
* Create a new SDK for an application.
*
* Requires third-party-application:create-sdk on the application rid.
*/
export declare function createSdkV2(ctx: ConjureContext, applicationRid: ApplicationRid, request: CreateApplicationSdkRequestV2): Promise<ApplicationSdk>;
