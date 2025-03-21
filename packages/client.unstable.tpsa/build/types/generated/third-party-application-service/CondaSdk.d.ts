import type { PythonPackageName } from "./PythonPackageName.js";
import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
import type { SdkPackageStatus } from "./SdkPackageStatus.js";
import type { TelemetryContext } from "./TelemetryContext.js";
/**
* A Python Conda SDK for the application. It may be installed through the
* application's artifacts repository with an appropriate token for authentication.
*/
export interface CondaSdk {
	pythonPackageName: PythonPackageName;
	pythonGeneratorVersion: SdkGeneratorVersion;
	status: SdkPackageStatus;
	telemetryContext: TelemetryContext | undefined;
	enableBetaFeatures: boolean;
}
