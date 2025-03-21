import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Employee } from "../objects/Employee.js";
export declare namespace queryAcceptsObjectSets {
	interface Signature {
		/**
		* description of the query that takes objectSet types
		*/
		(query: queryAcceptsObjectSets.Parameters): Promise<queryAcceptsObjectSets.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly objectSet: QueryParam.ObjectSetType<Employee>;
	}
	type ReturnType = QueryResult.ObjectSetType<Employee>;
}
export interface queryAcceptsObjectSets extends QueryDefinition<queryAcceptsObjectSets.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "queryAcceptsObjectSets"
		description: "description of the query that takes objectSet types"
		displayName: "QueryAcceptsObjectSets"
		rid: "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968"
		type: "query"
		version: "0.11.0"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			objectSet: {
				nullable: false
				objectSet: "Employee"
				type: "objectSet"
				__OsdkTargetType?: Employee
			}
		}
		output: {
			nullable: false
			objectSet: "Employee"
			type: "objectSet"
			__OsdkTargetType?: Employee
		}
		signature: queryAcceptsObjectSets.Signature
	};
	apiName: "queryAcceptsObjectSets";
	type: "query";
	version: "0.11.0";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const queryAcceptsObjectSets: queryAcceptsObjectSets;
