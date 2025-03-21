import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationVersionPageToken } from "../ApplicationVersionPageToken.js";
import type { ListApplicationVersionsResponse } from "../ListApplicationVersionsResponse.js";
import type { PageSize } from "../PageSize.js";
/**
* Get metadata of all versions of a third-party application ordered by latest first.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function listApplicationVersions(ctx: ConjureContext, applicationRid: ApplicationRid, pageSize: PageSize | undefined, pageToken: ApplicationVersionPageToken | undefined): Promise<ListApplicationVersionsResponse>;
