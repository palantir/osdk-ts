import type { SdkVersion, Template } from "../templates.js";
export declare function promptSdkVersion({ sdkVersion, template }: {
	sdkVersion?: string
	template: Template
}): Promise<SdkVersion>;
