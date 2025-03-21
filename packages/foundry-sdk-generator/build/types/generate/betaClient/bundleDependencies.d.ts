import { Project } from "ts-morph";
export declare function bundleDependencies(dirs: string[], generatedPackageName: string, generatedFiles: {
	[fileName: string]: string
}, entry?: string): Promise<string>;
export declare function outputModule(project: Project): string;
