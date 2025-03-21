export interface AsyncNotStartedLoadingValue {
	type: "not-started";
	value?: never;
	error?: never;
}
export interface AsyncLoadingValue {
	type: "loading";
	value?: never;
	error?: never;
}
export interface AsyncLoadedValue<V> {
	type: "loaded";
	value: V | undefined;
	error?: never;
}
export interface AsyncReloadingValue<V> {
	type: "reloading";
	value: V | undefined;
	error?: never;
}
export interface AsyncFailedValue<
	V,
	E = Error
> {
	type: "failed";
	error: E;
	value: V | undefined;
}
/**
* Represents a value that is loaded asynchronously.
* This allows for type safe checking of what the value's loading state is.
* The expected lifecycle is:
*    not-started -> loading -> loaded or failed -> reloading -> ....
*/
export type AsyncValue<
	V,
	E = Error
> = AsyncNotStartedLoadingValue | AsyncLoadingValue | AsyncLoadedValue<V> | AsyncReloadingValue<V> | AsyncFailedValue<V, E>;
