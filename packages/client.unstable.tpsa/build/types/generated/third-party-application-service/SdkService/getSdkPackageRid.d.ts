import { type ConjureContext } from "conjure-lite";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { PackageName } from "../PackageName.js";
import type { SdkPackageRid } from "../SdkPackageRid.js";
/**
* Get the SDK package rid of an SDK package.
*
* Knowing an SDKs rid is needed i.e. when packaging it through Marketplace/DevOps.
*
* Will return empty if no SDK with the provided package name exists in the repository.
*
* Requires third-party-application:view-standalone-sdk on the repository rid.
*/
export declare function getSdkPackageRid(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName): Promise<SdkPackageRid | undefined>;
