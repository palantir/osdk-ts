import { type ConjureContext } from "conjure-lite";
import type { OrganizationRid } from "../../OrganizationRid.js";
import type { GetUsageSettingsByOrganizationRequest } from "../GetUsageSettingsByOrganizationRequest.js";
import type { GetUsageSettingsByOrganizationResponse } from "../GetUsageSettingsByOrganizationResponse.js";
/**
* Endpoint to load Ontology Usage settings for an organization. Returns either the stored value
* if one was set for the organization or otherwise the default value (Usage is enabled by default).
* Throws if the user does not have permissions to view the organization metadata in multipass or if the
* organization doesn't exist.
*/
export declare function getUsageSettingsByOrganization(ctx: ConjureContext, organizationRid: OrganizationRid, request: GetUsageSettingsByOrganizationRequest): Promise<GetUsageSettingsByOrganizationResponse>;
