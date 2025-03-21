import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
/**
* Get the application for an SDK repository. Returns empty if the repository rid
* is not an SDK repository for an application.
*
* Requires third-party-application:view-repository on the repository rid.
*/
export declare function getApplicationForSdkRepository(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid): Promise<ApplicationRid | undefined>;
