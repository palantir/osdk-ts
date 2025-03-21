import type { InterfaceMetadata } from "@osdk/api";
import type { InterfaceType } from "@osdk/foundry.ontologies";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";
export declare class EnhancedInterfaceType extends EnhancedBase<InterfaceType> {
	raw: InterfaceType;
	constructor(common: EnhanceCommon, raw: InterfaceType);
	getDefinitionIdentifier(v2: boolean): string;
	getImportedDefinitionIdentifier(v2: boolean): string;
	get properties(): InterfaceType["properties"];
	getCleanedUpDefinition(v2: boolean): InterfaceMetadata;
}
