import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from "@osdk/api";
import type { $ExpectedClientVersion } from "../../OntologyMetadata.js";
import { $osdkMetadata } from "../../OntologyMetadata.js";
import type { Employee } from "../objects/Employee.js";
export declare namespace queryAcceptsObject {
	interface Signature {
		/**
		* description of the query that takes object types
		*/
		(query: queryAcceptsObject.Parameters): Promise<queryAcceptsObject.ReturnType>;
	}
	interface Parameters {
		/**
		* (no ontology metadata)
		*/
		readonly object: QueryParam.ObjectType<Employee>;
	}
	type ReturnType = QueryResult.ObjectType<Employee>;
}
export interface queryAcceptsObject extends QueryDefinition<queryAcceptsObject.Signature>, VersionBound<$ExpectedClientVersion> {
	__DefinitionMetadata?: {
		apiName: "queryAcceptsObject"
		description: "description of the query that takes object types"
		displayName: "QueryAcceptsObject"
		rid: "ri.function-registry.main.function.9b55870a-63c7-4d48-8f06-9627c0805968"
		type: "query"
		version: "0.11.0"
		parameters: {
			/**
			* (no ontology metadata)
			*/
			object: {
				nullable: false
				object: "Employee"
				type: "object"
				__OsdkTargetType?: Employee
			}
		}
		output: {
			nullable: false
			object: "Employee"
			type: "object"
			__OsdkTargetType?: Employee
		}
		signature: queryAcceptsObject.Signature
	};
	apiName: "queryAcceptsObject";
	type: "query";
	version: "0.11.0";
	osdkMetadata: typeof $osdkMetadata;
}
export declare const queryAcceptsObject: queryAcceptsObject;
