import type { SdkVersion, Template } from "./templates.js";
interface RunArgs {
	project: string;
	overwrite: boolean;
	template: Template;
	sdkVersion: SdkVersion;
	foundryUrl: string;
	applicationUrl: string | undefined;
	application: string;
	clientId: string;
	osdkPackage: string;
	osdkRegistryUrl: string;
	corsProxy: boolean;
	scopes: string[] | undefined;
}
export declare function run({ project, overwrite, template, sdkVersion, foundryUrl, applicationUrl, application, clientId, osdkPackage, osdkRegistryUrl, corsProxy, scopes }: RunArgs): Promise<void>;
export {};
