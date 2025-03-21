import { type ConjureContext } from "conjure-lite";
import type { SharedPropertyTypeRid } from "../../SharedPropertyTypeRid.js";
import type { GetSharedPropertyTypePermissionsResponse } from "../GetSharedPropertyTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the SharedPropertyType.
*/
export declare function getSharedPropertyTypePermissions(ctx: ConjureContext, sharedPropertyTypeRid: SharedPropertyTypeRid): Promise<GetSharedPropertyTypePermissionsResponse>;
