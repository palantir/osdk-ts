import { type ConjureContext } from "conjure-lite";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { ListSdkPackagesResponse } from "../ListSdkPackagesResponse.js";
import type { PageSize } from "../PageSize.js";
import type { SdkPackagePageToken } from "../SdkPackagePageToken.js";
/**
* Get all known SDK packages for a repository.
*
* Requires third-party-application:view-standalone-sdk on the repository rid.
*/
export declare function listSdkPackages(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, pageSize: PageSize | undefined, pageToken: SdkPackagePageToken | undefined): Promise<ListSdkPackagesResponse>;
