import { type ConjureContext } from "conjure-lite";
import type { LinkTypeRid } from "../../LinkTypeRid.js";
import type { GetLinkTypePermissionsResponse } from "../GetLinkTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the LinkType.
*/
export declare function getLinkTypePermissions(ctx: ConjureContext, linkTypeRid: LinkTypeRid): Promise<GetLinkTypePermissionsResponse>;
