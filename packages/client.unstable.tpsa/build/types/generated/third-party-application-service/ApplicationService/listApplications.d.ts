import { type ConjureContext } from "conjure-lite";
import type { ApplicationPageToken } from "../ApplicationPageToken.js";
import type { ListApplicationsResponse } from "../ListApplicationsResponse.js";
import type { PageSize } from "../PageSize.js";
/**
* Get all third-party application definitions. The latest version of each third-party
* application will be returned.
*
* Only applications where the user has third-party-application:view-application on
* the application rid will be returned.
*/
export declare function listApplications(ctx: ConjureContext, pageSize: PageSize | undefined, pageToken: ApplicationPageToken | undefined): Promise<ListApplicationsResponse>;
