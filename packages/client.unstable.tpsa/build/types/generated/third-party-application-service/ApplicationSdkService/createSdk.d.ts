import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationSdk } from "../ApplicationSdk.js";
import type { CreateApplicationSdkRequest } from "../CreateApplicationSdkRequest.js";
/**
* Create a new SDK for an application.
*
* Requires third-party-application:create-sdk on the application rid.
*/
export declare function createSdk(ctx: ConjureContext, applicationRid: ApplicationRid, request: CreateApplicationSdkRequest): Promise<ApplicationSdk>;
