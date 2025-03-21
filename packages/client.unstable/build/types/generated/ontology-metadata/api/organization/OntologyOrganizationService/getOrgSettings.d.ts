import { type ConjureContext } from "conjure-lite";
import type { OrganizationRid } from "../../OrganizationRid.js";
import type { GetOrgSettingsRequest } from "../GetOrgSettingsRequest.js";
import type { GetOrgSettingsResponse } from "../GetOrgSettingsResponse.js";
/**
* Endpoint to load organization-wide Ontology settings. Returns either the stored value
* if one was set for the organization or otherwise the default value.
* Throws if the user does not have permissions to view the organization metadata in multipass or if the
* organization doesn't exist.
*/
export declare function getOrgSettings(ctx: ConjureContext, organizationRid: OrganizationRid, request: GetOrgSettingsRequest): Promise<GetOrgSettingsResponse>;
