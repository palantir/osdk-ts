import { type ConjureContext } from "conjure-lite";
import type { SdkPackage } from "../SdkPackage.js";
import type { SdkPackageRid } from "../SdkPackageRid.js";
/**
* Get an SDK package.
*
* Requires third-party-application:view-standalone-sdk on the SDK package rid.
*/
export declare function getSdkPackage(ctx: ConjureContext, sdkPackageRid: SdkPackageRid): Promise<SdkPackage>;
