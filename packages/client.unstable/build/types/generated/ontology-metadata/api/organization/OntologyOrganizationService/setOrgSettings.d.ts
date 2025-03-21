import { type ConjureContext } from "conjure-lite";
import type { OrganizationRid } from "../../OrganizationRid.js";
import type { SetOrgSettingsRequest } from "../SetOrgSettingsRequest.js";
import type { SetOrgSettingsResponse } from "../SetOrgSettingsResponse.js";
/**
* Endpoint to modify the organization-wide Ontology settings. User requires
* `ontology:manage-org-settings` on the OrganizationRid.
*/
export declare function setOrgSettings(ctx: ConjureContext, organizationRid: OrganizationRid, request: SetOrgSettingsRequest): Promise<SetOrgSettingsResponse>;
