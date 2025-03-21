import { type ConjureContext } from "conjure-lite";
import type { ObjectTypeRid } from "../../ObjectTypeRid.js";
import type { GetObjectTypePermissionsResponse } from "../GetObjectTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the ObjectType.
*/
export declare function getObjectTypePermissions(ctx: ConjureContext, objectTypeRid: ObjectTypeRid): Promise<GetObjectTypePermissionsResponse>;
