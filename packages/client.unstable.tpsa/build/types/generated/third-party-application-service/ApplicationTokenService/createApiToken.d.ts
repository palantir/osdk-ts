import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { CreateApiTokenRequest } from "../CreateApiTokenRequest.js";
/**
* Creates a user generated token with a scope determined by the requested capabilities.
* The user can subsequently disable or revoke the token themselves through Multipass.
*
* Requires third-party-application:create-api-token on the application rid.
*/
export declare function createApiToken(ctx: ConjureContext, applicationRid: ApplicationRid, request: CreateApiTokenRequest): Promise<string>;
