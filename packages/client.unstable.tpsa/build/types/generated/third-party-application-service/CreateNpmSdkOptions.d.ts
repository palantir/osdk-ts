import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
export interface CreateNpmSdkOptions {
	generatorVersion: SdkGeneratorVersion | undefined;
	enableBetaFeatures: boolean | undefined;
	npmUnscopedPackageName: string | undefined;
}
