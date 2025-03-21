import { type ConjureContext } from "conjure-lite";
import type { ActionTypeRid } from "../../ActionTypeRid.js";
import type { GetActionTypePermissionsResponse } from "../GetActionTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the ActionType.
*/
export declare function getActionTypePermissions(ctx: ConjureContext, actionTypeRid: ActionTypeRid): Promise<GetActionTypePermissionsResponse>;
