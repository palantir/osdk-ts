import type { MavenGroupId } from "./MavenGroupId.js";
import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
export interface CreateMavenSdkOptions {
	generatorVersion: SdkGeneratorVersion | undefined;
	enableBetaFeatures: boolean | undefined;
	mavenGroupId: MavenGroupId | undefined;
}
