export type PartialBy<
	T,
	K extends keyof T
> = Omit<T, K> & Partial<Pick<T, K>>;
export type PartialByNotStrict<
	T,
	K
> = K extends keyof T ? PartialBy<T, K> : "never";
