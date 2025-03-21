import type { AggregatableKeys } from "./AggregatableKeys.js";
import type { UnorderedAggregationClause } from "./AggregationsClause.js";
export type huh = AggregatableKeys<{
	metadata: any
	objects: {
		Todo: {
			type: "object"
			apiName: "Todo"
			primaryKeyApiName: "id"
			primaryKeyType: "double"
			links: {}
			properties: {
				text: {
					type: "string"
				}
				id: {
					type: "double"
				}
			}
		}
	}
	actions: {}
	queries: {}
}["objects"]["Todo"]>;
export type Q = UnorderedAggregationClause<{
	metadata: any
	objects: {
		Todo: {
			type: "object"
			apiName: "Todo"
			primaryKeyApiName: "id"
			primaryKeyType: "double"
			links: {}
			properties: {
				text: {
					type: "string"
				}
				id: {
					type: "double"
				}
			}
		}
	}
	actions: {}
	queries: {}
}["objects"]["Todo"]>;
