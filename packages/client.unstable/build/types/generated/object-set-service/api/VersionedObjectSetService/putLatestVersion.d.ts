import { type ConjureContext } from "conjure-lite";
import type { LatestVersionResponse } from "../LatestVersionResponse.js";
import type { UpdateLatestVersionRequest } from "../UpdateLatestVersionRequest.js";
import type { VersionedObjectSetRid } from "../VersionedObjectSetRid.js";
/**
* Updates the latest version of this versioned object set to be the supplied object set.
*/
export declare function putLatestVersion(ctx: ConjureContext, versionedObjectSetRid: VersionedObjectSetRid, request: UpdateLatestVersionRequest): Promise<LatestVersionResponse>;
