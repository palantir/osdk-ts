/**
* A simple cache that can be used to store values for a given client.
*/
export interface SimpleCache<
	K,
	V
> {
	get: (key: K) => V;
	set: <X extends V>(key: K, value: X) => X;
	remove: (key: K) => boolean;
}
/**
* Create a new cache with a factory function.
* @param fn A factory function that will be used to create the value if it does not exist in the cache.
*/
export declare function createSimpleCache<
	K,
	V
>(map: Map<K, V> | (K extends object ? WeakMap<K, V> : never), fn: (k: K) => V): SimpleCache<K, V>;
/**
* Create a new cache without a factory function.
*/
export declare function createSimpleCache<
	K,
	V
>(map?: Map<K, V> | (K extends object ? WeakMap<K, V> : never)): SimpleCache<K, V | undefined>;
/**
* A simple async cache that can be used to store values for a given client.
*/
export interface WeakAsyncCache<
	K,
	V
> {
	getOrUndefined: (key: K) => V | undefined;
	get: (key: K) => Promise<V>;
	/**
	* @param client the client to key from
	* @param key the sub-key to use
	* @param value the value or a promise to the value
	* @returns a new promise to the resolved value
	*/
	set: (key: K, value: V | Promise<V>) => Promise<V>;
}
/**
* Create a new cache with an async factory function.
* @param fn A factory function that will be used to create the value if it does not exist in the cache.
* @returns
*/
export declare function createSimpleAsyncCache<
	K,
	V
>(type: "weak" | "strong", fn: (key: K) => Promise<V>, createCacheLocal?: typeof createSimpleCache): WeakAsyncCache<K, V>;
