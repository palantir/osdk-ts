import type { MavenPackageName } from "./MavenPackageName.js";
import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
import type { SdkPackageStatus } from "./SdkPackageStatus.js";
import type { TelemetryContext } from "./TelemetryContext.js";
/**
* A Java Maven SDK for the application. It may be installed through the
* application's artifacts repository with an appropriate token for authentication.
*/
export interface MavenSdk {
	mavenPackageName: MavenPackageName;
	javaGeneratorVersion: SdkGeneratorVersion;
	status: SdkPackageStatus;
	telemetryContext: TelemetryContext | undefined;
	enableBetaFeatures: boolean;
}
