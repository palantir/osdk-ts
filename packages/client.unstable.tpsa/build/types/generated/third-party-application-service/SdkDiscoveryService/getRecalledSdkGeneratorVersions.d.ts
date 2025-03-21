import { type ConjureContext } from "conjure-lite";
import type { SdkGeneratorType } from "../SdkGeneratorType.js";
import type { SdkGeneratorVersion } from "../SdkGeneratorVersion.js";
/**
* Get all recalled SDK generator versions ordered by version descending.
*
* Requires third-party-application:view-sdk-discovery on the service root node.
*/
export declare function getRecalledSdkGeneratorVersions(ctx: ConjureContext, sdkGeneratorType: SdkGeneratorType): Promise<Array<SdkGeneratorVersion>>;
