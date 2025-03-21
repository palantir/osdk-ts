export declare function withoutRid<T extends {
	__rid?: any
}>(o: T): Omit<T, "__rid">;
