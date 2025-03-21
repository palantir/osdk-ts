import type { ModuleImportFiles } from "./templates.js";
export declare const getPackageFiles: (importPromise: Promise<{
	files: ModuleImportFiles
}>) => () => Promise<ModuleImportFiles>;
