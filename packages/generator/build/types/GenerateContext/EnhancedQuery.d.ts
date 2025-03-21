import type { QueryDataType, QueryTypeV2 } from "@osdk/foundry.ontologies";
import type { EnhanceCommon } from "./EnhanceCommon.js";
import { EnhancedBase } from "./EnhancedBase.js";
export declare class EnhancedQuery extends EnhancedBase<QueryTypeV2> {
	raw: QueryTypeV2;
	constructor(common: EnhanceCommon, raw: QueryTypeV2);
	get description(): string | undefined;
	get parameters(): QueryTypeV2["parameters"];
	get output(): QueryDataType;
	get paramsIdentifier(): string;
	get definitionIdentifier(): string;
	get definitionParamsIdentifier(): string;
}
