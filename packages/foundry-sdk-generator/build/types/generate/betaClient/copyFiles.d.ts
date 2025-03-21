import type { Project } from "ts-morph";
export declare function copyFiles(project: Project, dirs: string[], generatedPackageName: string, generatedFiles: {
	[fileName: string]: string
}): Promise<Set<string>>;
