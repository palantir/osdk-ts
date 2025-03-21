import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationWebsite } from "../ApplicationWebsite.js";
/**
* Get the website for an application.
*
* The Artifacts Sites APIs can be used to manage uploading and deploying
* a website to the returned repository.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function getWebsite(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<ApplicationWebsite>;
