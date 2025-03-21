import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ClientId } from "../ClientId.js";
/**
* Get the application for a client. Returns empty if the client is not associated
* with an application.
*
* Requires third-party-application:view-oauth-client on the client rid based on its id.
*/
export declare function getApplicationForClient(ctx: ConjureContext, clientId: ClientId): Promise<ApplicationRid | undefined>;
