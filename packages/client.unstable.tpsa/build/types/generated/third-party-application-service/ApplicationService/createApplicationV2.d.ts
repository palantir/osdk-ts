import { type ConjureContext } from "conjure-lite";
import type { CreateApplicationRequestV2 } from "../CreateApplicationRequestV2.js";
import type { VersionedApplication } from "../VersionedApplication.js";
/**
* Create a new third-party application.
*
* Requires third-party-application:create-application on the organization
* rid for the application.
*/
export declare function createApplicationV2(ctx: ConjureContext, request: CreateApplicationRequestV2): Promise<VersionedApplication>;
