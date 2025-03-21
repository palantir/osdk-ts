import type { QueryMetadata, QueryParameterDefinition } from "@osdk/api";
import type { QueryParameterV2, QueryTypeV2 } from "@osdk/foundry.ontologies";
export declare function wireQueryTypeV2ToSdkQueryMetadata(input: QueryTypeV2): QueryMetadata;
export declare function wireQueryTypeV2ToSdkQueryDefinitionNoParams(input: QueryTypeV2): {
	type: string
	apiName: string
	description: string | undefined
	displayName: string | undefined
	version: string
	rid: string
};
export declare function wireQueryParameterV2ToQueryParameterDefinition(parameter: QueryParameterV2): QueryParameterDefinition<any>;
