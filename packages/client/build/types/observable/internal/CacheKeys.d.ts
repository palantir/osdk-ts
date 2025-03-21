import type { CacheKey } from "./CacheKey.js";
import type { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import type { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";
export declare class CacheKeys {
	#private;
	constructor(whereCanonicalizer: WhereClauseCanonicalizer, orderByCanonicalizer: OrderByCanonicalizer, onCreate: (cacheKey: CacheKey) => void);
	get<K extends CacheKey<string, any, any>>(type: K["type"], ...args: K["__cacheKey"]["args"]): K;
	remove<K extends CacheKey<string, any, any>>(cacheKey: K): void;
}
