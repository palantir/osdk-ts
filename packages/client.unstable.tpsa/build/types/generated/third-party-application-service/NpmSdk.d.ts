import type { NpmPackageName } from "./NpmPackageName.js";
import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
import type { SdkPackageStatus } from "./SdkPackageStatus.js";
import type { TelemetryContext } from "./TelemetryContext.js";
/**
* An NPM SDK for the application. It may be installed through the application's
* artifacts repository with an appropriate token for authentication.
*/
export interface NpmSdk {
	npmPackageName: NpmPackageName;
	npmGeneratorVersion: SdkGeneratorVersion;
	status: SdkPackageStatus;
	telemetryContext: TelemetryContext | undefined;
	enableBetaFeatures: boolean;
}
