import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
/**
* Delete a third-party application and its associated clients.
*
* Requires third-party-application:delete-application on the application rid.
*/
export declare function deleteApplication(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<void>;
