import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { CreateClientResponse } from "../CreateClientResponse.js";
/**
* Create an application's client.
*
* Requires third-party-application:create-oauth-client on the application rid.
*/
export declare function createClient(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<CreateClientResponse>;
