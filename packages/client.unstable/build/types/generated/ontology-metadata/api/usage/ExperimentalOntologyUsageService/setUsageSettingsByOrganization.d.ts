import { type ConjureContext } from "conjure-lite";
import type { OrganizationRid } from "../../OrganizationRid.js";
import type { SetUsageSettingsByOrganizationRequest } from "../SetUsageSettingsByOrganizationRequest.js";
import type { SetUsageSettingsByOrganizationResponse } from "../SetUsageSettingsByOrganizationResponse.js";
/**
* Endpoint to modify the Ontology Usage setting for an organization. User requires
* `ontology:manage-metrics` on the OrganizationRid.
*/
export declare function setUsageSettingsByOrganization(ctx: ConjureContext, organizationRid: OrganizationRid, request: SetUsageSettingsByOrganizationRequest): Promise<SetUsageSettingsByOrganizationResponse>;
