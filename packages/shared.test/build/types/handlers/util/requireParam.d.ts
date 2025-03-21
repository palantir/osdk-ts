export declare function requireParam<
	P,
	K extends string
>(params: P, name: K & keyof P): asserts params is P & { [KK in K] : string };
export declare function requireParams<
	P,
	K extends string
>(params: P, names: Array<K & keyof P>): asserts params is P & { [KK in K] : string };
