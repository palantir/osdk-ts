import { type ConjureContext } from "conjure-lite";
import type { ListSdkGeneratorVersionsResponse } from "../ListSdkGeneratorVersionsResponse.js";
import type { PageSize } from "../PageSize.js";
import type { SdkGeneratorType } from "../SdkGeneratorType.js";
import type { SdkGeneratorVersionPageToken } from "../SdkGeneratorVersionPageToken.js";
/**
* Get all SDK generator versions ordered by version descending.
*
* Requires third-party-application:view-sdk-discovery on the service root node.
*/
export declare function listSdkGeneratorVersions(ctx: ConjureContext, sdkGeneratorType: SdkGeneratorType, includeRecalled: boolean | undefined, pageSize: PageSize | undefined, pageToken: SdkGeneratorVersionPageToken | undefined): Promise<ListSdkGeneratorVersionsResponse>;
