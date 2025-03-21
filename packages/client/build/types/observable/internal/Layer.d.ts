import type { CacheKey } from "./CacheKey.js";
export declare class Layer {
	#private;
	constructor(parent: Layer | undefined, layerId: unknown);
	get parentLayer(): Layer | undefined;
	get layerId(): unknown;
	addLayer(layerId: unknown): Layer;
	removeLayer(layerId: unknown): Layer;
	entries(): IterableIterator<[CacheKey<string, any, any>, Entry<any>]>;
	keys(): IterableIterator<CacheKey<string, any, any>>;
	get<K extends CacheKey<string, unknown, any>>(cacheKey: K): Entry<K> | undefined;
	set<K extends CacheKey<string, unknown, any>>(cacheKey: K, value: Entry<K>): void;
}
export declare class Entry<K extends CacheKey<any, any, any>> {
	readonly cacheKey: K;
	value: K["__cacheKey"]["value"] | undefined;
	lastUpdated: number;
	status: "init" | "loading" | "loaded" | "error";
	constructor(cacheKey: K, value: K["__cacheKey"]["value"], lastUpdated: number, status?: "init" | "loading" | "loaded" | "error");
}
