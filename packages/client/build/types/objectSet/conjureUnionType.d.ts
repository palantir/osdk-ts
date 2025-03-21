type DeepWriteable<T> = { -readonly [P in keyof T] : DeepWriteable<T[P]> };
/**
* Helper function that creates the shape of a conjure union in fewer bytes than manually declaring it (when compressed)
*
* e.g `{type:"base",base:{foo:5}}` becomes `a("base",{foo:5})`
*/
export declare function conjureUnionType<
	T extends string,
	const V
>(type: T, value: V): {
	type: T
} & Record<T, DeepWriteable<V>>;
export {};
