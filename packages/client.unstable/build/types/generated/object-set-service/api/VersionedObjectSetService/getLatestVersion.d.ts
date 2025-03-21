import { type ConjureContext } from "conjure-lite";
import type { LatestVersionResponse } from "../LatestVersionResponse.js";
import type { VersionedObjectSetRid } from "../VersionedObjectSetRid.js";
/**
* Returns the latest version of this versioned object set.
*/
export declare function getLatestVersion(ctx: ConjureContext, versionedObjectSetRid: VersionedObjectSetRid): Promise<LatestVersionResponse>;
