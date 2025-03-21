import type { SdkGeneratorVersion } from "./SdkGeneratorVersion.js";
export interface CreateCondaSdkOptions {
	generatorVersion: SdkGeneratorVersion | undefined;
	enableBetaFeatures: boolean | undefined;
}
