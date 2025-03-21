import { type ConjureContext } from "conjure-lite";
import type { CreateApplicationRequest } from "../CreateApplicationRequest.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Create a new third-party application.
*
* Requires third-party-application:create-application on the organization
* rid for the application.
*/
export declare function createApplication(ctx: ConjureContext, request: CreateApplicationRequest): Promise<VersionedApplication>;
