import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";
export declare function handleGenerate(args: TypescriptGenerateArgs): Promise<void>;
export declare function updateVersionsIfTheyExist(packageJson: any, versions: Record<string, string>): void;
export declare function getDependencyVersions(): Promise<{
	typescriptVersion: string
	tslibVersion: string
	areTheTypesWrongVersion: string
	osdkApiVersion: string
	osdkClientVersion: string
	osdkLegacyClientVersion: string
}>;
