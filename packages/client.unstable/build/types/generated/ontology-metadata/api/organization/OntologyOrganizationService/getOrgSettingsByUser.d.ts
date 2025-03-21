import { type ConjureContext } from "conjure-lite";
import type { GetOrgSettingsByUserRequest } from "../GetOrgSettingsByUserRequest.js";
import type { GetOrgSettingsByUserResponse } from "../GetOrgSettingsByUserResponse.js";
/**
* Endpoint to load organization-wide Ontology settings for the user sending the request based on the
* user's membership of an organization.
* Endpoint will throw if the user is not part of an organization or the user's organization cannot be loaded.
*/
export declare function getOrgSettingsByUser(ctx: ConjureContext, request: GetOrgSettingsByUserRequest): Promise<GetOrgSettingsByUserResponse>;
