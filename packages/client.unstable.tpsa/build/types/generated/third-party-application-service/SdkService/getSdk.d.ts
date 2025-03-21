import { type ConjureContext } from "conjure-lite";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { PackageName } from "../PackageName.js";
import type { Sdk } from "../Sdk.js";
import type { SdkVersion } from "../SdkVersion.js";
/**
* Get an SDK version.
*
* Requires third-party-application:view-standalone-sdk on the repository rid.
*/
export declare function getSdk(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName, sdkVersion: SdkVersion): Promise<Sdk>;
