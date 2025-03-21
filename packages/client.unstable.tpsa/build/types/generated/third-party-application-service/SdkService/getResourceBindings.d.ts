import { type ConjureContext } from "conjure-lite";
import type { ArtifactsRepositoryRid } from "../ArtifactsRepositoryRid.js";
import type { PackageName } from "../PackageName.js";
import type { ResourceBindings } from "../ResourceBindings.js";
/**
* Get the resource bindings to use for an SDK.
*
* This endpoint will return the resource rids of the local stack which are bound to the
* api names of the SDK for the newest sdk version with this repository rid and package name.
* The bindings will allow the SDK to use the original bound api name while pointing to the local
* resource.
*
* Requires third-party-application:view-standalone-sdk on the repository rid.
*/
export declare function getResourceBindings(ctx: ConjureContext, repositoryRid: ArtifactsRepositoryRid, packageName: PackageName): Promise<ResourceBindings>;
