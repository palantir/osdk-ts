export type SdkVersion = "1.x" | "2.x";
export type ModuleImportFiles = Map<string, {
	type: "base64"
	body: string
} | {
	type: "raw"
	body: string
}>;
export interface Template {
	id: string;
	label: string;
	envPrefix: string;
	buildDirectory: string;
	requiresOsdk: boolean;
	hidden?: boolean;
	isBeta?: boolean;
	files: { [K in SdkVersion]? : () => Promise<ModuleImportFiles> };
}
export interface TemplateContext {
	project: string;
	osdkPackage?: string;
}
