import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ApplicationSdkPageToken } from "../ApplicationSdkPageToken.js";
import type { ListApplicationSdksResponse } from "../ListApplicationSdksResponse.js";
import type { PageSize } from "../PageSize.js";
/**
* Get all SDKs for an application ordered by version descending.
*
* Requires third-party-application:view-application on the application rid.
*/
export declare function listSdks(ctx: ConjureContext, applicationRid: ApplicationRid, pageSize: PageSize | undefined, pageToken: ApplicationSdkPageToken | undefined): Promise<ListApplicationSdksResponse>;
