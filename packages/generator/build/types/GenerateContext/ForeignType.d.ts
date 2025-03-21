import type { EnhanceCommon } from "./EnhanceCommon.js";
import { AbstractImportable } from "./EnhancedBase.js";
export declare class ForeignType extends AbstractImportable {
	_common: EnhanceCommon;
	constructor(_common: EnhanceCommon, apiNamespace: string | undefined, shortApiName: string, destinationPackage: string);
	getImportedDefinitionIdentifier(v2: boolean): string;
	getDefinitionIdentifier(v2: boolean): string;
}
