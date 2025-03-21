interface WeakMapIterables<
	K extends WeakKey,
	V
> {
	/** Returns an iterable of entries in the map. */
	[Symbol.iterator](): IterableIterator<[K, V]>;
	/**
	* Returns an iterable of key, value pairs for every entry in the map.
	*/
	entries(): IterableIterator<[K, V]>;
	/**
	* Returns an iterable of keys in the map
	*/
	keys(): IterableIterator<K>;
	/**
	* Returns an iterable of values in the map
	*/
	values(): IterableIterator<V>;
}
export declare class WeakMapWithEntries<
	K extends WeakKey,
	V
> implements WeakMap<K, V>, WeakMapIterables<K, V> {
	#private;
	constructor();
	delete(key: K): boolean;
	get(key: K): V | undefined;
	has(key: K): boolean;
	/**
	* Adds a new element with a specified key and value.
	* @param key Must be an object or symbol.
	*/
	set(key: K, value: V): this;
	[Symbol.toStringTag]: string;
	/** Returns an iterable of entries in the map. */
	[Symbol.iterator](): IterableIterator<[K, V]>;
	/**
	* Returns an iterable of key, value pairs for every entry in the map.
	*/
	entries(): IterableIterator<[K, V]>;
	/**
	* Returns an iterable of keys in the map
	*/
	keys(): IterableIterator<K>;
	/**
	* Returns an iterable of values in the map
	*/
	values(): IterableIterator<V>;
}
export {};
