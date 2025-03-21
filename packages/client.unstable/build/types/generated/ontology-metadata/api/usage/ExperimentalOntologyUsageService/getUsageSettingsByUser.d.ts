import { type ConjureContext } from "conjure-lite";
import type { GetUsageSettingsByUserRequest } from "../GetUsageSettingsByUserRequest.js";
import type { GetUsageSettingsByUserResponse } from "../GetUsageSettingsByUserResponse.js";
/**
* Endpoint to load Ontology Usage settings for the user sending the request based on the user's membership
* of an organization.
*/
export declare function getUsageSettingsByUser(ctx: ConjureContext, request: GetUsageSettingsByUserRequest): Promise<GetUsageSettingsByUserResponse>;
