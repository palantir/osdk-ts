import type { GroupByClause } from "./GroupByClause.js";
export type F = GroupByClause<{
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
