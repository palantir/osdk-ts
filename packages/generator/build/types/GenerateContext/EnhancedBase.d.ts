import type { EnhanceCommon } from "./EnhanceCommon.js";
export declare abstract class AbstractImportable {
	protected _common: EnhanceCommon;
	shortApiName: string;
	fullApiName: string;
	apiNamespace: string | undefined;
	/**
	* Either a path relative to the ourDir (e.g. "./ontology/objects/foo.js") or a normal
	* module import (e.g. "@something/foo")/
	*/
	importPath: string;
	uniqueImportName: string;
	constructor(common: EnhanceCommon, fullApiName: string, basePath: string, isLocal?: boolean);
	getImportPathRelTo: (filePath: string) => string;
}
export declare abstract class EnhancedBase<T> extends AbstractImportable {
	raw: T;
	constructor(common: EnhanceCommon, raw: T, fullApiName: string, basePath: string);
}
export declare function extractNamespace(fqApiName: string): [string | undefined, string];
