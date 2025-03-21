import { type ConjureContext } from "conjure-lite";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { CreateSdkRequest } from "../CreateSdkRequest.js";
import type { PackageName } from "../PackageName.js";
import type { Sdk } from "../Sdk.js";
import type { SdkVersion } from "../SdkVersion.js";
/**
* Create a new SDK
*
* If an SDK for this repositoryRid, packageName and sdkVersion already exists,
* SdkAlreadyExists will be thrown. All resources within the requested data scope
* must either be in the same project as the repositoryRid or added as project
* imports otherwise OntologyDataScopeProjectImportsRequired will be thrown.
*
* Requires third-party-application:create-standalone-sdk on the repository rid.
*/
export declare function createSdk(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName, sdkVersion: SdkVersion, request: CreateSdkRequest): Promise<Sdk>;
