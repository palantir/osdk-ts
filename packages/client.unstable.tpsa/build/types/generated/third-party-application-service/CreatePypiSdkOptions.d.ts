import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
export interface CreatePypiSdkOptions {
	generatorVersion: SdkGeneratorVersion | undefined;
	enableBetaFeatures: boolean | undefined;
}
