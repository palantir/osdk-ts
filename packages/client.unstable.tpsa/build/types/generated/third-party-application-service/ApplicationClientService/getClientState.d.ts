import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ClientState } from "../ClientState.js";
/**
* Get an application's current client state
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function getClientState(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<ClientState>;
