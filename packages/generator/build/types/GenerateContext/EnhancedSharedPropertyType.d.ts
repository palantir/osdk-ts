import type { SharedPropertyType } from "@osdk/foundry.ontologies";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";
export declare class EnhancedSharedPropertyType extends EnhancedBase<SharedPropertyType> {
	raw: SharedPropertyType;
	constructor(common: EnhanceCommon, raw: SharedPropertyType);
}
