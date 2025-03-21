import type { Canonical } from "./Canonical.js";
export declare class WeakRefTrie<X extends object> {
	#private;
	constructor(makeData?: (array: any[]) => X);
	lookupArray<T extends IArguments | any[]>(array: T): X;
	peekArray<T extends IArguments | any[]>(array: T): X | undefined;
	removeArray<T extends IArguments | any[]>(array: T): X | undefined;
}
export declare class OrderByCanonicalizer {
	#private;
	canonicalize: (orderBy: Record<string, "asc" | "desc" | undefined>) => Canonical<Record<string, "asc" | "desc" | undefined>>;
}
