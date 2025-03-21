import type { MavenGroupId } from "./MavenGroupId.js";
export interface ApplicationSdkSettings {
	enableTypescriptBetaFeatures: boolean;
	enablePythonBetaFeatures: boolean;
	enableJavaBetaFeatures: boolean;
	mavenGroupId: MavenGroupId | undefined;
}
