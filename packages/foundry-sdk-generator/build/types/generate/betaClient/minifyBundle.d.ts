import type { Project } from "ts-morph";
export declare class ProjectMinifier {
	private project;
	private startingImportSet;
	private startingFilePath;
	private nodesToKeep;
	private visitedImports;
	private dependentExport;
	private stack;
	constructor(project: Project, startingImportSet: Set<string>, startingFilePath: string);
	private shouldContinueVisiting;
	private getNextVisit;
	private pushNextVisit;
	private shouldSkipTraversal;
	private getNodesToKeepForModule;
	minifyProject(): void;
	private visitNamedImports;
	private visitNamedExports;
	private visitDeclaration;
	private deleteUnused;
	private visitDependentExports;
}
