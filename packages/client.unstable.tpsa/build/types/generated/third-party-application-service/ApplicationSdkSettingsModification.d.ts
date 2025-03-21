import type { OptionalStringModification } from "./OptionalStringModification.js";
/**
* Only fields that are present will be updated.
*/
export interface ApplicationSdkSettingsModification {
	enableTypescriptBetaFeatures: boolean | undefined;
	enablePythonBetaFeatures: boolean | undefined;
	enableJavaBetaFeatures: boolean | undefined;
	mavenGroupId: OptionalStringModification | undefined;
}
