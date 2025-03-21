import { type ConjureContext } from "conjure-lite";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { ListSdksResponse } from "../ListSdksResponse.js";
import type { PackageName } from "../PackageName.js";
import type { PageSize } from "../PageSize.js";
import type { SdkPageToken } from "../SdkPageToken.js";
/**
* Get all SDKs for a package, ordered by version descending.
*
* Requires third-party-application:view-standalone-sdk on the repository rid.
*/
export declare function listSdks(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName, pageSize: PageSize | undefined, pageToken: SdkPageToken | undefined): Promise<ListSdksResponse>;
