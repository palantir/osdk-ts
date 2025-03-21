import type { Query } from "./Query.js";
export type CacheKey<
	X extends string = string,
	T_StoreValue = unknown,
	T_Query extends Query<any, any, any> = Query<any, any, any>,
	T_KeyFactoryArgs extends any[] = any[]
> = {
	type: X
	otherKeys: T_KeyFactoryArgs
	__cacheKey: {
		value: T_StoreValue
		query: T_Query
		args: T_KeyFactoryArgs
	}
};
