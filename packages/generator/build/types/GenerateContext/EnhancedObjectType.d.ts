import type { ObjectMetadata } from "@osdk/api";
import type { ObjectTypeFullMetadata } from "@osdk/foundry.ontologies";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";
export declare class EnhancedObjectType extends EnhancedBase<ObjectTypeFullMetadata> {
	raw: ObjectTypeFullMetadata;
	constructor(common: EnhanceCommon, raw: ObjectTypeFullMetadata);
	getDefinitionIdentifier(v2: boolean): string;
	getImportedDefinitionIdentifier(v2: boolean): string;
	getCleanedUpDefinition(v2: boolean): ObjectMetadata;
}
