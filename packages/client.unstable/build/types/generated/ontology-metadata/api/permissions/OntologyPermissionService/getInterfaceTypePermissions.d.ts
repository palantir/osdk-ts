import { type ConjureContext } from "conjure-lite";
import type { InterfaceTypeRid } from "../../InterfaceTypeRid.js";
import type { GetInterfaceTypePermissionsResponse } from "../GetInterfaceTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the InterfaceType.
*/
export declare function getInterfaceTypePermissions(ctx: ConjureContext, interfaceTypeRid: InterfaceTypeRid): Promise<GetInterfaceTypePermissionsResponse>;
