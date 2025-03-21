import type { SdkVersion, Template } from "./templates.js";
interface RunArgs {
	project: string;
	overwrite: boolean;
	template: Template;
	sdkVersion: SdkVersion;
	foundryUrl: string;
	widgetSet: string;
	osdkPackage?: string;
	osdkRegistryUrl?: string;
}
export declare function run({ project, overwrite, template, sdkVersion, foundryUrl, widgetSet, osdkPackage, osdkRegistryUrl }: RunArgs): Promise<void>;
export {};
